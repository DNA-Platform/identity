import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Author, $Chapter, $Cover, $Format, $Paragraph, $Subject, $Svg, $Synopsis, $Word, $Writing, AnnotationSpecification, ContainerProps, CoverSpecification, Reference as reference, Word as word, html, specify } from '@dna-platform/public';
import { Label as label } from './8-the-author-and-the-subject~code.tsx';

export const painted = (cover: $Chapter | undefined, node: ReactNode, key?: number): ReactNode => {
    const Painted = cover?.annotations.expressed($Scheme)?.painted;
    if (Painted === undefined) return node;
    return (
        <Painted key={key}>
            {node}
        </Painted>
    );
};

export class $BookshelfCover extends $Cover {
    override specification = new BookshelfCoverSpecification();
    get name(): string { return this.chapter?.title?.name ?? ''; }
    get author(): string { return this.chapter?.annotations.expressed($Author)?.name ?? ''; }
    get illustration(): $Paragraph | undefined {
        return this.chapter?.text.find($Paragraph).find(paragraph => paragraph.is($Illustration));
    }
    get drawing(): string {
        const svg = this.illustration?.text.find($Svg)[0];
        return svg === undefined ? '' : html.copy(svg.text).trim();
    }
    get scheme(): $Scheme | undefined { return this.chapter?.annotations.expressed($Scheme); }
    get window(): $Window | undefined { return this.chapter?.annotations.expressed($Window); }
}

export class $Illustration extends $Annotation {
    specification = new IllustrationSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-illustration');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Scheme extends $Format {
    specification = new SchemeSpecification();
    $ground = '';
    $band = '';
    $bandInk = '';
    $foot = '';
    $footInk = '';
    $ink = '';
    style: ElementType = selection.div.attrs({ className: 'pd-scheme' })<{ $scheme: string }>`
        ${props => props.$scheme}
    `;
    protected _painted!: ElementType;
    get colours(): string[] { return [this.$ground, this.$band, this.$bandInk, this.$foot, this.$footInk, this.$ink]; }
    get declarations(): string {
        return `--ground: ${this.$ground}; --band: ${this.$band}; --band-ink: ${this.$bandInk}; --foot: ${this.$foot}; --foot-ink: ${this.$footInk}; --ink: ${this.$ink};`;
    }
    get painted(): ElementType { return this._painted; }

    $Scheme(...chemicals: $Chemical[]) {
        this.$Format(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $scheme={this.declarations}
                {...props}
            />
        );
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-scheme');
        writing.containers.add(this, this._painted);
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
        writing.containers.revert(this);
    }
}

export class $Window extends $Annotation {
    specification = new WindowSpecification();
    $x = '';
    $y = '';
    get declarations(): string { return `--window-x: ${this.$x}px; --window-y: ${this.$y}px;`; }
}

export class $Volume extends $Annotation {
    specification = new VolumeSpecification();
    protected _cover?: $Chapter;
    get cover(): $Chapter | undefined { return this._cover; }
    get jacket(): $BookshelfCover | undefined { return this._cover?.annotations.expressed($Cover) as $BookshelfCover | undefined; }

    $Volume(...chemicals: $Chemical[]) {
        this._cover = chemicals.find((chemical): chemical is $Chapter => chemical instanceof $Chapter);
        this.$Annotation(...chemicals.filter(chemical => chemical !== this._cover));
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-volume');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Jacket extends $Paragraph {
    $cover?: $Chapter;
    protected _painted!: ElementType;
    get cover(): $BookshelfCover | undefined { return this.$cover?.annotations.expressed($Cover) as $BookshelfCover | undefined; }

    $Jacket(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this._painted = (props: { children?: ReactNode }) => {
            const Painted = this.cover?.scheme?.painted;
            return Painted === undefined ? <div {...props} /> : <Painted {...props} />;
        };
        this.containers.add(this, this._painted);
    }

    override write(): ReactNode {
        const cover = this.cover;
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Said = $(label);
        return (
            <>
                <Word>
                    {cover.name}
                </Word>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: cover.drawing }}
                />
                <Word>
                    <Said />
                    {cover.author}
                </Word>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-jacket');
    }
}

export class $Logo extends $Paragraph {
    $cover?: $Chapter;
    $subject?: $Chapter;
    unfolded = false;
    get filedElsewhere(): boolean { return this.$subject !== undefined && this.$subject !== this.$cover; }

    override container(props: ContainerProps): ReactNode {
        return super.container({
            onMouseOver: event => { if (event.target instanceof Element && event.target.closest('.pd-filed') !== null) this.unfold(); },
            onMouseLeave: () => this.fold(),
            ...props,
        });
    }

    unfold(): void { this.unfolded = true; }
    fold(): void { this.unfolded = false; }

    override write(): ReactNode {
        const cover = this.$cover;
        const subject = this.$subject;
        if (cover === undefined) return undefined;
        return (
            <>
                {this.filedElsewhere ? painted(subject, (
                    <span className="pd-filed">
                        {this.mark(subject!)}
                    </span>
                )) : undefined}
                {painted(cover, (
                    <span className="pd-own">
                        {this.mark(cover)}
                    </span>
                ))}
                <span className="pd-names">
                    {painted(cover, (
                        <span className="pd-name">
                            {this.name(cover)}
                        </span>
                    ))}
                    {this.filedElsewhere ? painted(subject, (
                        <span className="pd-name pd-under">
                            {this.name(subject!)}
                        </span>
                    )) : undefined}
                </span>
            </>
        );
    }

    mark(cover: $Chapter): ReactNode {
        const Mark = $(mark);
        const Reference = $(reference);
        return (
            <Mark cover={cover}>
                <Reference>{cover.mention!.identifier}</Reference>
            </Mark>
        );
    }

    name(cover: $Chapter): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return (
            <Word>
                <Reference>{cover.mention!.identifier}</Reference>
                {cover.title!.name}
            </Word>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-logo');
        const Unfolded = $(unfolded);
        this.annotations.add(this,
            <Unfolded />
        );
    }
}

export class $Unfolded extends $Annotation {
    specification = new UnfoldedSpecification();

    override defines(writing: $Writing): void {
        if ((writing as $Logo).unfolded) writing.classes.add(this, 'pa-unfolded');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class UnfoldedSpecification extends AnnotationSpecification {
    @specify('unfolded is said of a logo')
    $saidOfALogo(writing: $Writing): void {
        $check(writing instanceof $Logo, 'unfolded is said of a logo, and this is not one');
    }
}

export class $Mark extends $Word {
    $cover?: $Chapter;
    style: ElementType = selection.span<{ $vars: string }>`
        ${props => props.$vars}
    `;
    protected _painted!: ElementType;
    get cover(): $BookshelfCover | undefined { return this.$cover?.annotations.expressed($Cover) as $BookshelfCover | undefined; }

    $Mark(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        const Painted = this.style;
        this._painted = (props: { children?: ReactNode }) => (
            <Painted
                $vars={`${this.cover?.scheme?.declarations ?? ''} ${this.cover?.window?.declarations ?? ''}`}
                {...props}
            />
        );
        this.containers.add(this, this._painted);
    }

    override write(): ReactNode {
        return (
            <span
                className="pd-drawing"
                dangerouslySetInnerHTML={{ __html: this.cover?.drawing ?? '' }}
            />
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-mark');
    }
}

export class BookshelfCoverSpecification extends CoverSpecification {
    @specify('a bookshelf cover carries its scheme')
    $carriesItsScheme(writing: $Writing): void {
        $check(writing.is($Scheme), 'a bookshelf cover carries its scheme, and this one carries none');
    }

    @specify('a bookshelf cover carries its window')
    $carriesItsWindow(writing: $Writing): void {
        $check(writing.is($Window), 'a bookshelf cover carries its window, and this one carries none');
    }

    @specify('a bookshelf cover carries its illustration')
    $carriesItsIllustration(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.text.find($Paragraph).some(paragraph => paragraph.is($Illustration)),
            'a bookshelf cover carries its illustration, and this one carries none');
    }
}

export class IllustrationSpecification extends AnnotationSpecification {
    @specify('an illustration is said of a paragraph of a cover that holds one drawing')
    $saidOfADrawing(writing: $Writing): void {
        $check(writing instanceof $Paragraph && writing.chapter?.is($Cover) === true && writing.text.find($Svg).length === 1,
            'an illustration is said of a paragraph of a cover that holds one drawing, and this is not one');
    }
}

export class SchemeSpecification extends AnnotationSpecification {
    @specify('a scheme is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a scheme is said of a cover, and this is not one');
    }

    @specify('a scheme is given its six colours')
    $givenItsColours(writing: $Writing): void {
        const colours = writing.annotations.expressed($Scheme)?.colours ?? [];
        $check(colours.every(colour => /^#[0-9a-f]{6}$/iu.test(colour)),
            'a scheme is given its six colours as six hex digits each — the ground, the band and its ink, the foot and its ink, and the ink of the drawing — and this one was given something else');
    }
}

export class WindowSpecification extends AnnotationSpecification {
    @specify('a window is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'a window is said of a cover, and this is not one');
    }

    @specify('a window is given where it stands on the drawing')
    $givenItsPlace(writing: $Writing): void {
        const window = writing.annotations.expressed($Window);
        $check(/^-?\d+$/u.test(window?.$x ?? '') && /^-?\d+$/u.test(window?.$y ?? ''),
            'a window is given where it stands on the drawing, two whole numbers, and this one was given something else');
    }
}

export class VolumeSpecification extends AnnotationSpecification {
    @specify('a volume is said of a chapter that stands for another book')
    $saidOfAChapterStandingForABook(writing: $Writing): void {
        $check(writing instanceof $Chapter && (writing.is($Synopsis) || writing.is($Cover)),
            'a volume is said of a chapter that stands for another book, a synopsis of it or a cover filed under it, and this is neither');
    }

    @specify('a volume holds the cover of a book its chapter stands for')
    $holdsTheCover(writing: $Writing): void {
        const stoodFor = [
            writing.annotations.expressed($Synopsis)?.means?.identifier,
            writing.annotations.expressed($Subject)?.means?.identifier,
            writing.annotations.expressed($Author)?.means?.identifier,
        ];
        $check(writing.annotations.find($Volume).every(volume => volume.cover?.is($Cover) === true && stoodFor.includes(volume.cover.mention?.identifier)),
            'a volume holds the cover of a book its chapter stands for, the book a synopsis is of or the subject or author a cover is filed under, and one here holds something else');
    }
}

export const BookshelfCover = $($BookshelfCover);
export const Illustration = $($Illustration);
export const Scheme = $($Scheme);
export const Window = $($Window);
export const Volume = $($Volume);
export const Jacket = $($Jacket);
export const Logo = $($Logo);
export const Unfolded = $($Unfolded);
export const Mark = $($Mark);
const mark = Mark;
const unfolded = Unfolded;
