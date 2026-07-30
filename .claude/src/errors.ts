///: Errors — typed errors and the Fallible interface.
///: ChatNotFoundError, WrongScreenError, and others. The Fallible interface
///: gives every View object an errors array for tracking partial failures
///: without throwing — callers check errors after the operation.
///:
///: [Pitfalls](../library/reference-desk/07-pitfalls.md) — error patterns.

// Errors — typed errors and error-tracking utilities for the driver.

import type { Screen } from './navigator.ts';
import type { TreeSnapshot } from './tree.ts';

// --- Base ---

export class DriverError extends Error {
  /** The screen as it actually was when this failed. Attached by whoever raised the
   *  error, so the reader never has to reproduce the failure to find out what was on
   *  screen — which is the whole cost of a driver bug. Undefined only when the tree
   *  could not be read at all. */
  tree?: TreeSnapshot;

  constructor(message: string) {
    super(message);
    this.name = 'DriverError';
  }

  /** Attach the evidence and return this, so a raise site reads as one expression. */
  withTree(tree: TreeSnapshot | undefined): this {
    this.tree = tree;
    return this;
  }

  /** The message plus the tree, printed for a person — what a failed command shows:
   *  what was expected, and what was actually there. */
  get detail(): string {
    return this.tree ? `${this.message}\n\n${this.tree}` : this.message;
  }

  /** Serializable form — the error payload that travels back to a caller. */
  toJSON(): { name: string; message: string; tree?: ReturnType<TreeSnapshot['toJSON']> } {
    return { name: this.name, message: this.message, tree: this.tree?.toJSON() };
  }
}

/** The precondition failed: the element an action was about to touch is not on the
 *  screen. Raised BEFORE the action fires, so nothing happened — which is the point.
 *  It names what it looked for and carries the tree that disagreed. */
export class PreconditionError extends DriverError {
  constructor(
    public readonly description: string,
    public readonly expected: { type?: string; name?: string; contains?: string },
  ) {
    const what = [
      expected.type && `type "${expected.type}"`,
      expected.name && `name "${expected.name}"`,
      expected.contains && `name containing "${expected.contains}"`,
    ].filter(Boolean).join(', ');
    super(`${description} — precondition failed: no element with ${what} is on screen. The action did not fire.`);
    this.name = 'PreconditionError';
  }
}

// --- Navigation ---

export class NavigationError extends DriverError {
  constructor(
    message: string,
    public readonly expected: Screen,
    public readonly actual: Screen,
  ) {
    super(message);
    this.name = 'NavigationError';
  }
}

export class WrongScreenError extends DriverError {
  constructor(
    public readonly allowed: Screen[],
    public readonly actual: Screen,
  ) {
    const names = allowed.map(s => `"${s}"`).join(' or ');
    super(`Expected ${names} screen but on "${actual}"`);
    this.name = 'WrongScreenError';
  }
}

// --- Not found ---

export class ChatNotFoundError extends DriverError {
  constructor(public readonly title: string) {
    super(`Chat "${title}" not found in the list`);
    this.name = 'ChatNotFoundError';
  }
}

export class ProjectNotFoundError extends DriverError {
  constructor(public readonly projectName: string) {
    super(`Project "${projectName}" not found in the grid`);
    this.name = 'ProjectNotFoundError';
  }
}

// --- Error tracking ---

export interface Fallible {
  hasError: boolean;
  lastError: Error | null;
}

export async function tracked<T>(target: Fallible, fn: () => Promise<T>): Promise<T> {
  target.hasError = false;
  target.lastError = null;
  try {
    return await fn();
  } catch (e) {
    target.hasError = true;
    target.lastError = e instanceof Error ? e : new Error(String(e));
    throw e;
  }
}
