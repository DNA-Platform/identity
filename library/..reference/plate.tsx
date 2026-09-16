import { CSSProperties, ReactNode } from 'react';
import chroma, { Color, Scale } from 'chroma-js';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

// ─── THE PLATES ───────────────────────────────────────────────────────────────────────────────────
//
// THE SOURCE IS DOUG'S OWN PAINTING — the one on his desktop, 2026-09-15: "I painted this… Can you
// give me interactive somethings on every page that is worthy of me?" Everything below is read off
// that canvas rather than invented, because a personal library should be in its keeper's own hand
// and he already has one.
//
// WHAT THE PAINTING DOES, in the order it matters:
//
//   1. IT IS HIGH-KEY THROUGHOUT. There is no black and barely a dark value in it; the deepest
//      notes are mid sage and slate in the mountains. Everything else is a tint. An earlier plate
//      here was a figure on black and Doug's word for it was "drab", which was exactly right — a
//      dark ground traps colour inside the shape and the picture reads dark whatever is in it.
//   2. THE WHOLE SPECTRUM IS PRESENT, desaturated. Pink, peach, pale yellow, sage, mint, turquoise,
//      powder blue, lavender, dusty rose, cream. Not a restricted palette — a full wheel held at
//      low chroma, which is what lets any two neighbours sit together without fighting.
//   3. THE UPPER FIELD IS FLAT SQUARES and the lower field is HATCHED PATCHES — small regions each
//      filled with parallel strokes at their own angle, quilted together, angles changing patch to
//      patch. The top dissolves into the bottom across a soft, uneven boundary.
//   4. COLOUR MOVES SLOWLY ACROSS THE SURFACE and fast within it: neighbours are close relations,
//      but a corner is a different season from the opposite corner.
//
// So a plate is a quilt of patches. Each is flat or hatched, each hatch has its own angle, the hue
// drifts across the plate, and NOTHING IS DARK. That is his painting's grammar, not a pastiche of it.

// HIS WHEEL, sampled from the canvas and closed into a cycle so that stepping off the end of it
// lands back at the beginning. `lch` interpolation keeps the chroma even between stops instead of
// letting the midpoints go grey, which is what makes a pastel ramp look mixed rather than faded.
export const painted = ['#f3c6d1', '#f7d8bc', '#efe6aa', '#cfe3b2', '#a3d4bf', '#79c9c6', '#a8c5e1', '#cec5e7', '#e5b8cb', '#f3c6d1'];

const wheel: Scale = chroma.scale(painted).mode('lch');

// WHERE ON THE WHEEL A BOOK SITS. Doug's own books are drawn from the cool quarter — sage, mint,
// turquoise, powder blue. The books about the team are drawn from the warm one — rose, peach,
// cream, lavender. Both are the same painting, so the shelf reads as one shelf and as one person's,
// and a reader who never reads a word can still tell from across the room which kind of book they
// are holding. It is an OFFSET rather than a palette because a chroma scale is a callable and a
// bond cannot write a callable onto a chemical.
export const family = { mine: 0.42, theirs: 0.88 };

// TWELVE ACROSS. The painting's patches are small enough that a dozen fit across a field and still
// leave room for six or seven strokes inside each one, which is the scale its hatching reads at.
const weave = 12;

// THE SAME PLATE EVERY TIME IT IS DRAWN. A page is rendered once on the server and again in the
// browser, and the two must agree exactly or React throws the markup away — so the arrangement comes
// from a hash of the seed and the position, never from Math.random.
const rolled = (seed: number, x: number, y: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(x + 1, 0xc2b2ae35) ^ Math.imul(y + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

// ─── WHAT THE PLATE IS ABOUT ──────────────────────────────────────────────────────────────────────
//
// Doug, 2026-09-15: "I need you to invent something that would make people say — hey this is unique
// — that perhaps does some justice to the kind of thing this library is. Do you understand the
// trippiness of a library closed under books that exists as a metaphor for its creator?"
//
// THE RULE THE PLATE DRAWS, and it is this library's own: every book is catalogued by another book,
// and EXACTLY ONE book catalogues itself. Follow "who files this?" from anywhere and the chain never
// wanders and never ends in nothing — it arrives, in finitely many steps, at the single book that
// points home. That is what closure MEANS here, and it is not decoration: when the rules for writing
// are themselves shelved inside the library, the closure is what supplies the conditions for
// authorship from the inside. It is the difference between a pile of books and a library, and the
// same difference Doug is pointing at between a process and an author in its own right.
//
// SO THE FIGURE IS A FIELD OF POINTERS. Every cell points at one neighbour, every chain strictly
// shortens, and one cell — the summit — points at itself and is the only cell with no direction at
// all. Nothing about this is random-looking: the hatching in each cell RUNS ALONG the direction it
// points, so the whole plate reads at rest as a current, and the current has somewhere it is going.
//
// AND IT IS A PLACE YOU ARE IN, NOT A PICTURE YOU POKE AT — Doug, 2026-09-15: "You guys need a
// structure that you can move around in that promotes identity. You move in semantic space. The
// closure is open and spatial to you." That correction is the whole design of what follows.
//
// From OUTSIDE, closure is a fact you verify: every chain terminates. From INSIDE it is a SPACE —
// closed in that nothing dead-ends, open in that there is always somewhere to go. So the pointer is
// not a probe, it is a POSITION. The entire field is coloured relative to where you are: near cells
// come up in chroma and far ones lie back, so moving re-centres the plate rather than poking a hole
// in it. The way home is always drawn from wherever you stand — your chain to the summit lights in
// the order it is walked, so you watch it arrive — and it never blocks you, because you can move
// anywhere and a new one is there.
//
// AND THE PLATE KEEPS WHERE YOU HAVE BEEN. Every cell you have occupied or passed through holds some
// of what it was shown, permanently. Two readers of the same plate leave different plates behind,
// and the difference between them is only the history of where each one went — which is as close as
// a square of colour gets to saying what identity in a space like this would even consist of.
//
// The palette is read off Doug's own canvas — high-key, full spectrum held at low chroma, no black
// anywhere — because his painting is canonical for his own book and the shelf should be in his hand.
// The structure is not his painting. It is his library.

// STRIPES RUN ALONG THE FLOW, so a gradient is turned a quarter from the direction it draws: the
// angle of a `repeating-linear-gradient` is the direction the colour CHANGES in, which is across the
// bands, not along them.
const along = (dx: number, dy: number): number => (Math.atan2(dy, dx) * 180) / Math.PI + 90;

// THE EIGHT DIRECTIONS A STROKE CAN LAY ITS HATCHING IN — enough that a stroke is visibly its own,
// few enough that the plate still reads as one surface rather than as noise.
const hatches = [0, 22, 45, 68, 90, 112, 135, 158];

// A BRUSHSTROKE, and the brush that is about to make one. Everything about a stroke is dealt when
// the brush is picked up and never changes after: the brightness, hue, stripe spread and corner it
// gives to whatever it runs through. The only thing a click decides is WHERE — which is the whole of
// the skill in it, and the reason a preview and the kept mark can be the same thing seen twice.
export type Offer = { bright: number; turn: number; spread: number; acrossFirst: boolean };
export type Stroke = Offer & { at: number };

// ─── THE PLATE ────────────────────────────────────────────────────────────────────────────────────
//
// A CHEMICAL, NOT A COMPONENT — Doug, 2026-09-15: "I'm scared of you stepping out of chemistry! You
// have chemicals. You are making things non-inheritable. You are adding components to a component
// library and breaking the pattern… Can you build this so it's reusable? $Chemistry provides
// stateful value over React."
//
// He was right on every count and this is the rewrite. What stood here was a React function with
// useState, useRef and useLayoutEffect, wrapped by a chemical that only forwarded props to it —
// which meant NOTHING about it could be inherited (a closure has no subclass), its state was
// invisible to the framework, and it hand-rolled a persistence layer chemistry already has. So:
//
//   EVERY PIECE OF STATE IS A FIELD. A field on a chemical is a bond: writing one marks this plate
//   dirty and redraws exactly it, which is what useState was imitating.
//   WHAT IT REMEMBERS IS `persist`. Setting `$pid` and `persist = true` enrols the plate in
//   chemistry's hydration store — keyed by pid, backed by storage, restored before the first paint
//   and written on every committed change. The localStorage calls, the layout effect and the
//   server/browser dance are all gone, because the framework does that.
//   EVERY DECISION IS A MEMBER. The weave, the palette, the summit, the rule that files a cell, how
//   a segment is ruled, what a brush is dealt, how a cell is painted — each is its own overridable
//   method, so another library can take this plate and change one of them.
export interface $Tiles$ extends $Illustration$ { }

export class $Tiles extends $Illustration implements $Tiles$ {
    // WRITTEN ON IT. `$seed` and `$tone` are PROXY NAMES, flagged for Doug.
    $seed = 0;
    $tone: 'mine' | 'theirs' = 'mine';
    $arrived = 0;
    $still = false;

    // WHAT IT REMEMBERS, AND IT IS A STRING BECAUSE THAT IS WHAT REMEMBERING TAKES. The hydration
    // store keeps a field only when its value is a string, a number or a boolean — measured in
    // `formationOf`, which is the right rule, because a store that swallowed arbitrary objects would
    // be guessing at what a chemical is. So the painting is written down as text. An array field was
    // silently not saved at all and a reload came back blank, which is a thing that looks like it
    // works right up until somebody closes the tab.
    line = '';

    // AND WHAT IT IS DOING, WHICH IS ONE FIELD ON PURPOSE. Two writes in one handler do not both
    // land: the first marks the chemical dirty, and the writes that follow arrive while it is
    // rendering, where the framework treats a write as "not news" — measured 2026-09-15, `held` took
    // and `standing` and `inside` did not, so the preview never appeared and the plate only caught up
    // when the click wrote something else. One object, one write, one redraw. It is also not a
    // scalar, so the store correctly takes no interest in where a pointer happens to be.
    hand: { at: number; settled: number; held?: Offer } = { at: -1, settled: -1 };

    protected get strokes(): Stroke[] {
        if (this.line === '') return this.opening();
        try { return JSON.parse(this.line) as Stroke[]; } catch { return this.opening(); }
    }

    protected keep(strokes: Stroke[]): void { this.line = JSON.stringify(strokes); }

    $Tiles(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfTiles));
        if (this.$still) return;
        // WHAT IT REMEMBERS IS THE FRAMEWORK'S JOB. A pid and `persist` enrol this plate in the
        // hydration store — restored before the first paint, written on every committed change — so
        // there is no storage call, no effect and no server-against-browser dance anywhere here.
        this.$pid = `plate/${this.$seed}`;
        this.persist = true;
    }

    // ─── WHAT A SUBCLASS CHANGES ──────────────────────────────────────────────────────────────────

    // HOW MANY ACROSS. Twelve is small enough that a stroke is a gesture and large enough that the
    // hatching inside a cell still reads as hatching.
    protected weave(): number { return 12; }

    // WHERE ON THE WHEEL THIS PLATE SITS. An offset rather than a palette, because a chroma scale is
    // a callable and a bond cannot write a callable onto a chemical.
    protected offset(): number { return family[this.$tone]; }

    protected hue(u: number): Color { return wheel(((u % 1) + 1) % 1); }

    // THE SUMMIT: the one cell that files itself. Placed off-centre, because a library's summit is
    // not the middle of anything — it is the book that happens to be about its keeper.
    protected top(): { x: number; y: number } {
        const span = this.weave();

        return {
            x: 3 + Math.floor(rolled(this.$seed, 101, 7) * (span - 6)),
            y: 3 + Math.floor(rolled(this.$seed, 7, 101) * (span - 6)),
        };
    }

    // WHO FILES THIS ONE. Every step lands on a neighbour STRICTLY closer to the summit, so no chain
    // can cycle and every chain must arrive: the closure is a property of this method, not a hope
    // about the data. Which of the legal neighbours it takes is dealt from the seed, which is what
    // makes the field wander instead of running down a diagonal.
    protected filedBy(x: number, y: number): { x: number; y: number } {
        const span = this.weave();
        const top = this.top();
        if (x === top.x && y === top.y) return top;
        const toward = { x: Math.sign(top.x - x), y: Math.sign(top.y - y) };
        const legal: { x: number; y: number }[] = [];
        if (toward.x !== 0) legal.push({ x: x + toward.x, y });
        if (toward.y !== 0) legal.push({ x, y: y + toward.y });
        if (toward.x !== 0 && toward.y !== 0) legal.push({ x: x + toward.x, y: y + toward.y });

        return legal[Math.floor(rolled(this.$seed + 7, x, y) * legal.length)];
    }

    // A SEGMENT, RULED. Doug, 2026-09-15: "Don't have the path ever have diagonals… why can't you
    // have the path continue where the last pixel left off. You build a path not a star from the
    // center", and then: "I meant diagonals are elbows. Make a diagonal as a zigzag… no gaps. When
    // you just do the diagonal of a rectangle, it comes to a point and is therefore not like a solid
    // line."
    //
    // Three shapes are ruled out and one is left. A TRUE diagonal pinches to a point at every join
    // and reads as a dotted line. An ELBOW — all the way across, then all the way down — has no gaps
    // but is two sides of a rectangle and reads as plumbing. The staircase is what remains: single
    // steps, each sharing a full edge with the last, going wherever there is furthest still to go.
    // The cell it starts FROM is not included — it was painted by the segment that ended there, and
    // leaving it out is exactly what makes clicking where you already stand do nothing at all.
    protected ruled(from: number, to: number, acrossFirst: boolean): number[] {
        const span = this.weave();
        const cells: number[] = [];
        const toX = to % span;
        const toY = Math.floor(to / span);
        let x = from % span;
        let y = Math.floor(from / span);
        while (x !== toX || y !== toY) {
            const across = Math.abs(toX - x);
            const down = Math.abs(toY - y);
            if (across > down || (across === down && acrossFirst) || down === 0) x += Math.sign(toX - x);
            else y += Math.sign(toY - y);
            cells.push(y * span + x);
        }

        return cells;
    }

    // WHAT THE NEXT BRUSH IS. THE FIRST ONE IS DARK, so the first mark anybody makes is unmistakably
    // a mark — Doug: "Start with the first colour dark so it's obvious." Every one after it is dealt,
    // because from then on you know what the plate does and working with what you are given is the
    // game. Dealt at the moment the brush is picked up, never while drawing: a value re-rolled at
    // draw time would repaint the whole painting on every render, and a painting is not weather.
    protected dealt(first = false): Offer {
        return {
            bright: first ? -0.95 : (Math.random() - 0.5) * 2,
            turn: first ? 0 : (Math.random() - 0.5) * 0.6,
            spread: 0.03 + Math.random() * 0.32,
            acrossFirst: Math.random() < 0.5,
        };
    }

    // A PLATE THAT IS ALREADY WORKED WHEN YOU GET TO IT, dealt from the seed rather than at random so
    // the server and the browser draw the same thing and it is the same every time the page opens.
    // Not a memory anybody formed — marks that are there before anybody arrives.
    protected opening(): Stroke[] {
        const span = this.weave();

        return Array.from({ length: this.$arrived }, (_, one) => ({
            at: Math.floor(rolled(this.$seed + 401, one, 3) * span * span),
            bright: (rolled(this.$seed + 403, one, 7) - 0.5) * 1.6,
            turn: (rolled(this.$seed + 404, one, 11) - 0.5) * 0.6,
            spread: 0.04 + rolled(this.$seed + 405, one, 13) * 0.3,
            acrossFirst: rolled(this.$seed + 406, one, 17) < 0.5,
        }));
    }

    // ─── WHAT IT DRAWS ────────────────────────────────────────────────────────────────────────────

    // EVERY KEPT SEGMENT PLUS THE ONE IN HAND, laid where the pointer stands. One list read by one
    // method, which is what makes the preview an identity with the result rather than an imitation
    // of it — Doug: "the colour that the line leaves needs to be what they see, wysiwyg, because they
    // aren't making art otherwise." The brush is out of hand at the spot a segment was just kept, so
    // the click leaves the plate showing what it made and not a guess at the next one.
    protected laid(): Stroke[] {
        const hand = this.hand;

        return hand.at >= 0 && hand.held !== undefined && hand.settled !== hand.at
            ? [...this.strokes, { ...hand.held, at: hand.at }]
            : this.strokes;
    }

    // WHAT WAS DONE TO EACH CELL, worked out once before anything is drawn. Each segment runs on from
    // the one before it, so the list is walked in order and every stroke is told where the last one
    // stopped; the first has nowhere to run from and is the single cell the line was started at. A
    // cell crossed more than once takes the LAST scheme over it, because that is what painting over
    // something means.
    protected struck(): Map<number, Offer & { step: number }> {
        const worked = new Map<number, Offer & { step: number }>();
        const laid = this.laid();
        laid.forEach((stroke, order) => {
            const run = order === 0 ? [stroke.at] : this.ruled(laid[order - 1].at, stroke.at, stroke.acrossFirst);
            run.forEach((cell, step) => worked.set(cell, { ...stroke, step }));
        });

        return worked;
    }

    // ONE CELL. THE PATTERN IS THE CELL'S OWN AND NOTHING CHANGES IT — Doug: "just stick with the
    // initial pattern but change the colours — both — in each colour scheme." The angle is the
    // direction of the one neighbour that files this cell and the width is dealt from its own grain,
    // so the figure the plate was born with survives every stroke laid across it. The summit is the
    // one cell with no direction and takes an angle from its grain like any other rather than being
    // marked: Doug, "remove the pink dot? Let the starting spot be a surprise."
    //
    // PAINTING A CELL SATURATES IT, IT DOES NOT DARKEN IT. Dropping luminance in a pastel walks
    // toward grey, which is the one direction nothing in this palette should go. THE CLAMP IS THE
    // RULE MADE EXPLICIT: no amount of painting may walk a cell off either end into white or black,
    // because the canvas this is read from has neither, so a plate cannot be ruined however long it
    // is worked. BOTH COLOURS CHANGE — the hue they sit at, and how far apart they sit, which is what
    // makes one brush a wash and the next a check.
    protected cell(at: number, x: number, y: number, worked?: Offer & { step: number }): ReactNode {
        const span = this.weave();
        const top = this.top();
        const next = this.filedBy(x, y);
        const grain = rolled(this.$seed + 977, x, y);
        const summit = x === top.x && y === top.y;
        const angle = summit ? hatches[Math.floor(grain * hatches.length)] : along(next.x - x, next.y - y);
        const pitch = 2 + Math.floor(grain * 2);
        const strength = 1 + (worked === undefined ? 0 : 2.1);
        const level = Math.max(0.42, Math.min(0.92, 0.66 + (worked?.bright ?? 0) * 0.15));
        const tone = (u: number, lift: number, power: number): string =>
            this.hue(u).saturate(power).luminance(Math.max(0.3, Math.min(0.96, lift))).hex();
        const seat = this.offset() + x * 0.052 + y * 0.036 + (grain - 0.5) * 0.06 + (worked?.turn ?? 0);
        const said = tone(seat, level + (grain - 0.5) * 0.07, strength);
        const pair = tone(seat + (worked?.spread ?? 0.08), level + 0.2 + (grain - 0.5) * 0.05, strength * 0.62);

        return <div key={at} style={{
            backgroundColor: said,
            backgroundImage: `repeating-linear-gradient(${angle}deg, ${said} 0 ${pitch}px, ${pair} ${pitch}px ${pitch * 2}px)`,
            // FURTHER ALONG THE SEGMENT, LATER, so colour travels out of the click and down the line.
            // It is paint arriving, not the picture moving: nothing translates and nothing scales.
            transition: 'background-color 300ms cubic-bezier(.3,.7,.3,1)',
            transitionDelay: `${(worked?.step ?? 0) * 34}ms`,
        }} />;
    }

    protected surface(): CSSProperties {
        const span = this.weave();
        const across = html.sized(this.$width);

        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${span}, 1fr)`,
            gridTemplateRows: `repeat(${span}, 1fr)`,
            width: across === undefined ? '100%' : `${across}px`,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
            // CENTRED THE WAY TURING'S PORTRAIT IS, AND NOT BY THE SAME RULE. An infobox centres its
            // picture with `text-align: center`, which moves an <img> because an image is inline. A
            // plate is a grid, a grid is a block, and a block ignores text-align entirely.
            margin: '0 auto',
            // NO GAP BETWEEN CELLS. A grid line would cut every stroke it crossed.
            overflow: 'hidden',
            userSelect: 'none',
            touchAction: 'none',
        };
    }

    override picture(): ReactNode {
        const span = this.weave();
        const worked = this.struck();
        const cells: ReactNode[] = [];
        for (let y = 0; y < span; y++) for (let x = 0; x < span; x++) cells.push(this.cell(y * span + x, x, y, worked.get(y * span + x)));

        // A STILL PLATE IS A LOGO — Doug: "Can I have my little pixel as a logo in my library? It
        // doesn't need to be dynamic. It can just be the initial state of the pixel that is dynamic."
        // The same plate, drawn by the same code from the same seed, with the hand taken off it.
        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="A painting"
                onPointerMove={this.$still ? undefined : event => this.move(event)}
                onPointerEnter={this.$still ? undefined : event => this.move(event)}
                onPointerLeave={this.$still ? undefined : () => this.leave()}
                onClick={this.$still ? undefined : event => this.press(event)}>
                {cells}
            </div>
        );
    }

    // ─── WHAT A HAND DOES TO IT ───────────────────────────────────────────────────────────────────

    // ONE WRITE PER CELL ENTERED, not one per pixel crossed. Moving carries the brush somewhere else
    // and changes nothing else — the plate under it is exactly the plate that would be kept. The
    // brush is picked up on arrival, once, and carried until it is used: dealing a new one on every
    // move would mean choosing a place for a stroke nobody had seen yet.
    protected move(event: React.PointerEvent<HTMLDivElement>): void {
        const span = this.weave();
        const box = event.currentTarget.getBoundingClientRect();
        const x = Math.floor(Math.max(0, Math.min(span - 0.001, ((event.clientX - box.left) / box.width) * span)));
        const y = Math.floor(Math.max(0, Math.min(span - 0.001, ((event.clientY - box.top) / box.height) * span)));
        const at = y * span + x;
        const hand = this.hand;
        if (hand.at === at) return;
        this.hand = { at, settled: hand.settled, held: hand.held ?? this.dealt(this.strokes.length === 0) };
    }

    // PUTTING THE BRUSH DOWN. The painting stays exactly as it was kept; only the stroke in hand
    // stops being shown, because it was never part of the painting.
    protected leave(): void { this.hand = { ...this.hand, at: -1 }; }

    // ONCE KEEPS WHAT IS ON THE SCREEN AND HANDS OVER THE NEXT BRUSH. TWICE CLEARS THE WHOLE THING —
    // Doug: "The double click should reset the whole image." A browser gives the second click of a
    // pair `detail: 2`, and no timer is needed to tell them apart: the first click of a double lays a
    // segment and the second wipes everything including it, so the end state is right either way.
    protected press(event: React.MouseEvent<HTMLDivElement>): void {
        const hand = this.hand;
        if (hand.at < 0) return;
        if (event.detail >= 2) { this.keep(this.opening()); this.hand = { at: hand.at, settled: -1 }; return; }
        if (hand.held === undefined) return;
        this.keep([...this.strokes, { ...hand.held, at: hand.at }]);
        this.hand = { at: hand.at, settled: hand.at, held: this.dealt() };
    }
}

export class $TypeOfTiles extends $TypeOfIllustration {
    protected override specification: Specification<$Writing> = new TilesSpecification();
}

export class TilesSpecification extends IllustrationSpecification {
    @specify('a plate is dealt from a seed rather than naming a file')
    override $showsSomething(writing: $Writing): boolean | void {
        $check((writing as $Tiles).$seed > 0,
            'a plate is dealt from a seed, and this one was dealt from none');
    }
}

export const Tiles = $($Tiles);
export const TypeOfTiles = $($TypeOfTiles);

