import { CSSProperties, ReactNode } from 'react';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

// ─── FIXED POINTS ─────────────────────────────────────────────────────────────────────────────────
//
// THE COVER OF SEMANTIC REFERENCE THEORY, and it is the severe one.
//
// THE DOMAIN OF THE THEORY IS REFERENTS, and a referent's whole content is what it refers to. So
// every one of the hundred and twenty-one cells has a BITE taken out of exactly one of its four
// edges — the edge it names. You can read which way a cell points before anything is touched, and
// you can see the single cell with no bite at all, which is the one that refers to itself.
//
// THE NAMING MAP IS DEALT ONCE AND NEVER MOVES. An earlier version of this plate let a click
// RE-ROOT the field, and Gabby was right to kill it: that is the catalogue's own figure with the
// hatching turned off, and putting "this book is filed under itself" on a different book is
// decoration wearing somebody else's meaning. The catalogue owns THE ONE. This book owns HOW MANY.
//
// SO CLICKING ASSERTS AN AXIOM. Press a cell and it becomes a fixed point: its bite closes, and the
// field re-partitions — every cell now belongs to whichever fixed point its chain reaches first,
// and a hairline of ink is drawn along every edge where two basins meet. One press, one new closed
// curve. Two presses, two. The number of regions is the number of things a reader decided were
// their own content, and it is an assertion, not a fact they were handed. Press a fixed point again
// and the axiom is retracted: its bite returns and its region is absorbed by whatever it falls into.
//
// THERE IS NO INK ON THE PLATE AT REST. The only dark value in the whole library appears solely by
// a reader's hand, which is the piece saying what a proof is.
//
// Nothing happens when a pointer moves over it — the hover reading that used to light a chain is
// gone, along with its handlers and its bond. Doug, 2026-09-15: "Something that moves with you isn't
// interacting it is REACTING." `$Fixed` is a PROXY NAME, flagged for Doug.

// PROOF SHEET. Three values, one hue, no intermediates — a symbol is in the expression or it is
// not, and there is no forty percent of a symbol. The only three-colour plate in the library and the
// only single-hue one.
const bite = '#e9eef4';
const field = '#c9d3de';
const ink = '#2f4f74';

const across = 11;

const rolled = (seed: number, x: number, y: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(x + 1, 0xc2b2ae35) ^ Math.imul(y + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

export interface $Fixed$ extends $Illustration$ { }

export class $Fixed extends $Illustration implements $Fixed$ {
    $seed = 0;

    // THE AXIOMS A READER HAS ASSERTED, in the order they asserted them. Replaced whole on every
    // write — an array bond is compared element by element, so a fresh array holding the same
    // numbers is correctly not news.
    named: number[] = [];

    $Fixed(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfFixed));
    }

    // THE ONE THE SEED CHOSE. Off centre, because the thing a domain is about is not the middle of
    // anything, and it is the only cell with a whole fill before anybody presses one.
    protected seeded(): number {
        const x = 2 + Math.floor(rolled(this.$seed, 101, 7) * (across - 4));
        const y = 2 + Math.floor(rolled(this.$seed, 7, 101) * (across - 4));

        return y * across + x;
    }

    protected isFixed(at: number): boolean { return at === this.seeded() || this.named.includes(at); }

    // WHAT THIS CELL NAMES: one step toward the seeded one, on one axis, dealt from the seed. The
    // map never changes — only which cells are exempt from following it.
    protected names(at: number): number {
        if (this.isFixed(at)) return at;
        const x = at % across;
        const y = Math.floor(at / across);
        const top = this.seeded();
        const toward = { x: Math.sign((top % across) - x), y: Math.sign(Math.floor(top / across) - y) };
        const legal: number[] = [];
        if (toward.x !== 0) legal.push(y * across + (x + toward.x));
        if (toward.y !== 0) legal.push((y + toward.y) * across + x);

        return legal[Math.floor(rolled(this.$seed + 7, x, y) * legal.length)];
    }

    // WHICH EDGE THE BITE IS TAKEN OUT OF — the one it names. A fixed point has no bite.
    protected edge(at: number): 'top' | 'right' | 'bottom' | 'left' | undefined {
        if (this.isFixed(at)) return undefined;
        const to = this.names(at);
        if (to === at + 1) return 'right';
        if (to === at - 1) return 'left';

        return to > at ? 'bottom' : 'top';
    }

    // WHICH FIXED POINT THIS CELL ARRIVES AT. Walked here rather than cached on the chemical: a
    // write during a render would land in the store and schedule nothing.
    protected basin(at: number, walked: Map<number, number>): number {
        const held = walked.get(at);
        if (held !== undefined) return held;
        const seen: number[] = [];
        let one = at;
        while (!this.isFixed(one) && seen.length <= across * 2) { seen.push(one); one = this.names(one); }
        seen.forEach(each => walked.set(each, one));
        walked.set(one, one);

        return one;
    }

    protected cell(at: number, x: number, y: number, walked: Map<number, number>): ReactNode {
        const side = this.edge(at);
        const mine = this.basin(at, walked);
        // A RULE WHERE TWO BASINS MEET, drawn on this cell's own edges so the curve closes without
        // anybody computing a path — the partition draws its own boundary.
        const cut = (nx: number, ny: number): boolean =>
            nx >= 0 && nx < across && ny >= 0 && ny < across && this.basin(ny * across + nx, walked) !== mine;

        return <div key={at} style={{
            backgroundColor: field,
            // THE BITE: three pixels of paper out of the edge this cell names.
            borderTop: side === 'top' ? `3px solid ${bite}` : undefined,
            borderRight: side === 'right' ? `3px solid ${bite}` : undefined,
            borderBottom: side === 'bottom' ? `3px solid ${bite}` : undefined,
            borderLeft: side === 'left' ? `3px solid ${bite}` : undefined,
            boxSizing: 'border-box',
            boxShadow: [
                cut(x, y - 1) ? `inset 0 1px 0 0 ${ink}` : '',
                cut(x + 1, y) ? `inset -1px 0 0 0 ${ink}` : '',
                cut(x, y + 1) ? `inset 0 -1px 0 0 ${ink}` : '',
                cut(x - 1, y) ? `inset 1px 0 0 0 ${ink}` : '',
            ].filter(one => one !== '').join(', ') || undefined,
            cursor: 'pointer',
            transition: 'box-shadow 260ms linear, border-color 200ms linear, border-width 200ms linear',
        }} />;
    }

    protected surface(): CSSProperties {
        const wide = html.sized(this.$width);

        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${across}, 1fr)`,
            gridTemplateRows: `repeat(${across}, 1fr)`,
            width: wide === undefined ? '100%' : `${wide}px`,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: bite,
            userSelect: 'none',
            touchAction: 'none',
        };
    }

    override picture(): ReactNode {
        const walked = new Map<number, number>();
        const cells: ReactNode[] = [];
        for (let y = 0; y < across; y++) for (let x = 0; x < across; x++) cells.push(this.cell(y * across + x, x, y, walked));

        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="A domain of referents"
                onClick={event => this.assert(event)}>
                {cells}
            </div>
        );
    }

    // THE CLICK. Asserting that a referent is its own content, or retracting it. The seeded one
    // cannot be retracted — a domain with no fixed point at all has no basins to draw.
    protected assert(event: React.MouseEvent<HTMLDivElement>): void {
        const box = event.currentTarget.getBoundingClientRect();
        const x = Math.floor(Math.max(0, Math.min(across - 0.001, ((event.clientX - box.left) / box.width) * across)));
        const y = Math.floor(Math.max(0, Math.min(across - 0.001, ((event.clientY - box.top) / box.height) * across)));
        const at = y * across + x;
        if (at === this.seeded()) return;
        this.named = this.named.includes(at) ? this.named.filter(one => one !== at) : [...this.named, at];
    }
}

export class $TypeOfFixed extends $TypeOfIllustration {
    protected override specification: Specification<$Writing> = new FixedSpecification();
}

export class FixedSpecification extends IllustrationSpecification {
    @specify('a domain of referents is dealt from a seed rather than naming a file')
    override $showsSomething(writing: $Writing): boolean | void {
        $check((writing as $Fixed).$seed > 0,
            'a domain of referents is dealt from a seed, and this one was dealt from none');
    }
}

export const Fixed = $($Fixed);
export const TypeOfFixed = $($TypeOfFixed);
