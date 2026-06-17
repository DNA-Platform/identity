///: Automation — the toolkit interface injected into controllers.
///: Controllers receive this bundle; they never construct infrastructure.
///: Four tools: gateway, uia, keyboard, navigator.
///:
///: [Layers](../library/reference-desk/02-01-the-architecture--layers.md) — the dependency direction.

// Automation — the toolkit injected into every controller.
// Bundles the four tools controllers need:
// - gateway: retry, timeout, polling, diagnostic screenshots
// - uia: accessibility tree reads and element interaction
// - keyboard: typing, key combos, clicks, clipboard
// - navigator: screen detection, navigation, recovery

import type { Shell } from './shell.ts';
import type { Window } from './window.ts';
import type { Gateway } from './gateway.ts';
import type { Diagnostics } from './diagnostics.ts';
import type { Uia } from './uia.ts';
import type { Keyboard } from './keyboard.ts';
import type { Navigator } from './navigator.ts';

export interface Automation {
  shell: Shell;
  window: Window;
  gateway: Gateway;
  diagnostics: Diagnostics;
  uia: Uia;
  keyboard: Keyboard;
  navigator: Navigator;
}
