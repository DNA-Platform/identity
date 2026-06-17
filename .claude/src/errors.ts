///: Errors — typed errors and the Fallible interface.
///: ChatNotFoundError, WrongScreenError, and others. The Fallible interface
///: gives every View object an errors array for tracking partial failures
///: without throwing — callers check errors after the operation.
///:
///: [Pitfalls](../library/reference-desk/07-pitfalls.md) — error patterns.

// Errors — typed errors and error-tracking utilities for the driver.

import type { Screen } from './navigator.ts';

// --- Base ---

export class DriverError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DriverError';
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
