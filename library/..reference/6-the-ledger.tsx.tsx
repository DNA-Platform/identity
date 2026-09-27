import { CSSProperties, ReactNode } from 'react';
import chroma from 'chroma-js';
import { $, $Block, $check } from '@dna-platform/chemistry';
import { html, reflection, Specification, specify, $Writing, $Book, $Date, $TypeOfDate, $Chapter, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification, $Section, $TypeOfSection } from '@dna-platform/public';
import { glyph } from './4-the-chapter-mark.ts';

const written = ['#f0e3b8', '#f2d6a6', '#eec5a6', '#e8b9ae', '#ddb3bd', '#cdb2c9', '#bcb4d0'];

const rule = '#e3dac4';
const waiting = '#ece5d2';

const seats = 9;
const across = 4;
const span = 12;

const laid = chroma.scale(written).mode('lch');

const rolled = (seed: number, one: number, salt: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(one + 1, 0xc2b2ae35) ^ Math.imul(salt + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

export type Entry = { chapter: $Chapter; day: string; said: string; number: number };

const dateOf = (chapter: $Chapter): $Date | undefined => {
    for (const part of reflection.printed(chapter)) {
        if (reflection.is<$Date>(part, $TypeOfDate)) return part;
        const found = reflection.within<$Date>(part, $TypeOfDate)[0];
        if (found !== undefined) return found;
    }

    return undefined;
};

const entriesOf = (book: $Book | undefined): Entry[] => {
    const dated = (book?.chapters ?? [])
        .map(chapter => {
            const written = dateOf(chapter);
            return { chapter, day: written?.day ?? '', said: written?.said ?? '' };
        })
        .filter(one => one.day !== '')
        .sort((a, one) => a.day < one.day ? -1 : a.day > one.day ? 1 : 0);

    return dated.map((one, at) => ({ ...one, number: at + 1 }));
};

export interface $Chart$ extends $Illustration$ { }

export class $Chart extends $Illustration implements $Chart$ {
    $seed = 0;

    $Chart(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfChart));
    }

    protected entries(): Entry[] { return entriesOf(this.book); }

    protected seat(): CSSProperties {
        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${across}, 1fr)`,
            gridTemplateRows: `repeat(${across}, 1fr)`,
            gap: '1px',
            padding: '1px',
            backgroundColor: rule,
            boxSizing: 'border-box',
            textDecoration: 'none',
        };
    }

    protected tint(number: number, at: number): string {
        const grain = rolled(this.$seed + 977, number * 16 + at, 11);

        return laid(Math.min(1, (number - 1) / (span - 1))).luminance(0.78 - grain * 0.035).hex();
    }

    protected square(one: Entry | undefined, recency: number): ReactNode {
        if (one === undefined) {
            return (
                <div key={`empty${recency}`} style={this.seat()}>
                    {Array.from({ length: across * across }, (_, at) => <div key={at} style={{ backgroundColor: waiting }} />)}
                </div>
            );
        }
        const cells = glyph(one.number);

        return (
            <a key={one.number}
                href={`#${reflection.slug(one.chapter.name)}`}
                title={`${one.chapter.name} · ${one.day}`}
                style={{ ...this.seat(), cursor: 'pointer' }}>
                {cells.map((lit, at) => (
                    <div key={at} style={{ backgroundColor: lit ? this.tint(one.number, at) : waiting }} />
                ))}
            </a>
        );
    }

    protected surface(): CSSProperties {
        const wide = html.sized(this.$width);

        return {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '2px',
            padding: '2px',
            width: wide === undefined ? '100%' : `${wide}px`,
            maxWidth: '100%',
            aspectRatio: '1 / 1',
            margin: '0 auto',
            overflow: 'hidden',
            backgroundColor: rule,
            border: `1px solid ${rule}`,
            boxSizing: 'border-box',
            userSelect: 'none',
        };
    }

    override picture(): ReactNode {
        const recent = this.entries().reverse().slice(0, seats);

        return (
            <div className="pd-image" style={this.surface()} role="img" aria-label="The most recent entries in this log">
                {Array.from({ length: seats }, (_, seat) => this.square(recent[seat], seat))}
            </div>
        );
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

export class $Entries extends $Section {
    $Entries(block: $Block) {
        super.$Section(this.addType(block, $TypeOfEntries));
    }

    protected entries(): Entry[] { return entriesOf(this.book); }

    override print(): ReactNode {
        const kept = this.entries().reverse();

        return (
            <>
                {super.print()}
                {kept.length === 0 ? null : (
                    <ul className="pd-list">
                        {kept.map(one => (
                            <li className="pd-item" key={one.number}>
                                <a className="pd-meaning" href={`#${reflection.slug(one.chapter.name)}`}>{one.chapter.name}</a>
                                {' · '}
                                <time dateTime={one.day}>{one.said}</time>
                            </li>
                        ))}
                    </ul>
                )}
            </>
        );
    }
}

export class $TypeOfEntries extends $TypeOfSection { }

export const Entries = $($Entries);
export const TypeOfEntries = $($TypeOfEntries);
