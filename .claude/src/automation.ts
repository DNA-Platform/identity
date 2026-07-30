///: Automation — the toolkit interface injected into controllers.
///: Controllers receive this bundle; they never construct infrastructure.
///: Seven tools: shell, window, gateway, diagnostics, uia, keyboard, navigator.
///:
///: The `gateway` here is the [inverted edge](../library/reference-desk/02-01-the-architecture--layers.md#the-inverted-edge):
///: handing it downward is what lets controllers call it, which
///: [invariant 5](../library/reference-desk/13-the-redesign.md#layer-invariants--the-sanity-test) forbids. Narrowing this
///: interface to [Instruments](../library/reference-desk/02-01-the-architecture--layers.md#instruments--the-narrowed-set)
///: turns the violation into compile errors. `navigator` carries a gateway of its
///: own, so it leaves the narrowed set on a later stage — once `requireScreen`
///: (46 of its 51 controller calls) is deleted per P3.
///:
///: [Layers](../library/reference-desk/02-01-the-architecture--layers.md) — the dependency direction.

// Automation — the toolkit injected into every controller.
// Bundles the seven tools controllers are handed today:
// - shell: the persistent PowerShell session
// - window: Win32 lifecycle — find, launch, focus, maximize, minimize
// - gateway: retry, timeout, polling, diagnostic screenshots
//            (LAYER VIOLATION — the View's tool, not the controllers'; see the annotation)
// - diagnostics: screenshots and UIA dumps on failure
// - uia: accessibility tree reads and element interaction
// - keyboard: typing, key combos, clicks, clipboard
// - navigator: screen detection, navigation, recovery
//              (carries a Gateway internally — a second route to the same violation)

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
