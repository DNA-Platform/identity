import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Paragraph, $Writing, AnnotationSpecification, Code as code, ContainerProps, Given, Word as word, html, specify } from '@dna-platform/public';
import type { $LibraryBook } from './1-the-book~code.tsx';
import { $Tab } from './9-the-switch~code.tsx';
import { $Manual } from './10-the-manual~code.tsx';
import { $Keyed } from './o1-the-key~code.tsx';

export const languages: Record<string, string> = { tsx: 'typescript', ts: 'typescript', mjs: 'javascript', js: 'javascript', css: 'css', html: 'xml', svg: 'xml', json: 'json', md: 'markdown' };

const fileMark = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>';

export const nameOf = (append: $Append): string => `${append.$identifier}${append.$type}`;

export const linesOf = (append: $Append | undefined): string[] =>
    append === undefined ? [] : html.copy(append.text).split('\n');

export const manualOf = (append: $Append | undefined): $Manual | undefined =>
    append?.chapter?.annotations.expressed($Manual);

export class $Listing extends $Paragraph {
    $append?: $Append;
    $reading?: Given<$Annotation>;
    $among: Given<$Annotation>[] = [];
    get name(): string { return this.$append === undefined ? '' : nameOf(this.$append); }
    get language(): string { return languages[(this.$append?.$type ?? '').replace(/^\./u, '')] ?? ''; }
    get manual(): $Manual | undefined { return manualOf(this.$append); }
    override get chapter(): $Chapter | undefined { return this.$append?.chapter ?? super.chapter; }

    $Listing(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this.containers.replace(this, 'span', 'div');
    }

    override container(props: ContainerProps): ReactNode {
        return super.container({ onClick: () => this.press(), ...props });
    }

    press(): void {
        if (this.$reading === undefined) return;
        const book = this.book!;
        const annotations = [book.$is].flat().filter(annotation => !this.$among.includes(annotation));
        book.$is = [this.$reading, ...annotations];
    }

    override write(): ReactNode {
        const Word = $(word);
        const Code = $(code);
        return (
            <>
                <Word>
                    {this.name}
                </Word>
                <Code
                    identifier={this.$append?.$identifier}
                    type={this.$append?.$type}
                    language={this.language}
                    numbered
                />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-listing');
        const Given = $(opened);
        this.annotations.add(this,
            <Given />
        );
    }
}

export class $Opened extends $Annotation {
    specification = new OpenedSpecification();

    override defines(writing: $Writing): void {
        const listing = writing as $Listing;
        if (listing.$append !== undefined && listing.manual?.shown === listing.$append) writing.classes.add(this, 'pa-opened');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class OpenedSpecification extends AnnotationSpecification {
    @specify('opened is said of a listing')
    $saidOfAListing(writing: $Writing): void {
        $check(writing instanceof $Listing, 'opened is said of a listing, and this is not one');
    }
}

export class $File extends $Tab {
    $append?: $Append;
    $skeleton = false;
    style: ElementType = selection.button<{ $colour: string }>`
        --colour: ${props => props.$colour};
    `;
    override get on(): boolean {
        const chapter = this.$append?.chapter;
        return chapter !== undefined && chapter === (this.book as $LibraryBook).open && this.manual?.shown === this.$append;
    }
    get name(): string { return this.$append === undefined ? '' : nameOf(this.$append); }
    get manual(): $Manual | undefined { return manualOf(this.$append); }
    get colour(): string { return this.$append?.chapter?.annotations.expressed($Keyed)?.colour ?? ''; }
    get lines(): string[] { return linesOf(this.$append); }
    override get chapter(): $Chapter | undefined { return this.$append?.chapter ?? super.chapter; }

    $File(...chemicals: $Chemical[]) {
        this.$Switch(...chemicals);
        this.containers.replace(this, 'button', this.style);
    }

    override container(props: ContainerProps): ReactNode {
        return super.container({ $colour: this.colour, ...props });
    }

    override press(): void {
        const manual = this.manual;
        if (manual !== undefined) manual.$shown = this.$append;
        if (this.$of !== undefined) super.press();
    }

    override write(): ReactNode {
        return (
            <>
                <span
                    className="pd-drawing"
                    dangerouslySetInnerHTML={{ __html: fileMark }}
                />
                <span className="pd-file-name">
                    {this.name}
                </span>
                {this.$skeleton ? (
                    <span className="pd-skeleton">
                        {this.lines.slice(0, 14).map((line, index) => (
                            <i
                                key={index}
                                style={{ width: `${Math.max(12, Math.min(100, line.length * 2.2))}%` }}
                            />
                        ))}
                    </span>
                ) : undefined}
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-file');
    }
}

export const Listing = $($Listing);
export const Opened = $($Opened);
export const File = $($File);
const opened = Opened;
