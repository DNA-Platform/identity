///: TreeSnapshot — the UIA tree as a value you can hold, query, print, and send.
///: One read of the accessibility tree, captured at a moment, in document order.
///: It is the medium of every action: read BEFORE it (the precondition — does the
///: element the actuator is about to touch actually exist?), read AFTER it (the
///: verification), and hand it over ALWAYS (the evidence on any error, and the
///: answer to "what is on screen right now?").
///:
///: It is the design's genuine cache: one tree walk answers many existence checks
///: instead of one shell round-trip per check. A snapshot is immutable and has the
///: lifetime of one action — never hold one across an action and expect it to be
///: true.
///:
///: `toString()` prints it for a person; `toJSON()` serializes it for a wire. Both
///: matter: the tree is a development instrument, and the fastest way to adjust the
///: code is to look at the screen and see why the current implementation fails.
///:
///: [The Precondition and the Visible Tree](../library/reference-desk/02-01-the-architecture--layers.md) — the layer it serves.
///: [Windows UIA](../library/reference-desk/04-01-platform--uia.md) — where the lines come from.

/** One element of the accessibility tree: what kind of thing it is, and its name. */
export interface TreeElement {
  /** The bare control type — `Button`, `Edit`, `Document`. */
  readonly type: string;
  /** The element's accessible name, as the app reports it. */
  readonly name: string;
  /** Position in document order — the order `allNames()` returned it. */
  readonly index: number;
}

/** A query over the tree. Every field is optional; all supplied fields must match. */
export interface TreeQuery {
  /** Exact control type, with or without the `ControlType.` prefix. */
  type?: string;
  /** Exact accessible name. */
  name?: string;
  /** Substring of the accessible name, case-insensitive. */
  contains?: string;
}

/** `ControlType.Button | Send` → `{ type: 'Button', name: 'Send' }`. A line with no
 *  separator is an unnamed element and is skipped — it is not addressable. */
function parseLine(line: string, index: number): TreeElement | null {
  const sep = line.indexOf('|');
  if (sep < 0) return null;
  const type = stripPrefix(line.slice(0, sep).trim());
  const name = line.slice(sep + 1).trim();
  if (!type || !name) return null;
  return { type, name, index };
}

/** UIA reports `ControlType.Button`; callers say `Button`. Accept either, store bare. */
function stripPrefix(type: string): string {
  return type.startsWith('ControlType.') ? type.slice('ControlType.'.length) : type;
}

export class TreeSnapshot {
  private constructor(
    readonly elements: readonly TreeElement[],
    /** When the tree was read, epoch millis. A snapshot is a moment, not a subscription. */
    readonly capturedAt: number,
  ) {}

  /** Build from the raw `ControlType.X | Name` lines that `Uia.allNames()` returns. */
  static from(lines: readonly string[], capturedAt: number = Date.now()): TreeSnapshot {
    const elements: TreeElement[] = [];
    for (const line of lines) {
      const el = parseLine(line, elements.length);
      if (el) elements.push(el);
    }
    return new TreeSnapshot(elements, capturedAt);
  }

  /** An empty tree — the app was unreadable. Distinguishable from a tree with no
   *  matches: `isEmpty` is true only here, and it means "we could not see", not
   *  "it is not there". Never let the two collapse; that is how a precondition
   *  turns into a lie. */
  static empty(capturedAt: number = Date.now()): TreeSnapshot {
    return new TreeSnapshot([], capturedAt);
  }

  get size(): number { return this.elements.length; }

  get isEmpty(): boolean { return this.elements.length === 0; }

  /** Every element matching the query, in document order. */
  filter(query: TreeQuery): TreeElement[] {
    const type = query.type ? stripPrefix(query.type) : undefined;
    const contains = query.contains?.toLowerCase();
    return this.elements.filter(el =>
      (type === undefined || el.type === type) &&
      (query.name === undefined || el.name === query.name) &&
      (contains === undefined || el.name.toLowerCase().includes(contains)));
  }

  /** The first element matching the query, or undefined — an honest "not on screen".
   *  A returned element is proof the thing was there when the tree was read. */
  find(query: TreeQuery): TreeElement | undefined {
    return this.filter(query)[0];
  }

  /** Is anything matching this query on screen? The precondition's question. */
  has(query: TreeQuery): boolean {
    return this.find(query) !== undefined;
  }

  /** Every distinct control type present, with how many of each. Orientation when
   *  you do not yet know what you are looking at. */
  types(): { type: string; count: number }[] {
    const counts = new Map<string, number>();
    for (const el of this.elements) counts.set(el.type, (counts.get(el.type) ?? 0) + 1);
    return [...counts.entries()]
      .map(([type, count]) => ({ type, count }))
      .sort((a, b) => b.count - a.count || a.type.localeCompare(b.type));
  }

  /** A narrowed snapshot — same capture, fewer elements. Indices are preserved from
   *  the original so a filtered view still tells you where you are in the document. */
  where(query: TreeQuery): TreeSnapshot {
    return new TreeSnapshot(this.filter(query), this.capturedAt);
  }

  /** Serializable form — this is what travels as a response payload or rides on an
   *  error. No methods, no cycles, no file paths. */
  toJSON(): { capturedAt: number; size: number; elements: TreeElement[] } {
    return {
      capturedAt: this.capturedAt,
      size: this.elements.length,
      elements: [...this.elements],
    };
  }

  /** Printed for a person to read: a type summary, then every element aligned by
   *  type. Long names are kept whole — truncating the tree is how you lose the one
   *  detail you were looking for. */
  toString(): string {
    if (this.isEmpty) {
      return 'UIA tree: EMPTY — the app was not readable (not running, minimized, or no accessibility tree).';
    }
    const width = Math.min(24, this.elements.reduce((w, el) => Math.max(w, el.type.length), 0));
    const summary = this.types().map(t => `${t.type} ${t.count}`).join(', ');
    const lines = this.elements.map(el => `  ${el.type.padEnd(width)}  ${el.name}`);
    return [
      `UIA tree: ${this.size} named elements — ${summary}`,
      ...lines,
    ].join('\n');
  }
}
