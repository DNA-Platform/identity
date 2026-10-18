// ============================================
// Core Math Utilities
// ============================================

/**
 * Round a number to specific decimal places
 */
export function roundPrecisely(value: f64, decimals: i32 = 6): f64 {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

// ============================================
// Array/Index Utilities
// ============================================

/**
 * Convert negative index to positive
 */
export function evaluateNegativeIndex(index: i32, length: i32): i32 {
  const evaluated = index < 0 ? length + index : index;
  if (evaluated < 0 || evaluated >= length) {
    throw new Error(
      `Index ${index} out of bounds for collection of length ${length}`
    );
  }
  return evaluated;
}

/**
 * Evaluate range selector like Python slicing
 * Examples: "2:5", ":3", "5:", ":"
 */
export function evaluateRangeSelector(selector: string, length: i32): i32[] {
  const result: i32[] = [];
  
  if (selector === ":") {
    for (let i = 0; i < length; i++) {
      result.push(i);
    }
    return result;
  }

  // Parse the selector
  const parts = selector.split(":");
  let start: i32 = 0;
  let end: i32 = length - 1;
  let step: i32 = 1;

  if (parts.length === 1) {
    // Single number
    const idx = I32.parseInt(parts[0]);
    const evaluated = evaluateNegativeIndex(idx, length);
    result.push(evaluated);
    return result;
  }

  if (parts[0] !== "") {
    start = evaluateNegativeIndex(I32.parseInt(parts[0]), length);
  }

  if (parts.length > 1 && parts[1] !== "") {
    end = evaluateNegativeIndex(I32.parseInt(parts[1]), length);
  }

  if (parts.length > 2 && parts[2] !== "") {
    step = I32.parseInt(parts[2]);
  }

  // Generate range
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

/**
 * Array equality with tolerance for numbers
 */
export function arrayEquals<T>(first: T[], second: T[], tolerance: f64 = 0.0001): boolean {
  if (!first && !second) return true;
  if (!first || !second) return false;
  if (first.length !== second.length) return false;

  for (let i = 0; i < first.length; i++) {
    if (isFloat<T>()) {
      const diff = Math.abs((first[i] as f64) - (second[i] as f64));
      if (diff > tolerance) return false;
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}

// ============================================
// Simple Clone (AS doesn't have structured clone)
// ============================================

/**
 * Clone arrays and simple objects
 */
export function clone<T>(source: T): T {
  // Handle arrays
  if (source instanceof Array) {
    const arr = source as Array<any>;
    const result: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    }
    return result as T;
  }
  
  // Handle typed arrays
  if (source instanceof Float32Array) {
    const arr = source as Float32Array;
    const result = new Float32Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      result[i] = arr[i];
    }
    return result as T;
  }

  // Primitives just return
  return source;
}

// ============================================
// Range Helper (like Python range)
// ============================================

/**
 * Generate range of numbers
 */
export function range(start: i32, end: i32, step: i32 = 1): i32[] {
  const result: i32[] = [];
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i > end; i += step) {
      result.push(i);
    }
  }
  return result;
}

/**
 * Helper to create range - r(5) = [0,1,2,3,4]
 */
export function r(n: i32): i32[] {
  return range(0, n);
}

// ============================================
// Subscribable Pattern (Event System)
// ============================================

export class Subscribable<T> {
  private handlers: Array<(sender: T) => void> = [];
  private _off: boolean = false;

  on(): void {
    this._off = false;
  }

  off(): void {
    this._off = true;
  }

  subscribe(handler: (sender: T) => void): void {
    this.handlers.push(handler);
  }

  unsubscribe(handler: (sender: T) => void): void {
    const index = this.handlers.indexOf(handler);
    if (index >= 0) {
      this.handlers.splice(index, 1);
    }
  }

  fire(sender: T): void {
    if (this._off) return;
    for (let i = 0; i < this.handlers.length; i++) {
      this.handlers[i](sender);
    }
  }

  reset(): void {
    this.handlers = [];
  }
}

// ============================================
// Simple Task Queue for Async Operations
// ============================================

export class Task {
  constructor(
    public command: string,
    public id: i32
  ) {}
}

export class TaskQueue {
  private tasks: Task[] = [];
  private currentId: i32 = 0;

  enqueue(command: string): i32 {
    const id = this.currentId++;
    this.tasks.push(new Task(command, id));
    return id;
  }

  dequeue(): Task | null {
    if (this.tasks.length === 0) return null;
    return this.tasks.shift();
  }

  length(): i32 {
    return this.tasks.length;
  }

  clear(): void {
    this.tasks = [];
  }
}

// ============================================
// Console shim for AssemblyScript
// ============================================

export namespace console {
  export function log(message: string): void {
    // AS built-in trace outputs to host
    trace(message);
  }

  export function error(message: string): void {
    trace("ERROR: " + message);
  }

  export function warn(message: string): void {
    trace("WARN: " + message);
  }
}

// ============================================
// Type Guards (AS style)
// ============================================

// Check if type is float
export function isFloat<T>(): boolean {
  return sizeof<T>() === 4 || sizeof<T>() === 8;
}

// Check if type is integer
export function isInteger<T>(): boolean {
  return sizeof<T>() <= 4 && !isFloat<T>();
}

// ============================================
// Dictionary/Map helpers
// ============================================

export class Dictionary<T> extends Map<string, T> {
  // Adds some convenience methods
  getOrDefault(key: string, defaultValue: T): T {
    if (this.has(key)) {
      return this.get(key);
    }
    return defaultValue;
  }

  getOrCreate(key: string, creator: () => T): T {
    if (this.has(key)) {
      return this.get(key);
    }
    const value = creator();
    this.set(key, value);
    return value;
  }
}

// Helper to create dictionary
export function dictionary<T>(): Dictionary<T> {
  return new Dictionary<T>();
}