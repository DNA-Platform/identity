import { ReactNode } from 'react';
import { $, $Block } from '@dna-platform/chemistry';
import { $Annotation, $Figure, $Paragraph, $Writing } from '@dna-platform/public';

type Shown = { number: string; named: string; draws: string; says: string; sketch: string };

const desk = { wide: 1280, tall: 800 };
const phone = { wide: 390, tall: 844 };
const bezel = 20;

export class $Concepts extends $Annotation {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-concepts');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Asked extends $Annotation {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-asked');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Answered extends $Annotation {
    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-answered');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Viewer extends $Paragraph {
    static pane(): HTMLElement | null {
        return document.querySelector<HTMLElement>('.pd-viewer');
    }

    static cards(card: HTMLElement | null): HTMLElement[] {
        return [...card?.closest('.pa-concepts')?.querySelectorAll<HTMLElement>('.pd-concept-opens') ?? []];
    }

    static shown(): HTMLElement | null {
        return document.querySelector<HTMLElement>('.pd-concept-opens[data-shown]');
    }

    static shows(concept: Shown, card: HTMLElement): void {
        const pane = $Viewer.pane();
        if (pane === null) return;
        const cards = $Viewer.cards(card);
        const at = cards.indexOf(card);
        $Viewer.shown()?.removeAttribute('data-shown');
        card.dataset.shown = 'yes';
        const says = (part: string, text: string): void => { const held = pane.querySelector(part); if (held !== null) held.textContent = text; };
        says('.pd-viewer-number', concept.number);
        says('.pd-viewer-name', concept.named);
        says('.pd-viewer-after', concept.draws === '' ? '' : `after ${concept.draws}`);
        says('.pd-viewer-idea', concept.says);
        says('.pd-viewer-count', `${at + 1} of ${cards.length}`);
        for (const frame of pane.querySelectorAll('iframe')) frame.srcdoc = concept.sketch;
        pane.dataset.at = String(at);
        if (pane.dataset.device === undefined) pane.dataset.device = 'both';
        $Viewer.listens(pane);
        if (document.fullscreenElement === pane) $Viewer.fits();
        else void pane.requestFullscreen().then(() => $Viewer.fits());
    }

    static fits(): void {
        const pane = $Viewer.pane();
        const stage = pane?.querySelector<HTMLElement>('.pd-viewer-stage');
        if (pane == null || stage == null || document.fullscreenElement !== pane) return;
        const style = getComputedStyle(stage);
        const wide = stage.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - bezel;
        const tall = stage.clientHeight - parseFloat(style.paddingTop) - parseFloat(style.paddingBottom) - bezel;
        const across = pane.dataset.device === 'both' ? (wide - parseFloat(style.columnGap)) / (desk.wide + phone.wide) : wide / phone.wide;
        pane.style.setProperty('--scale', String(Math.min(1, across, tall / phone.tall)));
    }

    static moves(by: number): void {
        const pane = $Viewer.pane();
        const cards = $Viewer.cards($Viewer.shown());
        if (pane === null || cards.length === 0) return;
        cards[(Number(pane.dataset.at ?? 0) + by + cards.length) % cards.length].click();
    }

    static device(device: string): void {
        const pane = $Viewer.pane();
        if (pane === null) return;
        pane.dataset.device = device;
        $Viewer.fits();
    }

    static closes(): void {
        if (document.fullscreenElement !== null) void document.exitFullscreen();
    }

    static listens(pane: HTMLElement): void {
        if (pane.dataset.listening === 'yes') return;
        pane.dataset.listening = 'yes';
        window.addEventListener('resize', () => $Viewer.fits());
        document.addEventListener('fullscreenchange', () => $Viewer.fits());
        document.addEventListener('keydown', event => {
            if (document.fullscreenElement !== pane) return;
            if (event.key === 'ArrowRight') $Viewer.moves(1);
            if (event.key === 'ArrowLeft') $Viewer.moves(-1);
            if (event.key === '1') $Viewer.device('both');
            if (event.key === '2') $Viewer.device('desk');
            if (event.key === '3') $Viewer.device('phone');
        });
    }

    override write(): ReactNode {
        return (
            <>
                <span className="pd-viewer-bar">
                    <span className="pd-viewer-what">
                        <span className="pd-viewer-number" />
                        <span className="pd-viewer-name" />
                        <span className="pd-viewer-after" />
                        <span className="pd-viewer-idea" />
                    </span>
                    <span className="pd-viewer-devices">
                        <button
                            type="button"
                            data-shows="both"
                            onClick={() => $Viewer.device('both')}
                        >
                            desk and phone
                        </button>
                        <button
                            type="button"
                            data-shows="desk"
                            onClick={() => $Viewer.device('desk')}
                        >
                            desk
                        </button>
                        <button
                            type="button"
                            data-shows="phone"
                            onClick={() => $Viewer.device('phone')}
                        >
                            phone
                        </button>
                    </span>
                    <span className="pd-viewer-moves">
                        <button
                            type="button"
                            onClick={() => $Viewer.moves(-1)}
                        >
                            ‹ previous
                        </button>
                        <span className="pd-viewer-count" />
                        <button
                            type="button"
                            onClick={() => $Viewer.moves(1)}
                        >
                            next ›
                        </button>
                        <button
                            type="button"
                            className="pd-viewer-closes"
                            onClick={() => $Viewer.closes()}
                        >
                            close
                        </button>
                    </span>
                </span>
                <span className="pd-viewer-stage">
                    <span className="pd-viewer-desk">
                        <iframe title="at a desk" />
                    </span>
                    <span className="pd-viewer-phone">
                        <iframe title="on a phone" />
                    </span>
                </span>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-viewer');
    }
}

export class $Concept extends $Figure {
    get parts(): string[] {
        return [...this.text].filter((chemical): chemical is $Block => chemical instanceof $Block)
            .flatMap(block => block.elements).map(String).filter(part => part.trim() !== '');
    }

    override write(): ReactNode {
        const [desk, phone, sketch = ''] = this.parts;
        const named = /<title>([^<]*)<\/title>/u.exec(sketch)?.[1] ?? '';
        const shown: Shown = { number: this.says(sketch, 'number'), named, draws: this.says(sketch, 'after'), says: this.says(sketch, 'idea'), sketch };
        const state = this.says(sketch, 'state');
        const said = this.says(sketch, 'said');
        const marked = state !== '';
        const answered = said !== '';
        return (
            <>
                <button
                    type="button"
                    className="pd-concept-opens"
                    title="open, at a desk and on a phone"
                    onClick={event => $Viewer.shows(shown, event.currentTarget)}
                >
                    <img
                        className="pd-concept-desk"
                        src={desk}
                        alt={`${shown.named}, at a desk`}
                        loading="lazy"
                    />
                    <img
                        className="pd-concept-phone"
                        src={phone}
                        alt={`${shown.named}, on a phone`}
                        loading="lazy"
                    />
                    <span className="pd-concept-number">
                        {shown.number}
                    </span>
                </button>
                <span className="pd-concept-name">
                    {shown.named}
                </span>
                {marked && (
                    <span className="pd-concept-state">
                        {state}
                    </span>
                )}
                <span className="pd-concept-says">
                    {shown.says}
                </span>
                {answered && (
                    <span className="pd-concept-said">
                        {said}
                    </span>
                )}
            </>
        );
    }

    protected says(sketch: string, name: string): string {
        return new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, 'u').exec(sketch)?.[1] ?? '';
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-concept');
    }
}

export const Concepts = $($Concepts);
export const Asked = $($Asked);
export const Answered = $($Answered);
export const Viewer = $($Viewer);
export const Concept = $($Concept);
