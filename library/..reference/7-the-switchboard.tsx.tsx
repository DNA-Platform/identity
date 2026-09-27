import { CSSProperties, ReactNode } from 'react';
import chroma from 'chroma-js';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

const ground = '#e7e4df';
const rule = '#8e8b85';
const inks = ['#d1706a', '#b08a3c', '#6e9b52', '#2f9b91', '#4c93c9', '#9585cf', '#c974ad'];

const seats = inks.length;

const detents = 7;

const rolled = (seed: number, x: number, y: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(x + 1, 0xc2b2ae35) ^ Math.imul(y + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

export interface $Seven$ extends $Illustration$ { }

export class $Seven extends $Illustration implements $Seven$ {
    $seed = 0;

    seated = 1;

    $Seven(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfSeven));
    }

    protected isSeated(one: number): boolean { return (this.seated & (1 << one)) !== 0; }

    protected across(i: number, j: number): boolean {
        return rolled(this.$seed + 101, Math.min(i, j), Math.max(i, j)) < 0.5;
    }

    protected split(i: number, j: number): number {
        const notch = 1 + Math.floor(rolled(this.$seed, Math.min(i, j), Math.max(i, j)) * detents);

        return (i < j ? notch : detents + 1 - notch) * (100 / (detents + 1));
    }

    protected cell(i: number, j: number): ReactNode {
        const seat = i === j;
        const live = seat ? this.isSeated(i) : this.isSeated(i) && this.isSeated(j);
        const said = (one: number) => live ? inks[one] : chroma.mix(inks[one], ground, 0.6, 'lab').hex();
        const at = this.split(i, j);
        const face = seat
            ? said(i)
            : `linear-gradient(${this.across(i, j) ? 90 : 180}deg, ${said(i)} 0 calc(${at}% - 0.5px), ${rule} calc(${at}% - 0.5px) calc(${at}% + 0.5px), ${said(j)} calc(${at}% + 0.5px) 100%)`;

        return <div key={`${i}.${j}`}
            onClick={seat ? event => { event.stopPropagation(); this.throw(i); } : undefined}
            style={{
                backgroundColor: seat ? face : undefined,
                backgroundImage: seat ? undefined : face,
                borderRight: j === seats - 1 ? undefined : `1px solid ${rule}`,
                borderBottom: i === seats - 1 ? undefined : `1px solid ${rule}`,
                boxSizing: 'border-box',
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
