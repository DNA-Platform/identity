///: Page — the only base class. Every screen IS-A page (it has the sidebar).
///: Subclasses carry the properties they actually have (composer, response,
///: messages, …) as INDEPENDENT properties — a shared feature is not a class, so
///: there is no ComposerPage; composer is just a property on the pages that have
///: one. You get a Page by navigating: launch() returns HomePage, item.open()
///: returns ConversationPage. The type you hold is the screen you're on — if a
///: method isn't on your page type, you can't call it, because it isn't on that
///: screen (P3: the type system is the guard, no requireScreen).
///:
///: If you can't do it with a mouse and keyboard, it can't be on a Page.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features) — Page is the only base.
///: [Architecture Patterns](../../library/reference-desk/10-architecture-patterns.md) — the one rule.

import type { Sidebar } from '../components/sidebar.ts';
import type { Gateway } from '../gateway.ts';
import type { Automation } from '../automation.ts';

export abstract class Page {
  constructor(
    protected readonly auto: Automation,
    protected readonly gateway: Gateway,
    private readonly _sidebar: Sidebar,
  ) {}

  /** The one panel on every page — the global conversation list, projects, search. */
  sidebar(): Sidebar {
    return this._sidebar;
  }

  /** This page's stable id — its URL (claude.ai/chat/<id>, /project/<id>, /new,
   *  /projects). Every screen has one. The app has no URL-navigation, but the URL
   *  is a reliable IDENTITY: the session stores it and validates "are we still on
   *  this page?" against the live tree — it never assumes (the app may have
   *  restarted or been navigated away). */
  async id(): Promise<string> {
    return (await this.auto.uia.readUrl()) ?? '';
  }

  abstract get screenType(): string;
}
