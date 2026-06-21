///: HomePage — the empty/new-chat screen. Greeting, composer, model picker.
///: You land here from launch() and from Sidebar.newChat(). Type into the
///: composer and send() to start a conversation — send() returns the
///: ConversationPage you land on.
///:
///: [The Redesign](../../library/reference-desk/13-the-redesign.md#the-object-model-settled--model-the-objects-not-their-features) — HomePage in the settled model.
///: [home-fresh tree](../trees/home-fresh.txt) — the empty composer + sidebar.

import type { Automation } from '../automation.ts';
import type { Gateway } from '../gateway.ts';
import type { Sidebar } from '../components/sidebar.ts';
import type { Composer } from '../components/composer.ts';
import type { ModelPicker } from '../components/model-picker.ts';
import { Page } from './page.ts';

export class HomePage extends Page {
  constructor(
    auto: Automation,
    gateway: Gateway,
    sidebar: Sidebar,
    readonly composer: Composer,
    readonly modelPicker: ModelPicker,
  ) {
    super(auto, gateway, sidebar);
  }

  get screenType(): string { return 'home'; }
}
