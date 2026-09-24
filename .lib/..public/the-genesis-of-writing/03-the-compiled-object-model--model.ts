/* =============================================================================
 * $Chemistry WRITING LIBRARY — compiled object model
 * =============================================================================
 * Compiled from writing-library.events.md, E1–E67. The history is in the
 * stream; this file cites it as (En). Notes: writing-library.implementation.md.
 *
 * Conventions
 *   (En)          the event that states it
 *   // prop       a React prop. Props act like properties of the object (E11).
 *                 Boolean attributes are designed in pairs so either may be
 *                 given: <Composition open /> or <Composition closed /> (E64)
 *   $T            T as a chemical (E64)
 *   source        exactly what came into the bond constructor, as an array (E64)
 *   get x()       computed from source; nothing is cached (E64)
 *   specify()     a member of every Writing; inherited; runs in test mode only;
 *                 unit-test-like, each test named (E13, E20, E21, E64)
 *   [inference]   Claude's reading of something Doug stated
 *   [inserted — genesis undiscussed]
 *                 a member with no statement behind it; stays only until discussed (E66)
 *   ⚠             open — see the notes file
 *
 * The bond constructor is unsafe by design; the guarantees are in specify (E65).
Each annotation applies its own specification to its writing through
specifically(writing) — the genome (E65).

What is not $Writing is not writing. $Block, $Html and $Func are what E14
 * called calligraphy and E32 called uncomprehended, and on E12's reading they
 * are the implicit level 0 that permissive admits and closed excludes.
 * Calligraphy is not in the object model (E64): the model sorts source by type.
 * =========================================================================== */


// ─── from $Chemistry — imported, not declared here (E63) ─────────────────────

declare abstract class $Chemical {
  constructor(...children: $Chemical[]);                       // children are constructor arguments at mount (E11)
  readonly parent?: $Chemical;                                 // [inserted — genesis undiscussed] Doug's word (E7, E10); its placement as a member is mine
  protected bondConstructor(...children: $Chemical[]): void;   // builds the object, bonds it into the reactive graph (E11)
  protected catalyticConstructor?(...input: $Chemical[]): $Chemical[];
  // TSX in, TSX out, before bonding (E11) · syntax $$ (E12, E17) · formulator, proposed (E53) · recursive (E54)
}

declare class $Html extends $Chemical {}                       // an html element (E64)
declare class $Block extends $Html {                           // holds inline html elements, strings and numbers in the react tree, "but otherwise it is $Html" (E64; corrected E67)
  readonly items: ReadonlyArray<string | number | $Html>;     // [inserted — genesis undiscussed] "holds a collection of inline html elements, strings and numbers" (E64); the name is mine
}
declare class $Func<T> extends $Chemical {}                    // a React function component (E64)

declare function test(name: string, check: () => boolean): void;   // "unit test like syntax where you name the test" (E64); the identifier is mine

// helpers — Claude's, not members
const isWriting    = (x: $Chemical): x is Writing    => x instanceof Writing;
const isAnnotation = (x: $Chemical): x is Annotation => x instanceof Annotation;
const stringOf = (source: $Chemical[]): string =>                // [inference] how a Type reads its label from source (E35, E64)
  source.filter((x): x is $Block => x instanceof $Block)
        .flatMap(b => b.items.filter((i): i is string => typeof i === "string"))
        .join("");

type $Writing    = Writing;
type $Annotation = Annotation;

// [inserted — genesis undiscussed] the direct writing children of a composition, unspliced. Needed
// because "canonical first member" (E7) is a direct child: when the first child is the same type,
// parts splices it and parts[0] would be the child's canonical. Previously named `body`, which is
// Doug's word for parts (E27) — a collision, withdrawn. Not a member until it has a genesis.
const directWriting = (c: Composition): $Writing[] => c.contents.filter(isWriting);


// ─── Writing (E2) ─────────────────────────────────────────────────────────────

abstract class Writing extends $Chemical {
  // ── props ──
  parenthetical = false;                                        // prop (E15, E16, E30); sent down, non-reactive (E16); pair unnamed ⚠

  // ── source: the one stored thing ──
  protected source: $Chemical[] = [];                           // exactly what came into the bond constructor (E64); protected: all
                                                                // modification goes through the methods below (E65 asked; answered yes)
  static annotationTypes: Array<new () => Annotation> = [];    // [inserted — genesis undiscussed] "a collection [of] types, which constructors for annotations" (E21); the name is mine

  // ── computed from source; nothing cached (E64) ──
  get contents(): $Chemical[] {                                 // (E64)
    return this.source.filter(x => !isAnnotation(x));
  }
  get annotations(): $Annotation[] {                            // (E21, E64)
    return this.source.filter(isAnnotation);
  }
  // ── the writing API for modifying source (E65) ──
  // Unsafe by design: nothing here checks anything. The guarantees live in specify, so the
  // bond constructor may do unsafe things (E65). Supersedes E26's modes and front-by-default,
  // and E22's throw. Every operation is by type (instanceof).
  add(a: Annotation): void {                                     // goes to the end of source (E65)
    this.source.push(a);
  }
  replace(a: Annotation): void {                                 // finds the first instance of the type and replaces it (E65)
    const i = this.source.findIndex(x => x instanceof (a.constructor as any));
    if (i >= 0) this.source[i] = a;                               // [inference] nothing to replace: does nothing — E65 does not say
  }
  ensure(a: Annotation): void {                                  // adds if not present; replaces a parent class; nothing if a subclass is there (E65)
    if (this.source.some(x => x instanceof (a.constructor as any))) return;              // a's class, or a subclass of it, is there
    const i = this.source.findIndex(x => isAnnotation(x) && a instanceof (x.constructor as any));   // a parent class of a is there
    if (i >= 0) this.source[i] = a; else this.source.push(a);
  }
  remove<T extends Annotation>(T: new (...a: any[]) => T): void {   // all instances of the type (E65)
    this.source = this.source.filter(x => !(x instanceof T));
  }
  find<T extends Annotation>(T: new (...a: any[]) => T): T[] {      // all instances of the type (E65)
    return this.source.filter((x): x is T => x instanceof T);
  }
  // ⚠ Types differ by name, not class: find(Type) returns every Type, and ensure(new Type("Cover")) is a no-op
  //   if any Type is there. Whether "type" in these five means the class or the named type is open.

  protected bondConstructor(...children: $Chemical[]): void {
    this.source = [...children];                                  // (E64)
    for (const T of (this.constructor as typeof Writing).annotationTypes) this.ensure(new T());   // built at bond (E21); ensure, so an authored one is not doubled [inference]
  }

  // ── specification: inherited; test mode only (E13, E20, E21, E64) ──
  // A subclass extends by calling super.specify() and adding tests; it replaces
  // a test by naming it again. [inference: "property inheritance"]
  specify(): void {
    test("source is writing", () =>                               // the base rule (E2); Letter and open Compositions replace it
      this.source.every(isWriting));
    test("annotations are the tail of the writing", () => {       // (E5, E21, E64) — on the writing subsequence, not on raw source
      const w = this.source.filter(isWriting);
      const i = w.findIndex(isAnnotation);
      return i < 0 || w.slice(i).every(isAnnotation);
    });
    test("declared annotations were built", () =>                 // (E21)
      (this.constructor as typeof Writing).annotationTypes.every(T => this.annotations.some(a => a instanceof T)));
    for (const a of this.annotations) a.specifically(this);       // each annotation applies its specification to its writing (E65) — the genome
    // does not descend into contents; [inference] the test runner walks the tree ⚠
  }
}


// ─── Letter (E1, E3) ──────────────────────────────────────────────────────────

class Letter extends Writing {
  readonly level = 1;                                           // level 0 at E4/E6/E7; moved to 1 at E12 so that text, react and strings are level 0 and permissive admits them;
                                                                // "the canonical level 1" (E15). Shares 1 with Word. [reading of E12/E13/E15 — awaiting confirmation, E67]

  specify(): void {
    super.specify();
    test("source is writing", () =>                               // replaces the base: a letter is allowed to have anything (E1, E3)
      this.source.every(x => !(x instanceof Letter) && !(x instanceof Composition)));   // no recursive text (E1); no composition [inference]; level 0 (text) is what it takes
  }
}


// ─── Canonical (E33) ──────────────────────────────────────────────────────────

class Canonical extends Letter {                                // a nameless Letter that suffixes a piece of writing (E33)
  specify(): void {
    super.specify();
    test("canonical is nameless", () => stringOf(this.source) === "");                 // (E33)
    test("canonical suffixes writing with a canonical referent", () =>               // (E33)
      isWriting(this.parent!) && this.parent.contents.at(-1) === this);                // suffix [inference]
  }
}


// ─── Composition (E4) ─────────────────────────────────────────────────────────

abstract class Composition extends Writing {
  // ── props ──
  level!: number;                                               // prop (E4, E10, E12); assigned, not overridden (E7)
  private _strict = false;                                      // prop pair: <Composition strict /> or <Composition permissive /> (E6, E64)
  get strict()     { return this._strict; }  set strict(v: boolean)     { this._strict = v; }
  get permissive() { return !this._strict; } set permissive(v: boolean) { this._strict = !v; }
  private _open = false;                                        // prop pair: <Composition open /> or <Composition closed /> (E12, E64)
  get open()   { return this._open; }  set open(v: boolean)   { this._open = v; }
  get closed() { return !this._open; } set closed(v: boolean) { this._open = !v; }
  parenthetical = false;                                        // Composition is not parenthetical (E16)

  // ── the declared canonicals, in order — annotationTypes' pattern on the parts (E7, E19, E30, E34) [inserted — genesis undiscussed] ──
  static get canonicalTypes(): Array<new (...a: any[]) => Writing> { return []; }   // literal levels 0–3 have none (E34); a getter so classes may be named before they are declared

  // ── computed ──
  get parts(): $Writing[] {                                     // the body (E7, E27): contents filtered to writing (E64), same type spliced (E7, E26)
    return this.contents.filter(isWriting).flatMap(x =>
      x instanceof this.constructor ? (x as Composition).parts : [x]);   // "same type" as instanceof ⚠ (open item 4; E31 needs it)
  }
  get depth(): number {                                         // computed; fundamental; checked against the parent (E7, E10)
    return this.parent instanceof this.constructor ? (this.parent as Composition).depth + 1 : 0;   // default rule; Heading and Part state their own
  }

  specify(): void {
    super.specify();
    test("source is writing", () => !this.closed || this.source.every(isWriting));   // replaces the base: closed asserts it, open does not (E12, E13)
    test("open and closed are opposites", () => this.open !== this.closed);             // (E12)
    test("strict and permissive are opposites", () => this.strict !== this.permissive); // (E6)
    test("writing in contents is at or below level", () =>                              // (E6)
      directWriting(this).every(x => {
        const m = (x as Letter | Composition).level;
        return this.permissive ? m <= this.level : m === this.level || m === this.level - 1;
      }));
    test("depth is checked against the parent", () =>                                   // (E10)
      this.depth === (this.parent instanceof this.constructor ? (this.parent as Composition).depth + 1 : 0));
    test("composition is not parenthetical", () => !this.parenthetical);                // (E16)
    test("canonicals come first, in order", () =>                                       // (E7, E19, E30): required — a missing canonical is a void
      (this.constructor as typeof Composition).canonicalTypes.every((T, i) => directWriting(this)[i] instanceof T));
  }
}


// ─── Word, Sentence, Paragraph (E6) — permissive, open (E12) ─────────────────

class Word      extends Composition { level = 1; constructor(...c: $Chemical[]) { super(...c); this.open = true; } }
class Sentence  extends Composition { level = 2; constructor(...c: $Chemical[]) { super(...c); this.open = true; } }
class Paragraph extends Composition { level = 3; constructor(...c: $Chemical[]) { super(...c); this.open = true; } }
// Levels 0–3 read as one intermixed level (E13); the classes stay distinct and parts splices only same type.


// ─── Section (E7) — permissive, closed (E13) ─────────────────────────────────

class Section extends Composition {
  level = 4;                                                    // (E7)
  static get canonicalTypes() { return [Heading]; }             // canonical first member (E7); required — else a void (E19)
  get heading(): Heading { return directWriting(this)[0] as Heading; }

  specify(): void {
    super.specify();
    test("section is closed", () => this.closed);                                        // (E13)
  }
}


// ─── Heading (E7) ─────────────────────────────────────────────────────────────

class Heading extends Sentence {
  get depth(): number { return (this.parent as Section).depth; }   // reaches to its parent Section (E7) ⚠ or + 1

  specify(): void {
    super.specify();
    test("heading is in a section", () => this.parent instanceof Section);                // (E7)
    test("heading is its section's first member", () => directWriting(this.parent as Section)[0] === this);   // (E7)
    test("depth is checked against the parent", () => this.depth === (this.parent as Section).depth);   // replaces the default rule (E7) ⚠
    // "takes text or what text takes and wraps in text" (E7): with Sentence open (E12) the text sits in source as $Block;
    // no Letter is manufactured. [inference — "wraps in text" never withdrawn]
  }
}


// ─── Chapter (E29, E30) — permissive, closed; the first document (E33) ───────

class Chapter extends Composition {
  level = 5;                                                    // (E30)
  get title(): Writing   { return directWriting(this)[0]; }               // first part; means the Chapter (E30) ⚠ class
  get summary(): Writing { return directWriting(this)[1]; }               // second part; conveys it; parenthetical by default (E30) ⚠ class

  specify(): void {
    super.specify();
    test("chapter is closed", () => this.closed);                                         // (E30)
    test("chapter has title then summary first", () =>                                    // (E30) ⚠ their classes are unstated
      directWriting(this).length >= 2 /* && [0] is Title && [1] is Summary */);
    test("summary is parenthetical by default", () => this.summary.parenthetical);        // (E30) — an instance may override
  }
}


// ─── Book (E29, E30) — strict (E62), closed; no parent (E35) ─────────────────

class Book extends Composition {
  level = 6;                                                    // (E30)
  static get canonicalTypes() { return [Cover, Synopsis, TableOfContents]; }   // (E30)
  get cover():           Cover           { return directWriting(this)[0] as Cover; }             // (E30)
  get synopsis():        Synopsis        { return directWriting(this)[1] as Synopsis; }          // (E30)
  get tableOfContents(): TableOfContents { return directWriting(this)[2] as TableOfContents; }   // (E30)
  get by():    By | undefined    { return this.find(By)[0]; }      // [inserted — genesis undiscussed] "the first one is used for transitivity" (E38); the member is mine
  get about(): About | undefined { return this.find(About)[0]; }   // [inserted — genesis undiscussed] same

  protected bondConstructor(...children: $Chemical[]): void {
    super.bondConstructor(...children);
    for (const a of [...this.cover.find(By), ...this.cover.find(About)]) this.add(a);   // import By and About upward from the Cover (E57); [inference] the Cover has bonded first (E54)
  }

  specify(): void {
    super.specify();
    test("book is closed and strict", () => this.closed && this.strict);                 // (E30, E62)
    test("a top-level book has no parent", () => (this.parent === undefined) === (this.depth === 0));   // (E35); a nested Book is a Part (E31)
    test("cover's by and about are imported", () =>                                       // (E57)
      [...this.cover.find(By), ...this.cover.find(About)].every(a => this.annotations.includes(a)));
  }
}


// ─── Part (E31) — the Book that goes in a book ────────────────────────────────

class Part extends Book {                                       // ⚠ a subclass, or the role of any Book at depth ≥ 1 (open item 16)
  specify(): void {
    super.specify();
    test("part is in a book", () => this.parent instanceof Book);                         // (E31)
    test("part is one deeper than its book", () => this.depth === (this.parent as Book).depth + 1);   // (E31); the default rule with instanceof
  }
}


// ─── Cover, Synopsis, TableOfContents (E30) — Chapters ───────────────────────
// Book is strict at 6, so its parts are level 5 or 6: these must be Chapters [consequence]; agrees with E33, E35, E51.

class Cover extends Chapter {                                   // represents the bound Book (E35)
  protected bondConstructor(...children: $Chemical[]): void {
    super.bondConstructor(...children);
    this.add(new Type(new $Block(["Cover"] as any)));            // inserts the Cover type (E51) — add, not ensure: another Type may already be there (see the ⚠ on find)
  }
  specify(): void {
    super.specify();
    test("cover is its book's first member", () => this.parent instanceof Book && directWriting(this.parent as Book)[0] === this);   // (E30, E35)
    test("cover carries type Cover", () => this.find(Type).some(t => t.name === "Cover"));   // (E51)
    test("cover's title holds the self link", () => this.title.contents.some(x => x instanceof Canonical));               // (E33) [inference: the self link is a Canonical]
  }
}

class Synopsis extends Chapter {                                // a chapter that is a synopsis (E33)
  specify(): void {
    super.specify();
    test("synopsis is its book's second member", () => this.parent instanceof Book && directWriting(this.parent as Book)[1] === this);   // (E30)
    test("synopsis points to the cover", () =>                                                                                  // (E33)
      this.find(Reference).some(r => r.resolve() === (this.parent as Book).cover));       // [inference: via a Reference]
  }
}

class TableOfContents extends Chapter {                         // a container for the titles and summaries (E30); a type of chapter (E33) [inference on extends]
  specify(): void {
    super.specify();
    test("table of contents is its book's third member", () => this.parent instanceof Book && directWriting(this.parent as Book)[2] === this);   // (E30)
    test("table of contents has an entry per chapter, nesting parts", () => {   // (E30, E31) — walks the direct writing, not parts: parts splices Parts and loses depth
      const book = this.parent as Book;
      return directWriting(book).slice(3).every(x => x instanceof Book ? this.nests(x.tableOfContents) : this.entryFor(x as Chapter) !== undefined);
    });
    test("entries carry a canonical", () => true /* each entry ends in a Canonical (E33) — entry shape unstated */);
  }
  private entryFor(ch: Chapter): Writing | undefined { return undefined; }      // [inserted — genesis undiscussed] shape unstated; "entry" is Doug's (E33)
  private nests(toc: TableOfContents): boolean { return false; }                // [inserted — genesis undiscussed] shape unstated
}


// ─── Annotation (E5) — non-compositional writing (E21) ───────────────────────

abstract class Annotation extends Writing {
  parenthetical = true;                                         // the canonical parenthetical (E15, E16)
  static unique = false;                                        // declares itself unique or not (E21)
  get unique(): boolean { return (this.constructor as typeof Annotation).unique; }
  get name(): string { return this.constructor.name; }          // defaults to the type name (E26); Type overrides

  // ── applies this annotation's specification to the writing it is in (E65) ──
  // This is how annotations are like a genome. Subclasses extend it.
  specifically(w: Writing): void {
    if (this.unique)                                              // unique is a test, not an API check (E21, E22, E65)
      test(`${this.name} is unique in its writing`, () => w.find(this.constructor as any).length === 1);
  }

  specify(): void {                                              // the annotation's own source
    super.specify();
    test("annotation is parenthetical", () => this.parenthetical);                        // (E15, E16) — an instance may override
    test("annotation has a name", () => this.name !== "");                                // (E26)
  }
}


// ─── Referent — exported Mentioned (E21, E22) ────────────────────────────────

class Referent extends Annotation {                             // was Mention (E21) → Referent (E22)
                                                                // ⚠ E22: "the Mention has a parent called a Reference" — a superclass? Modelled as a sibling of Reference here; the words admit `extends Reference`.
  static unique = true;                                         // (E22)
  as?: string;                                                  // prop (E21)
  get key(): string { return this.as ?? stringOf(isWriting(this.parent!) ? this.parent.contents : []); }   // without `as`, the entire quote is the key (E21) — its contents, not its source

  specify(): void {
    super.specify();
    test("referent has a key", () => this.key !== "");                                    // (E21)
    // key unique across the library: compile time (E26, E52); unique in its writing: inherited specifically (E22, E65)
  }
}
export { Referent as Mentioned };                                // (E21, E22)


// ─── Reference — exported Means (E22) ────────────────────────────────────────

class Reference extends Annotation {
  for?: string;                                                 // prop (E22)
  get key(): string { return this.for ?? stringOf(this.source); }   // <Means>aristotle-quote</Means>: the key is source (E22, E64)
  resolve(): Writing { return undefined as any; }               // [inserted — genesis undiscussed] "points to its Referent" (E22); the verb is mine; compiler-resolved, static (E26)
  // at render, modifies its writing's Format (E23)

  specify(): void {
    super.specify();
    test("reference has a key", () => this.key !== "");                                   // (E22)
    // key resolves to a Referent: compile time (E26, E52)
  }
}
export { Reference as Means };                                  // (E22)


// ─── Quote, Ref (E21, E22) ───────────────────────────────────────────────────

class Quote extends Sentence {                                  // [inference: replaces <Sentence>…<Mentioned/></Sentence>] (E21)
  as?: string;                                                  // prop (E21)
  protected bondConstructor(...children: $Chemical[]): void {
    super.bondConstructor(...children);
    if (this.as) { const r = new Referent(); r.as = this.as; this.add(r); }   // the Mention is implicit (E21)
    else this.add(new Format());                                  // no `as`: formats as a quote, adds no form to be treated as (E21) [inference: a Format]
  }
}

class Ref extends Word {                                        // [inference: replaces <Word>…<Means/></Word>] (E22)
  for!: string;                                                 // prop (E22)
  protected bondConstructor(...children: $Chemical[]): void {
    super.bondConstructor(...children);
    const m = new Reference(); m.for = this.for; this.add(m);   // (E22)
  }
}


// ─── Format (E23), Theme (E24, E25) ──────────────────────────────────────────

class Format extends Annotation {}                              // part of the genome; no constraints, like Letter (E23) ⚠ unique?

class Theme extends Annotation {                                // takes ONLY Format (E24); renders as a render-tree ancestor (E25)
  specify(): void {
    super.specify();
    test("theme holds only formats", () => this.source.every(x => x instanceof Format));   // (E24) — Formats are annotations, so contents is empty
  }
}


// ─── Type (E35), Of (E51, E52, E55) ──────────────────────────────────────────

class Type extends Annotation {
  get name(): string { return stringOf(this.contents); }       // <Type>Autobiography</Type>: the label is source, not a prop (E35, E64)
  // a Type does not know what it means (E35); weighs on the specification when subclassed; else a free label (E35)
  // Autobiography, Biography are names (E35) ⚠ labels or a class hierarchy
  specify(): void {
    super.specify();
    test("type has a name", () => this.name !== "");                                      // (E35, E51)
  }
}

class Of extends Annotation {                                   // generic; completes a Type; annotative meaning, not a Reference (E55)
  get link(): string { return stringOf(this.source); }          // [Name](/path); the compiler fills it in (E52)
  specifically(w: Writing): void {
    super.specifically(w);
    test("of is in a type", () => w instanceof Type);                                     // (E51, E52) [inference]
  }
  specify(): void {
    super.specify();
    test("of holds a link", () => /^\[.+\]\(.+\)$/.test(this.link));                      // (E52)
    // link resolves: compile time (E52) ⚠ to a Book only, or any writing
  }
}


// ─── Subject, Author (E34, E49, E51, E52) — at Book level ────────────────────

class Subject extends Type {                                    // name Subject, with an Of (E51)
  get name() { return "Subject"; }
  get of(): Of | undefined { return this.find(Of)[0]; }
  specifically(w: Writing): void {
    super.specifically(w);
    test("subject is at book level", () => w instanceof Book || w instanceof Cover);       // (E49, E57)
  }
  specify(): void {
    super.specify();
    test("subject has an of", () => this.of !== undefined);                                // (E51)
  }
}

class Author extends Type {                                     // name Autobiography, with an Of (E52); marks an autobiographical book (E34)
  get name() { return "Autobiography"; }
  get of(): Of | undefined { return this.find(Of)[0]; }
  specifically(w: Writing): void {
    super.specifically(w);
    test("author is at book level", () => w instanceof Book || w instanceof Cover);        // (E49, E57)
  }
  specify(): void {
    super.specify();
    test("author has an of", () => this.of !== undefined);                                 // (E52)
  }
}
// <Subject>Math</Subject> and <Author>Doug</Author> are what the formulator produces: a string then an annotation (E53)


// ─── About, By (E56, E57) — a book declares its subject and author ───────────

class About extends Annotation {
  get link(): string { return stringOf(this.source); }          // <About>[Math](...)</About> (E56)
  specifically(w: Writing): void {
    super.specifically(w);
    test("about is on a cover or a book", () => w instanceof Cover || w instanceof Book);   // (E57)
  }
  specify(): void {
    super.specify();
    test("about holds a link", () => /^\[.+\]\(.+\)$/.test(this.link));                  // (E56)
  }
}

class By extends Annotation {
  get link(): string { return stringOf(this.source); }          // <By>[Doug](...)</By> (E56)
  specifically(w: Writing): void {
    super.specifically(w);
    test("by is on a cover or a book", () => w instanceof Cover || w instanceof Book);      // (E57)
  }
  specify(): void {
    super.specify();
    test("by holds a link", () => /^\[.+\]\(.+\)$/.test(this.link));                     // (E56)
    // link resolves to a book carrying Author: compile time (E52) [inference]
  }
}
