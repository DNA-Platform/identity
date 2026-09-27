import { CSSProperties, ReactNode } from 'react';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

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

    named: number[] = [];

    $Fixed(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfFixed));
    }

    protected seeded(): number {
        const x = 2 + Math.floor(rolled(this.$seed, 101, 7) * (across - 4));
        const y = 2 + Math.floor(rolled(this.$seed, 7, 101) * (across - 4));

        return y * across + x;
    }

    protected isFixed(at: number): boolean { return at === this.seeded() || this.named.includes(at); }

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

    protected edge(at: number): 'top' | 'right' | 'bottom' | 'left' | undefined {
        if (this.isFixed(at)) return undefined;
        const to = this.names(at);
        if (to === at + 1) return 'right';
        if (to === at - 1) return 'left';

        return to > at ? 'bottom' : 'top';
    }

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
        const cut = (nx: number, ny: number): boolean =>
            nx >= 0 && nx < across && ny >= 0 && ny < across && this.basin(ny * across + nx, walked) !== mine;

        return <div key={at} style={{
            backgroundColor: field,
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
