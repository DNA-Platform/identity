// Lazy<T> — a value that loads on demand and stays consistent with the page.
// Access .value for the current cache. Call .wait() to load fully.
// Call .reset() when the page changes.

export class Lazy<T> {
  private _value: T;
  private _loaded = false;
  private _loading = false;
  private readonly loader: () => Promise<T>;

  constructor(initial: T, loader: () => Promise<T>) {
    this._value = initial;
    this.loader = loader;
  }

  get value(): T {
    return this._value;
  }

  get loaded(): boolean {
    return this._loaded;
  }

  get loading(): boolean {
    return this._loading;
  }

  async wait(): Promise<T> {
    if (this._loaded) return this._value;
    this._loading = true;
    try {
      this._value = await this.loader();
      this._loaded = true;
      return this._value;
    } finally {
      this._loading = false;
    }
  }

  update(value: T): void {
    this._value = value;
    this._loaded = true;
  }

  preview(value: T): void {
    // Set the cached value WITHOUT marking as fully loaded.
    // Used by refresh() to populate partial data (first page).
    // A subsequent wait() will still run the full loader.
    this._value = value;
  }

  reset(): void {
    this._loaded = false;
    this._loading = false;
  }
}
