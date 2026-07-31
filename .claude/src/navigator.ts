///: Navigator — screen detection, navigation, and recovery.
///: Tracks which page is active via URL. Detects overlays (dialogs, menus).
///: goHome() recovers from any state. resetToHome() is the universal safety net.
///:
///: [Navigation](../library/reference-desk/02-03-the-architecture--navigation.md) — screens, overlays, recovery.
///: [The App Model](../library/reference-desk/02-04-the-architecture--app-model.md) — active page concept.

import type { Gateway } from './gateway.ts';
import type { Uia } from './uia.ts';
import type { Keyboard } from './keyboard.ts';
import type { TreeSnapshot } from './tree.ts';
import { WrongScreenError, DriverError } from './errors.ts';

export type Screen = 'home' | 'conversation' | 'projects' | 'project' | 'settings' | 'customize' | 'unknown';

/** The names Claude Desktop has used for "start a fresh chat", newest first.
 *
 *  Grounded in captured trees, not guessed: `New` is what the 2026-07 build shows
 *  on its "New task" screen; `New chat` is what every build before it showed. The
 *  list exists because the app renames things, and a driver that hard-codes one
 *  name breaks silently and opaquely when it changes — which is exactly what
 *  happened. Looking for whichever is present is not a retry; it is reading the
 *  screen before acting on it. */
export const HOME_AFFORDANCES = ['New chat', 'New'] as const;

export class Navigator {
  screen: Screen = 'unknown';
  hasOpenDialog = false;
  hasOpenMenu = false;
  lastError: Error | null = null;

  private readonly gateway: Gateway;
  private readonly uia: Uia;
  private readonly keyboard: Keyboard;

  constructor(gateway: Gateway, uia: Uia, keyboard?: Keyboard) {
    this.gateway = gateway;
    this.uia = uia;
    this.keyboard = keyboard!;
  }

  /** Which screen are we on? **The URL is the whole answer** — `screenFromUrl` is
   *  the only thing that decides, and it needs nothing else.
   *
   *  This used to walk the entire UIA tree on every call, to set `hasOpenDialog`
   *  and `hasOpenMenu`. Nothing in the driver reads those. Meanwhile this method is
   *  the verify predicate for nearly every navigation in the app, so a poll loop
   *  paid a full tree walk per iteration for two booleans no one consumed. Overlay
   *  detection now lives in [`detectOverlays`](#) and is asked for when wanted. */
  async detectScreen(): Promise<Screen> {
    this.screen = this.screenFromUrl(await this.uia.readUrl());
    return this.screen;
  }

  /** Is a dialog or a menu sitting over the app? One tree read, both answers, and
   *  it also updates `hasOpenDialog` / `hasOpenMenu` for anyone reading the fields.
   *  Separate from `detectScreen` because knowing WHERE you are and knowing WHAT is
   *  covering it are different questions with very different costs. */
  async detectOverlays(): Promise<{ dialog: boolean; menu: boolean }> {
    const names = await this.uia.allNames();
    this.hasOpenDialog = names.some(n =>
      n === 'ControlType.Window | Add text content' ||
      n === 'ControlType.Window | Open' ||
      n === 'ControlType.Window | Set project instructions'
    );
    this.hasOpenMenu = names.some(n =>
      n.includes('ControlType.Menu | Add files') ||
      n.includes('ControlType.Menu | Doug Pro') ||
      n.includes('ControlType.Menu | Settings')
    );
    return { dialog: this.hasOpenDialog, menu: this.hasOpenMenu };
  }

  requireScreen(...allowed: Screen[]): void {
    if (this.screen !== 'unknown' && !allowed.includes(this.screen)) {
      throw new WrongScreenError(allowed, this.screen);
    }
  }

  async ensureHome(): Promise<void> {
    const current = await this.detectScreen();
    if (current === 'home') return;
    await this.goHome();
  }

  async goHome(): Promise<void> {
    this.lastError = null;
    const current = await this.detectScreen();

    // Escape from settings/customize first — these pages don't have "New chat"
    if (current === 'settings' || current === 'customize') {
      await this.leaveSettings();
    }

    // LOOK FIRST, then act once. The app renames things: it shipped "New chat" for
    // months, and as of 2026-07 the button is named "New" on a "New task" screen
    // (Chat / Cowork / Code became mode tabs). Rather than guessing a name and
    // failing opaquely, read the tree and use whichever affordance is actually
    // there. This is NOT a retry — the action still fires exactly once; we simply
    // find the door before opening it.
    const { home, tree } = await this.findHomeAffordance();
    if (!home) {
      throw new DriverError(
        'No way home: none of the known "new chat" affordances is on screen ' +
        `(tried: ${HOME_AFFORDANCES.join(', ')}). The app may have been updated — ` +
        'the tree below is what it actually shows.',
      ).withTree(tree);
    }

    await this.gateway.act(
      async () => {
        const invoked = await this.uia.invokeByName(home);
        if (!invoked) {
          throw new DriverError(`"${home}" was on the tree but could not be invoked`);
        }
      },
      async () => {
        const screen = await this.detectScreen();
        return screen === 'home';
      },
      // Hand over the tree we just read to choose the affordance. Without this the
      // gateway walks the tree again to precheck the very element we found IN that
      // walk — the same screen, read twice, milliseconds apart.
      { description: `Navigate to home via "${home}"`, target: { name: home }, snapshot: tree },
    );
    this.screen = 'home';
  }

  /** Which "new chat" affordance is on screen right now, if any — and the tree that
   *  says so. One read answers for every candidate, prechecks the action, and
   *  carries the error when none of them is there. */
  private async findHomeAffordance(): Promise<{ home: string | null; tree: TreeSnapshot }> {
    const tree = await this.uia.snapshot();
    if (tree.isEmpty) return { home: null, tree };  // could not see — not "not there"
    for (const name of HOME_AFFORDANCES) {
      if (tree.has({ name })) return { home: name, tree };
    }
    return { home: null, tree };
  }

  async leaveSettings(): Promise<void> {
    await this.gateway.act(
      async () => {
        const invoked = await this.uia.invokeByName('Back to Claude');
        if (!invoked) {
          throw new Error('Could not find "Back to Claude" in the UIA tree');
        }
      },
      async () => {
        const screen = await this.detectScreen();
        return screen !== 'settings' && screen !== 'customize';
      },
      { description: 'Leave settings' },
    );
  }

  async goToSettings(): Promise<void> {
    this.lastError = null;
    const current = await this.detectScreen();
    if (current === 'settings') return;

    await this.gateway.act(
      async () => {
        await this.keyboard.sendKeys('^{,}');
      },
      async () => {
        const screen = await this.detectScreen();
        return screen === 'settings';
      },
      { description: 'Navigate to settings' },
    );
    this.screen = 'settings';
  }

  async goToProjects(): Promise<void> {
    this.lastError = null;
    await this.gateway.act(
      async () => {
        const invoked = await this.uia.invokeByName('Projects');
        if (!invoked) {
          throw new Error('Could not find "Projects" in the UIA tree');
        }
      },
      async () => {
        const screen = await this.detectScreen();
        return screen === 'projects';
      },
      { description: 'Navigate to projects' },
    );
    this.screen = 'projects';
  }

  async resetToHome(): Promise<void> {
    this.lastError = null;

    // Close any open dialogs, menus, overlays.
    //
    // The pause is an honest `setTimeout`, not `waitFor(() => true)`. That
    // predicate passes on its first evaluation, so it never waited for anything —
    // it only appeared to settle the UI because the foreground check inside it cost
    // most of a second. Once that cost was removed the disguise fell off. A brief
    // settle after a keystroke is not a retry: nothing fires twice.
    await this.keyboard.sendKeys('{ESCAPE}');
    await settle();
    await this.keyboard.sendKeys('{ESCAPE}');
    await settle();

    // Check for file browser dialog and close it
    const names = await this.uia.allNames();
    if (names.some(n => n === 'ControlType.Window | Open')) {
      // File browser is open — focus it and close
      await this.keyboard.sendKeys('{ESCAPE}');
      await this.gateway.waitFor(async () => {
        const n = await this.uia.allNames();
        return !n.some(x => x === 'ControlType.Window | Open');
      });
    }

    // Check for text content dialog and close it
    if (names.some(n => n === 'ControlType.Window | Add text content')) {
      await this.uia.invokeByName('Cancel');
      await this.gateway.waitFor(async () => {
        const n = await this.uia.allNames();
        return !n.some(x => x === 'ControlType.Window | Add text content');
      });
    }

    const current = await this.detectScreen();
    if (current === 'home') return;

    if (current === 'settings' || current === 'customize') {
      await this.leaveSettings();
    }

    await this.goHome();
  }

  private screenFromUrl(url: string | null): Screen {
    if (!url) return 'unknown';
    if (url.includes('/settings')) return 'settings';
    if (url.includes('/customize')) return 'customize';
    if (url.includes('/chat/')) return 'conversation';
    if (url.includes('/project/')) return 'project';
    if (url.includes('/projects')) return 'projects';
    if (url.endsWith('/new') || url.endsWith('.ai') || url.endsWith('.ai/')) return 'home';
    return 'unknown';
  }
}

/** Escape is dispatched by the OS, not by us; the app needs a moment to act on it
 *  before the tree tells the truth about what is still open. Fixed and short — it
 *  is a settle, not a poll, and nothing is fired twice while it runs. */
function settle(ms = 300): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}
