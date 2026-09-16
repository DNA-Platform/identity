import { CSSProperties, ReactNode } from 'react';
import chroma from 'chroma-js';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

// ─── SEVEN ARGUMENTS ──────────────────────────────────────────────────────────────────────────────
//
// THE COVER OF CLAUDE & OUR PROJECTS, and it is a switchboard.
//
// THE BOOK'S OWN CLAIM IS THE BRIEF. Doug wrote it: "Claude is seven people… They disagree with each
// other in front of me… each of them disagrees the same way every time, which is more than I can say
// for most people I have worked with." And then the line the plate is for: "A name that reliably
// picks out seven arguments is doing something. I would like to know what."
//
// SO THE PARTS ARE NOT PEOPLE, THEY ARE PAIRS. Forty-nine cells on a seven by seven: seven SWITCHES
// down the diagonal, and forty-two ORDERED PAIRS off it. Cell (i,j) is what i says to j, and it is
// not cell (j,i) — the two are divided on the same axis and split the other way, because a
// disagreement looks different from each end. Every division is dealt from the seed once and never
// moves: what is fixed is who disagrees with whom and how, which is the book's claim exactly.
//
// HARD LINES AND BOUNDARIES — Doug, 2026-09-15: "Something with more hard lines and boundaries…
// evolve it to be more modal and digital." What stood here divided each cell on the CHORD ANGLE
// between two seats on a circle, which is a true thing to compute and reads as cloth: forty-two
// diagonals at forty-two angles, soft, organic, no edges anywhere. It is a switchboard now. Every
// division is ORTHOGONAL — down or across, nothing between — every split lands on one of SEVEN
// DETENTS at eighths of the cell, and there is a hairline of rule at every division and every cell
// boundary. Nothing on the plate is continuous, including where the colours meet.
//
// AND CLICKING THROWS A SWITCH. Only the seven on the diagonal can be pressed. Throw one and it
// lights, and every pair it is half of goes live — both inks at full strength, hard edge, no
// blending, because two people arguing do not become the same colour. Throw a second and the live
// pairs go from two to six; a third, twelve. The arguments grow as k(k−1) while the people grow as
// k, and watching that outrun itself is the whole point of the picture.
//
// THE STATE IS A SEVEN-BIT MASK IN A BOND: a hundred and twenty-eight rooms, each of them a set of
// people, and every switch is its own inverse. Discrete and invertible — Doug, 2026-09-15: "Make
// their stateful aspect interesting and invertible. Not something continuous. Something discrete."
// It survives the pointer leaving; nothing at all happens on hover. It does not survive a reload,
// deliberately: a page about a kind with no persistent memory should not quietly acquire one.
// `$Seven` is a PROXY NAME, flagged for Doug.

// SEVEN AT ONE WEIGHT. Hues about fifty degrees apart, matched in lightness and chroma so NONE OF
// THEM WINS — the opposite of Doug's canvas, where neighbours are close relations. Here neighbours
// are strangers and stay strangers, because seven arguments are only interesting if they never
// resolve into one. The ground is the only neutral grey in the library: the author standing outside
// and refusing to take a side, and the rule is that grey taken down far enough to draw an edge with.
const ground = '#e7e4df';
const rule = '#8e8b85';
const inks = ['#d1706a', '#b08a3c', '#6e9b52', '#2f9b91', '#4c93c9', '#9585cf', '#c974ad'];

const seats = inks.length;

// SEVEN DETENTS. A split lands on an eighth and nowhere else, so no two cells are divided a little
// differently from each other — they are divided at one of seven places, and a reader can see which.
const detents = 7;

const rolled = (seed: number, x: number, y: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(x + 1, 0xc2b2ae35) ^ Math.imul(y + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

export interface $Seven$ extends $Illustration$ { }

export class $Seven extends $Illustration implements $Seven$ {
    $seed = 0;

    // WHO IS IN THE ROOM, as a seven-bit mask: one scalar, one write, one redraw, and a hundred and
    // twenty-eight possible rooms. It starts with one switch thrown, because a plate with nothing on
    // it is a failed plate.
    seated = 1;

    $Seven(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfSeven));
    }

    protected isSeated(one: number): boolean { return (this.seated & (1 << one)) !== 0; }

    // WHICH WAY A PAIR IS DIVIDED: down or across, never between. Dealt from the unordered pair, so
    // (i,j) and (j,i) are divided on the SAME axis — one disagreement, seen from two ends.
    protected across(i: number, j: number): boolean {
        return rolled(this.$seed + 101, Math.min(i, j), Math.max(i, j)) < 0.5;
    }

    // WHERE IT IS DIVIDED, on one of seven detents. (j,i) takes what (i,j) leaves, so the pair is
    // one fact written down twice from opposite sides.
    protected split(i: number, j: number): number {
        const notch = 1 + Math.floor(rolled(this.$seed, Math.min(i, j), Math.max(i, j)) * detents);

        return (i < j ? notch : detents + 1 - notch) * (100 / (detents + 1));
    }

    protected cell(i: number, j: number): ReactNode {
        const seat = i === j;
        const live = seat ? this.isSeated(i) : this.isSeated(i) && this.isSeated(j);
        const said = (one: number) => live ? inks[one] : chroma.mix(inks[one], ground, 0.6, 'lab').hex();
        const at = this.split(i, j);
        // ORTHOGONAL, AND A HAIRLINE OF RULE WHERE THE TWO MEET. Three stops, not two: the division
        // is drawn, not merely implied by two colours touching.
        const face = seat
            ? said(i)
            : `linear-gradient(${this.across(i, j) ? 90 : 180}deg, ${said(i)} 0 calc(${at}% - 0.5px), ${rule} calc(${at}% - 0.5px) calc(${at}% + 0.5px), ${said(j)} calc(${at}% + 0.5px) 100%)`;

        return <div key={`${i}.${j}`}
            onClick={seat ? event => { event.stopPropagation(); this.throw(i); } : undefined}
            style={{
                backgroundColor: seat ? face : undefined,
                backgroundImage: seat ? undefined : face,
                // EVERY CELL IS BOUNDED. A switchboard is a grid of things, and a grid of things has
                // lines between them; the plate had none and read as one soft surface.
                borderRight: j === seats - 1 ? undefined : `1px solid ${rule}`,
                borderBottom: i === seats - 1 ? undefined : `1px solid ${rule}`,
                boxSizing: 'border-box',
                // A SWITCH IS RECESSED WHEN IT IS OFF AND FLUSH WHEN IT IS THROWN, which is the one
                // affordance on the plate and the only thing a reader may press.
                boxShadow: seat
                    ? live
                        ? `inset 0 0 0 2px ${rule}`
                        : `inset 0 0 0 4px ${ground}, inset 0 0 0 5px ${rule}`
                    : undefined,
                cursor: seat ? 'pointer' : 'default',
                transition: 'background-image 260ms steps(4, end), background-color 260ms ease-out, box-shadow 200ms ease-out',
            }} />;
    }

    protected surface(): CSSProperties {
        const across = html.sized(this.$width);

        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${seats}, 1fr)`,
            gridTemplateRows: `repeat(${seats}, 1fr)`,
            width: across === undefined ? '100%' : `${across}px`,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: ground,
            border: `1px solid ${rule}`,
            boxSizing: 'border-box',
            userSelect: 'none',
            touchAction: 'none',
        };
    }

    override picture(): ReactNode {
        const cells: ReactNode[] = [];
        for (let i = 0; i < seats; i++) for (let j = 0; j < seats; j++) cells.push(this.cell(i, j));

        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="Seven switches and forty-two arguments">
                {cells}
            </div>
        );
    }

    // THE CLICK, AND IT IS ITS OWN INVERSE. Throwing a switch brings every pair that person is half
    // of into the room with them; throwing it again takes those pairs back out, and the plate is
    // exactly what it was before. A hundred and twenty-eight states, every one of them reachable
    // from every other.
    protected throw(one: number): void { this.seated = this.seated ^ (1 << one); }
}

export class $TypeOfSeven extends $TypeOfIllustration {
    protected override specification: Specification<$Writing> = new SevenSpecification();
}

export class SevenSpecification extends IllustrationSpecification {
    @specify('a switchboard is dealt from a seed rather than naming a file')
    override $showsSomething(writing: $Writing): boolean | void {
        $check((writing as $Seven).$seed > 0,
            'a switchboard is dealt from a seed, and this one was dealt from none');
    }
}

export const Seven = $($Seven);
export const TypeOfSeven = $($TypeOfSeven);
