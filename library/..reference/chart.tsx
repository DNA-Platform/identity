import { CSSProperties, ReactNode } from 'react';
import chroma from 'chroma-js';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

// ─── HOW I GOT HERE ───────────────────────────────────────────────────────────────────────────────
//
// THE COVER OF MY LIBRARY LOG, and it is a register filling up.
//
// WHY THIS IS THE THIRD TRY. The first was eighteen bands of hairlines and Doug called it noise. The
// second was a chart with a track drawn on it, and he was right about that too — 2026-09-16: "I
// still want my library log to feel more digital and not with that line. To not have black… It was
// designed to fit in most with the one I rejected, so it needs to be matched to the existing set."
// That is exactly what had happened: a cartographic plate built to sit beside a plate that no longer
// exists, keeping a drawn line and a dark ink while every other cover in the library went to flat
// cells on a grid, high-key, nothing dark anywhere.
//
// SO IT IS CELLS NOW, LIKE THE REST OF THE SHELF. Two hundred and fifty-six of them, and the record
// is ALWAYS FULL: every cell belongs to some chapter, in reading order — left to right, line after
// line, the way a page fills. A log does not have blank pages waiting at the back; it has what has
// been written, and writing another chapter re-divides the whole of it. No line is drawn anywhere
// and nothing on the plate is darker than a tint.
//
// AND THE PALETTE IS A SEQUENCE, WHICH NO OTHER PLATE HERE HAS. The catalogue's wheel is a cycle,
// the switchboard's seven are a set at one weight, the domain is one ink in three values and the
// transcript is two inks that never mix. A log is the one book whose parts are ORDERED, so its
// colours are ordered too: each chapter is one step further along a high-key ramp, and you can see
// which came first without being told.
//
// IT AUTO-EVOLVES WITH THE BOOK — Doug, 2026-09-15: "If you can have a piece of art for the log that
// auto-evolves with the number of chapters, that is cool." How many divisions it opens with is not a
// number anybody typed: it asks the book it is standing in how many chapters it has. Write another
// and the plate is divided one more way the next time the page is built.
//
// TWO CELLS ARE MARKED AND THE REST ARE INERT. THE END OF THE RECORD, in the last corner, writes the
// next chapter; WHERE THE LAST CHAPTER BEGAN takes it back. Each is the other's inverse and neither
// is a slider — Doug: "Make their stateful aspect interesting and invertible… Something discrete."
// A new chapter re-divides everything, so the mark that takes it back moves to where the previous
// one began, and pressing the two in turn walks the record forward and backward through the same
// divisions every time, because every weight is dealt from the seed and never accumulated.
//
// Nothing happens when a pointer moves over it, and nothing is kept across a reload, because only
// the catalogue keeps anything. `$Chart` is a PROXY NAME, flagged for Doug.

// A SEQUENCE, HELD HIGH. Straw through apricot and rose to a pale lilac — warm where the library
// catalogue is everything at once, and ordered where the switchboard is deliberately unordered. The
// darkest step is still a tint: there is no black on this plate and nothing approaching one.
const written = ['#f0e3b8', '#f2d6a6', '#eec5a6', '#e8b9ae', '#ddb3bd', '#cdb2c9', '#bcb4d0'];

const paper = '#f6f1e4';
const rule = '#e3dac4';
const waiting = '#ece5d2';

const across = 16;
const cells = across * across;
const most = 12;

const rolled = (seed: number, one: number, salt: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(one + 1, 0xc2b2ae35) ^ Math.imul(salt + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

const laid = chroma.scale(written).mode('lch');

export interface $Chart$ extends $Illustration$ { }

export class $Chart extends $Illustration implements $Chart$ {
    $seed = 0;

    // HOW MANY CHAPTERS ARE WRITTEN DOWN: one integer over a countable few, moving one either way,
    // and −1 means "as many as the book has". One write, one redraw.
    kept = -1;

    $Chart(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfChart));
    }

    // HOW LONG THE BOOK IS, ASKED OF THE BOOK. The apparatus — the cover, the contents, the lead —
    // is not a chapter somebody wrote, so it comes off.
    protected chapters(): number {
        return Math.max(1, Math.min(most, (this.book?.chapters.length ?? 0) - 3));
    }

    protected held(): number { return this.kept < 0 ? this.chapters() : this.kept; }

    // HOW MUCH OF THE RECORD A CHAPTER IS. A weight dealt from the seed and the chapter number,
    // never accumulated, so taking one back and writing it again gives it exactly the share it had.
    protected weight(one: number): number {
        return 0.55 + rolled(this.$seed, one, 3) * 1.1;
    }

    // WHO OWNS EVERY CELL. The weights are normalised across however many chapters there are, so
    // the plate is full at one chapter and full at twelve — and writing another one re-divides all
    // of them, which is what re-reading a record does to it.
    protected filled(): { owner: number[]; opens: number; closes: number } {
        const here = this.held();
        const weights = Array.from({ length: here }, (_, one) => this.weight(one));
        const total = weights.reduce((sum, one) => sum + one, 0);
        const owner: number[] = [];
        weights.forEach((one, chapter) => {
            const wide = chapter === here - 1 ? cells - owner.length : Math.max(1, Math.round((one / total) * cells));
            for (let n = 0; n < wide && owner.length < cells; n++) owner.push(chapter);
        });
        while (owner.length < cells) owner.push(here - 1);

        return { owner, opens: cells - 1, closes: owner.indexOf(here - 1) };
    }

    protected cell(at: number, owner: number[], ends: number, begins: number): ReactNode {
        const chapter = owner[at];
        const inked = chapter !== undefined;
        const opens = at === ends;
        const closes = at === begins && this.held() > 1;
        const grain = rolled(this.$seed + 977, at, 11);
        // EACH CHAPTER ONE STEP FURTHER ALONG, with a breath of variation inside a run so a long
        // chapter is a block of one colour rather than a flat slab of it.
        // THE RAMP SPANS WHATEVER IS THERE, so two chapters are two ends of it and seven are seven
        // steps along it. A record of two entries should not look like the first sixth of a record.
        const said = inked
            ? laid(this.held() === 1 ? 0.45 : chapter / (this.held() - 1)).luminance(0.79 - grain * 0.04).hex()
            : waiting;

        return <div key={at} style={{
            backgroundColor: said,
            // THE GRID IS DRAWN, and it is the same everywhere — a register is ruled whether or not
            // anything has been written in it.
            borderRight: `1px solid ${rule}`,
            borderBottom: `1px solid ${rule}`,
            boxSizing: 'border-box',
            // THE FRONTIER IS A PAIR, AND IT IS THE ONLY THING MARKED. The cell about to be written
            // carries an open box; the last one written carries a filled one. Side by side, so what
            // a reader sees at the edge of the record is one thing to press forward and one to press
            // back, and they are plainly opposite.
            boxShadow: opens ? `inset 0 0 0 2px ${rule}, inset 0 0 0 3px ${paper}`
                : closes ? `inset 0 0 0 3px ${paper}` : undefined,
            cursor: opens || closes ? 'pointer' : 'default',
            transition: 'background-color 200ms steps(3, end), box-shadow 160ms steps(2, end)',
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
            backgroundColor: paper,
            borderTop: `1px solid ${rule}`,
            borderLeft: `1px solid ${rule}`,
            boxSizing: 'border-box',
            userSelect: 'none',
            touchAction: 'none',
        };
    }

    override picture(): ReactNode {
        const { owner, opens, closes } = this.filled();
        const drawn: ReactNode[] = [];
        for (let at = 0; at < cells; at++) drawn.push(this.cell(at, owner, opens, closes));

        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="A register of chapters"
                onClick={event => this.write(event)}>
                {drawn}
            </div>
        );
    }

    // THE CLICK AND ITS INVERSE, ON THE TWO CELLS AT THE FRONTIER. The empty one writes the next
    // chapter; the written one takes the last one back. Nothing else on the register answers.
    protected write(event: React.MouseEvent<HTMLDivElement>): void {
        const box = event.currentTarget.getBoundingClientRect();
        const x = Math.floor(Math.max(0, Math.min(across - 0.001, ((event.clientX - box.left) / box.width) * across)));
        const y = Math.floor(Math.max(0, Math.min(across - 0.001, ((event.clientY - box.top) / box.height) * across)));
        const at = y * across + x;
        const { opens, closes } = this.filled();
        const here = this.held();
        if (at === opens && here < most) { this.kept = here + 1; return; }
        if (at === closes && here > 1) this.kept = here - 1;
    }
}

export class $TypeOfChart extends $TypeOfIllustration {
    protected override specification: Specification<$Writing> = new ChartSpecification();
}

export class ChartSpecification extends IllustrationSpecification {
    @specify('a register is dealt from a seed rather than naming a file')
    override $showsSomething(writing: $Writing): boolean | void {
        $check((writing as $Chart).$seed > 0,
            'a register is dealt from a seed, and this one was dealt from none');
    }
}

export const Chart = $($Chart);
export const TypeOfChart = $($TypeOfChart);
