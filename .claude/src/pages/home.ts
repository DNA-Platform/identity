// Home — the default page. Greeting, composer, model picker.
// See: library/..team/claude/.perspective/02-2026-05-10-home-screen-anatomy.md

import { Composer } from '../components/composer.ts';
import { Message } from '../components/composed-message.ts';
import { ModelPicker } from '../components/model-picker.ts';

export class Home {
  readonly composer: Composer;
  readonly message: Message;
  readonly model: ModelPicker;

  constructor(composer: Composer, message: Message, model: ModelPicker) {
    this.composer = composer;
    this.message = message;
    this.model = model;
  }
}
