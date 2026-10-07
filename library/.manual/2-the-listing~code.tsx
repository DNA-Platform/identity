import { ElementType, ReactNode } from 'react';
import { $, $check, $Chemical, selection } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Chapter, $Paragraph, $Writing, AnnotationSpecification, Code as code, Given, Word as word, html, specify } from '@dna-platform/public';
import type { $Manual } from './10-the-manual~code.tsx';
import { $Tab } from './9-the-switch~code.tsx';
import { $Kind } from './o1-the-key~code.tsx';

export const languages: Record<string, string> = { tsx: 'typescript', ts: 'typescript', mjs: 'javascript', js: 'javascript', css: 'css', html: 'xml', svg: 'xml', json: 'json', md: 'markdown' };

const fileMark = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5 3.5 8 6 11.5M10 4.5 12.5 8 10 11.5"/></svg>';

export const linesOf = (chapter: $Chapter | undefined, name: string): string[] => {
    const append = chapter?.annotations.find($Append).find(each => `${each.$identifier}${each.$type}` === name);
    return append === undefined ? [] : html.copy(append.text).split('\n');
};

export class $Listing extends $Paragraph {
    $identifier = '';
    $type = '';
    $reading?: Given<$Annotation>;
    $among: Given<$Annotation>[] = [];
    protected _layer!: ElementType;
    get name(): string { return `${this.$identifier}${this.$type}`; }
    get language(): string { return languages[this.$type.replace(/^\./u, '')] ?? ''; }

    $Listing(...chemicals: $Chemical[]) {
        this.$Writing(...chemicals);
        this._layer = (props: { children?: ReactNode }) => (
            <div
                onClick={() => this.press()}
                {...props}
            />
        );
        this.containers.add(this, this._layer);
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
                    identifier={this.$identifier}
                    type={this.$type}
                    language={this.language}
                    numbered
                />
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-listing');
    }
}

export class $Opened extends $Annotation {
    specification = new OpenedSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-opened');
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
    $name = '';
    $chapter?: $Chapter;
    $skeleton = false;
    style: ElementType = selection.button<{ $colour: string }>`
        --colour: ${props => props.$colour};
    `;
    override get on(): boolean {
        const book = this.book as $Manual;
        return this.$chapter !== undefined && this.$chapter === book.open && book.fileOf(this.$chapter) === this.$name;
    }
    get colour(): string { return this.$chapter?.annotations.expressed($Kind)?.colour ?? ''; }
    get lines(): string[] { return linesOf(this.$chapter, this.$name); }

    $File(...chemicals: $Chemical[]) {
        this.$Switch(...chemicals);
        const Button = this.style;
        const button = this._button;
        this._button = (props: { children?: ReactNode }) => (
            <Button
                type="button"
                $colour={this.colour}
                aria-pressed={this.on}
                onClick={() => this.press()}
                {...props}
            />
        );
        this.containers.replace(this, button, this._button);
    }

    override press(): void {
        (this.book as $Manual).show(this.$chapter!, this.$name);
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
                    {this.$name}
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
