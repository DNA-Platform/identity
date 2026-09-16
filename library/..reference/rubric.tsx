import { CSSProperties, ReactNode } from 'react';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

// ─── THE RED HAND ─────────────────────────────────────────────────────────────────────────────────
//
// THE COVER OF SEMANTICS OF TYPES & MORE, and it is a finished transcript with somebody's marks in
// the margin.
//
// WHAT THE BOOK IS. A conversation — 106 messages, over two days — that "began as a conversation and
// became a book without anyone deciding it should." Nothing about it was planned. The structure was
// found in it AFTERWARDS, by somebody coming back through a text that was already complete, in a
// different ink, deciding where the chapters were. That second pass is the whole design.
//
// THE PARTS ARE SLOTS AND THERE ARE A HUNDRED AND SIX, in two columns of fifty-three — read down the
// left, then down the right. A hundred and one of them are bars; FIVE ARE EMPTY, drawn as bare paper
// with a hairline where a bar should be, because the export yields 101 headers against a stated 106
// and the plate draws both numbers rather than picking the flattering one. Four bands of silence
// stand where the conversation stopped — three inside the first day and the night between the two.
//
// THE TWO VOICES ARE NEVER MIXED. Thirty-two points of lightness apart, alternating, and no blend
// anywhere: two people talking do not become the same colour, and the record showing both is what
// makes it a transcript rather than a mixture.
//
// AND CLICKING RUBRICATES. Press a bar and its ink comes to full strength — its width and its hue
// untouched, because when somebody spoke and how long they spoke for are facts and not opinions —
// and a vermilion mark appears in its own gutter carrying as many ticks as the order you chose it
// in. So the plate ends up holding TWO ORDERS AT ONCE: down the page is when things were said, and
// the tick counts are when somebody decided they were chapters, and the two visibly disagree. That
// disagreement is the book.
//
// Marks are reversible and the later ones renumber down. Silences and empty slots are inert — you
// cannot rubricate a gap. Nothing happens on hover. The state is an array bond, replaced whole, and
// it does not survive a reload. `$Rubric` is a PROXY NAME, flagged for Doug.

// TWO INKS AND A THIRD HAND. The only true red in the library, and it is applied by a later act.
const paper = '#efe9dd';
const hush = '#ded5c1';
const missing = '#cfc7bb';
const mine = '#5a4a3f';
const theirs = '#8aa0b8';
const red = '#b4452f';

const slots = 106;
const down = 53;

const rolled = (seed: number, one: number, salt: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(one + 1, 0xc2b2ae35) ^ Math.imul(salt + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

// WHERE THE CONVERSATION STOPPED. Marked rather than scaled, because a silence is noticed, not
// measured — three inside the first day and the night between the two.
const silences = [14, 27, 41, 53];

export interface $Rubric$ extends $Illustration$ { }

export class $Rubric extends $Illustration implements $Rubric$ {
    $seed = 0;

    // WHICH SLOTS HAVE BEEN CALLED CHAPTERS, IN THE ORDER SOMEBODY CALLED THEM. The order is the
    // point, so the array carries it; it is replaced whole on every write.
    marked: number[] = [];

    $Rubric(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfRubric));
    }

    // THE FIVE THAT ARE NOT THERE. Dealt from the seed, spread across both days.
    protected gone(one: number): boolean {
        return [9, 31, 58, 77, 94].map(each => (each + Math.floor(rolled(this.$seed, each, 3) * 5)) % slots).includes(one);
    }

    protected said(one: number): boolean { return one % 2 === 0; }

    // HOW LONG A TURN WAS. Dealt against the real asymmetry of the export — one voice writes short
    // and the other writes long — so the shape of the page is true even though each bar is dealt.
    protected length(one: number): number {
        const roll = rolled(this.$seed, one, 7) ** 1.7;

        return this.said(one) ? 12 + roll * 46 : 26 + roll * 70;
    }

    protected mark(one: number): ReactNode {
        const column = one < down ? 0 : 1;
        const seat = one % down;
        const empty = this.gone(one);
        const at = this.marked.indexOf(one);
        const rubricated = at >= 0;
        const left = column === 0 ? 8 : 55;
        const top = 2.5 + seat * (95 / down);

        return (
            <div key={one}
                onClick={empty ? undefined : event => { event.stopPropagation(); this.call(one); }}
                style={{ position: 'absolute', left: 0, top: `${top}%`, width: '100%', height: `${95 / down}%`, display: 'flex', alignItems: 'center', cursor: empty ? 'default' : 'pointer' }}>
                {/* THE TURN ITSELF: who said it, and for how long. Never restyled by a mark. */}
                <div
                    style={{
                        position: 'absolute',
                        left: `${left}%`,
                        width: `${this.length(one) * 0.37}%`,
                        height: '100%',
                        borderRadius: '0.8px',
                        backgroundColor: empty ? 'transparent' : this.said(one) ? mine : theirs,
                        opacity: empty ? 1 : rubricated ? 1 : 0.42,
                        borderBottom: empty ? `1px solid ${missing}` : undefined,
                        transition: 'opacity 280ms ease-out',
                    }} />
                {/* THE SECOND HAND, IN THE MARGIN: one tick for each place in the order it was chosen. */}
                {rubricated && Array.from({ length: at + 1 }, (_, tick) => (
                    <div key={tick} style={{
                        position: 'absolute',
                        left: `${left - 6.4 + tick * 1.5}%`,
                        width: '1px',
                        height: '100%',
                        backgroundColor: red,
                    }} />
                ))}
            </div>
        );
    }

    protected surface(): CSSProperties {
        const wide = html.sized(this.$width);

        return {
            // A BLOCK, SAID OUT LOUD: the encyclopedia sheet draws a picture inside an illustration
            // as INLINE, and an inline box ignores width and height.
            display: 'block',
            position: 'relative',
            width: wide === undefined ? '100%' : `${wide}px`,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: paper,
            userSelect: 'none',
            touchAction: 'none',
        };
    }

    override picture(): ReactNode {
        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="A transcript of a hundred and six turns">
                {silences.map(one => (
                    <div key={`hush${one}`} style={{
                        position: 'absolute',
                        left: one >= down ? '50%' : '0',
                        width: '50%',
                        top: `${2.5 + (one % down) * (95 / down)}%`,
                        height: `${(95 / down) * 1.7}%`,
                        backgroundColor: hush,
                    }} />
                ))}
                {Array.from({ length: slots }, (_, one) => this.mark(one))}
            </div>
        );
    }

    // THE CLICK. Calling a turn a chapter, or taking it back — and taking one back renumbers every
    // chapter chosen after it, which is what happens when somebody changes their mind about where a
    // book divides.
    protected call(one: number): void {
        this.marked = this.marked.includes(one) ? this.marked.filter(each => each !== one) : [...this.marked, one];
    }
}

export class $TypeOfRubric extends $TypeOfIllustration {
    protected override specification: Specification<$Writing> = new RubricSpecification();
}

export class RubricSpecification extends IllustrationSpecification {
    @specify('a transcript is dealt from a seed rather than naming a file')
    override $showsSomething(writing: $Writing): boolean | void {
        $check((writing as $Rubric).$seed > 0,
            'a transcript is dealt from a seed, and this one was dealt from none');
    }
}

export const Rubric = $($Rubric);
export const TypeOfRubric = $($TypeOfRubric);
