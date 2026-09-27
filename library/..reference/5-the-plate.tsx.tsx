import { CSSProperties, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import chroma, { Color, Scale } from 'chroma-js';
import { $, $Block, $check, styled } from '@dna-platform/chemistry';
import { html, Specification, specify, $Writing, $Illustration, $Illustration$, $TypeOfIllustration, IllustrationSpecification } from '@dna-platform/public';

export const painted = ['#f3c6d1', '#f7d8bc', '#efe6aa', '#cfe3b2', '#a3d4bf', '#79c9c6', '#a8c5e1', '#cec5e7', '#e5b8cb', '#f3c6d1'];

export class Wheel {
    private readonly scale: Scale;

    constructor(stops: string[] = painted) {
        this.scale = chroma.scale(stops).mode('lch');
    }

    hue(u: number): Color {
        return this.scale(((u % 1) + 1) % 1);
    }

    at(u: number, lift: number, power: number): string {
        return this.hue(u).saturate(power).luminance(Math.max(0.3, Math.min(0.96, lift))).hex();
    }
}

export const family = { mine: 0.42, theirs: 0.88 };

export type Tone = keyof typeof family;

const rolled = (seed: number, x: number, y: number): number => {
    const start = Math.imul(seed + 0x9e3779b9, 0x85ebca6b) ^ Math.imul(x + 1, 0xc2b2ae35) ^ Math.imul(y + 1, 0x27d4eb2f);
    const mixed = Math.imul(start ^ (start >>> 15), 0x2545f491);

    return ((mixed ^ (mixed >>> 16)) >>> 0) / 4294967296;
};

const along = (dx: number, dy: number): number => (Math.atan2(dy, dx) * 180) / Math.PI + 90;

const hatches = [0, 22, 45, 68, 90, 112, 135, 158];

export type Seat = { x: number; y: number };

export class Field {
    constructor(readonly seed: number, readonly span = 12) { }

    get cells(): number { return this.span * this.span; }

    seatOf(at: number): Seat { return { x: at % this.span, y: Math.floor(at / this.span) }; }

    atOf(seat: Seat): number { return seat.y * this.span + seat.x; }

    grain(x: number, y: number): number { return rolled(this.seed + 977, x, y); }

    get summit(): Seat {
        return {
            x: 3 + Math.floor(rolled(this.seed, 101, 7) * (this.span - 6)),
            y: 3 + Math.floor(rolled(this.seed, 7, 101) * (this.span - 6)),
        };
    }

    filedBy(x: number, y: number): Seat {
        const top = this.summit;
        if (x === top.x && y === top.y) return top;
        const toward = { x: Math.sign(top.x - x), y: Math.sign(top.y - y) };
        const legal: Seat[] = [];
        if (toward.x !== 0) legal.push({ x: x + toward.x, y });
        if (toward.y !== 0) legal.push({ x, y: y + toward.y });
        if (toward.x !== 0 && toward.y !== 0) legal.push({ x: x + toward.x, y: y + toward.y });

        return legal[Math.floor(rolled(this.seed + 7, x, y) * legal.length)];
    }

    angle(x: number, y: number): number {
        const top = this.summit;
        if (x === top.x && y === top.y) return hatches[Math.floor(this.grain(x, y) * hatches.length)];
        const next = this.filedBy(x, y);

        return along(next.x - x, next.y - y);
    }

    pitch(x: number, y: number): number { return 2 + Math.floor(this.grain(x, y) * 2); }

    path(from: number, to: number, acrossFirst: boolean): number[] {
        const cells: number[] = [];
        const target = this.seatOf(to);
        let { x, y } = this.seatOf(from);
        while (x !== target.x || y !== target.y) {
            const across = Math.abs(target.x - x);
            const down = Math.abs(target.y - y);
            if (across > down || (across === down && acrossFirst) || down === 0) x += Math.sign(target.x - x);
            else y += Math.sign(target.y - y);
            cells.push(this.atOf({ x, y }));
        }

        return cells;
    }
}

export type Dealt = { bright: number; turn: number; spread: number; acrossFirst: boolean };

export class Stroke {
    constructor(readonly at: number, readonly dealt: Dealt) { }

    laid(at: number): Stroke { return new Stroke(at, this.dealt); }

    static dark(): Dealt {
        return { bright: -0.95, turn: 0, spread: 0.08, acrossFirst: Math.random() < 0.5 };
    }

    static deal(): Dealt {
        return {
            bright: (Math.random() - 0.5) * 2,
            turn: (Math.random() - 0.5) * 0.6,
            spread: 0.03 + Math.random() * 0.32,
            acrossFirst: Math.random() < 0.5,
        };
    }
}

export type Worked = { dealt: Dealt; step: number };

export class Painting {
    constructor(readonly strokes: readonly Stroke[] = []) { }

    get empty(): boolean { return this.strokes.length === 0; }

    with(stroke: Stroke): Painting { return new Painting([...this.strokes, stroke]); }

    cleared(): Painting { return new Painting([]); }

    worked(field: Field): Map<number, Worked> {
        const done = new Map<number, Worked>();
        this.strokes.forEach((stroke, order) => {
            const run = order === 0 ? [stroke.at] : field.path(this.strokes[order - 1].at, stroke.at, stroke.dealt.acrossFirst);
            run.forEach((cell, step) => done.set(cell, { dealt: stroke.dealt, step }));
        });

        return done;
    }

    text(): string {
        return JSON.stringify(this.strokes.map(one => ({ at: one.at, ...one.dealt })));
    }

    static of(text: string): Painting {
        try {
            const read = JSON.parse(text) as ({ at: number } & Dealt)[];
            if (!Array.isArray(read)) return new Painting();

            return new Painting(read
                .filter(one => typeof one?.at === 'number' && typeof one.bright === 'number')
                .map(one => new Stroke(one.at, { bright: one.bright, turn: one.turn, spread: one.spread, acrossFirst: one.acrossFirst })));
        } catch {
            return new Painting();
        }
    }

    static opening(field: Field, marks: number): Painting {
        return new Painting(Array.from({ length: marks }, (_, one) => new Stroke(
            Math.floor(rolled(field.seed + 401, one, 3) * field.cells),
            {
                bright: (rolled(field.seed + 403, one, 7) - 0.5) * 1.6,
                turn: (rolled(field.seed + 404, one, 11) - 0.5) * 0.6,
                spread: 0.04 + rolled(field.seed + 405, one, 13) * 0.3,
                acrossFirst: rolled(field.seed + 406, one, 17) < 0.5,
            })));
    }
}

export class Brush {
    private constructor(readonly at: number, readonly settled: number, readonly held?: Dealt) { }

    static empty(): Brush { return new Brush(-1, -1, undefined); }

    get showing(): boolean { return this.at >= 0 && this.held !== undefined && this.settled !== this.at; }

    carry(at: number, first: boolean): Brush {
        return new Brush(at, this.settled, this.held ?? (first ? Stroke.dark() : Stroke.deal()));
    }

    away(): Brush { return new Brush(-1, this.settled, this.held); }

    used(at: number): Brush { return new Brush(at, at, Stroke.deal()); }

    preview(painting: Painting): Painting {
        return this.showing ? painting.with(new Stroke(this.at, this.held!)) : painting;
    }
}

export type Shade = { said: string; pair: string; angle: number; pitch: number };

export class Colouring {
    private readonly rested = new Map<number, Shade>();

    constructor(readonly field: Field, readonly wheel: Wheel, readonly offset: number) { }

    private seat(x: number, y: number, grain: number): number {
        return this.offset + x * 0.052 + y * 0.036 + (grain - 0.5) * 0.06;
    }

    rest(at: number): Shade {
        const held = this.rested.get(at);
        if (held !== undefined) return held;
        const { x, y } = this.field.seatOf(at);
        const grain = this.field.grain(x, y);
        const seat = this.seat(x, y, grain);
        const made: Shade = {
            angle: this.field.angle(x, y),
            pitch: this.field.pitch(x, y),
            said: this.wheel.at(seat, 0.66 + (grain - 0.5) * 0.07, 1),
            pair: this.wheel.at(seat + 0.08, 0.86 + (grain - 0.5) * 0.05, 0.62),
        };
        this.rested.set(at, made);

        return made;
    }

    struck(at: number, dealt: Dealt): Shade {
        const { x, y } = this.field.seatOf(at);
        const grain = this.field.grain(x, y);
        const lift = Math.max(0.42, Math.min(0.92, 0.66 + dealt.bright * 0.15));
        const seat = this.seat(x, y, grain) + dealt.turn;

        return {
            angle: this.field.angle(x, y),
            pitch: this.field.pitch(x, y),
            said: this.wheel.at(seat, lift + (grain - 0.5) * 0.07, 3.1),
            pair: this.wheel.at(seat + dealt.spread, lift + 0.2 + (grain - 0.5) * 0.05, 1.922),
        };
    }
}

export class Keep {
    constructor(readonly seed: number) { }

    private get key(): string { return `dougs-library/plate/${this.seed}`; }

    read(): Painting | undefined {
        try {
            const said = localStorage.getItem(this.key);
            if (said !== null) return Painting.of(said);

            return this.inherited();
        } catch {
            return undefined;
        }
    }

    write(painting: Painting): void {
        try { localStorage.setItem(this.key, painting.text()); } catch { }
    }

    private inherited(): Painting | undefined {
        try {
            const store = localStorage.getItem('$Chemistry.hydration');
            if (store === null) return undefined;
            const line = (JSON.parse(store) as Record<string, { line?: string }>)[`plate/${this.seed}`]?.line;

            return line === undefined || line === '' ? undefined : Painting.of(line);
        } catch {
            return undefined;
        }
    }
}

const Surface = styled.div`
    overflow: hidden;
    user-select: none;
    touch-action: none;
`;

const Cell = styled.div`
    background-color: var(--said);
    background-image: repeating-linear-gradient(
        var(--angle),
        var(--said) 0 var(--pitch),
        var(--pair) var(--pitch) calc(var(--pitch) * 2)
    );
    transition: background-color 300ms cubic-bezier(.3, .7, .3, 1);
    transition-delay: var(--wait);
`;

const Bare = styled.div`
    background-color: #ffffff;
`;

const shaded = (shade: Shade, step: number): CSSProperties => ({
    ['--said' as string]: shade.said,
    ['--pair' as string]: shade.pair,
    ['--angle' as string]: `${shade.angle}deg`,
    ['--pitch' as string]: `${shade.pitch}px`,
    ['--wait' as string]: `${step * 34}ms`,
} as CSSProperties);

export type PlateProps = {
    seed: number;
    tone: Tone;
    still?: boolean;
    arrived?: number;
    across?: number;
    said?: string;
};

export function Plate({ seed, tone, still = false, arrived = 0, across, said = 'A painting' }: PlateProps): ReactNode {
    const field = useMemo(() => new Field(seed), [seed]);
    const colouring = useMemo(() => new Colouring(field, new Wheel(), family[tone]), [field, tone]);
    const drawer = useMemo(() => new Keep(seed), [seed]);
    const opening = useMemo(() => Painting.opening(field, arrived), [field, arrived]);

    const [painting, setPainting] = useState<Painting>(opening);
    const [brush, setBrush] = useState<Brush>(Brush.empty);
    const [ready, setReady] = useState(still);

    useEffect(() => {
        if (still) return;
        setPainting(drawer.read() ?? opening);
        setReady(true);
    }, [still, drawer, opening]);

    const cellUnder = useCallback((clientX: number, clientY: number, box: DOMRect): number => {
        const span = field.span;
        const x = Math.floor(Math.max(0, Math.min(span - 0.001, ((clientX - box.left) / box.width) * span)));
        const y = Math.floor(Math.max(0, Math.min(span - 0.001, ((clientY - box.top) / box.height) * span)));

        return field.atOf({ x, y });
    }, [field]);

    const move = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
        const at = cellUnder(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect());
        setBrush(one => one.at === at ? one : one.carry(at, painting.empty));
    }, [cellUnder, painting.empty]);

    const leave = useCallback(() => setBrush(one => one.away()), []);

    const press = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const at = cellUnder(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect());
        if (event.detail >= 2) {
            const cleared = opening;
            setPainting(cleared);
            drawer.write(cleared);
            setBrush(Brush.empty());

            return;
        }
        setBrush(one => {
            if (one.held === undefined) return one;
            const kept = painting.with(new Stroke(at, one.held));
            setPainting(kept);
            drawer.write(kept);

            return one.used(at);
        });
    }, [cellUnder, drawer, opening, painting]);

    const shown = still ? painting : brush.preview(painting);
    const worked = useMemo(() => shown.worked(field), [shown, field]);
    const frame: CSSProperties = {
        display: 'grid',
        gridTemplateColumns: `repeat(${field.span}, 1fr)`,
        gridTemplateRows: `repeat(${field.span}, 1fr)`,
        aspectRatio: '1 / 1',
        width: across === undefined ? '100%' : `${across}px`,
        maxWidth: '100%',
        margin: '0 auto',
    };

    const cells: ReactNode[] = [];
    for (let at = 0; at < field.cells; at++) {
        if (!ready) { cells.push(<Bare key={at} />); continue; }
        const done = worked.get(at);
        cells.push(<Cell key={at} style={shaded(done === undefined ? colouring.rest(at) : colouring.struck(at, done.dealt), done?.step ?? 0)} />);
    }

    return (
        <Surface
            className="pd-image"
            style={frame}
            role="img"
            aria-label={said}
            onPointerMove={still ? undefined : move}
            onPointerEnter={still ? undefined : move}
            onPointerLeave={still ? undefined : leave}
            onClick={still ? undefined : press}
        >
            {cells}
        </Surface>
    );
}

export interface $Tiles$ extends $Illustration$ { }

export class $Tiles extends $Illustration implements $Tiles$ {
    $seed = 0;
    $tone: Tone = 'mine';
    $arrived = 0;
    $still = false;

    $Tiles(block: $Block) {
        super.$Illustration(this.addType(block, $TypeOfTiles));
    }

    override picture(): ReactNode {
        return (
            <Plate
                seed={this.$seed}
                tone={this.$tone}
                still={this.$still}
                arrived={this.$arrived}
                across={html.sized(this.$width)}
                said={this.caption === '' ? 'A painting' : this.caption}
            />
        );
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
