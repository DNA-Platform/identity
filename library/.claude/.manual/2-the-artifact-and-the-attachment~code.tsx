import { ReactNode } from 'react';
import { $, $check, $Chemical } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Code, $Writing, AnnotationSpecification, html, identifier, specify } from '@dna-platform/public';
import type { $LibraryBook } from '../../.manual/.book';

export type Showing = { $shown: $Artifact | $Attachment | undefined };

const documentGlyph = '<svg viewBox="0 0 24 24"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>';
const codeGlyph = '<svg viewBox="0 0 24 24"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13 5l-2 14"/></svg>';

export const showingBook = (writing: $Writing): Showing | undefined => {
    const book = writing.book as unknown as Partial<Showing> | undefined;
    return book !== undefined && '$shown' in book ? (book as Showing) : undefined;
};

export class $Version extends $Annotation {
    specification = new VersionSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-version');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class VersionSpecification extends AnnotationSpecification {
    @specify('a version is said of a chapter')
    $saidOfAChapter(writing: $Writing): void {
        $check(writing instanceof $Chapter, 'a version is said of a chapter, and this is not one');
    }
}

export class $Artifact extends $Code {
    $artifact: string | undefined = undefined;
    $place: string | undefined = undefined;
    get version(): $Chapter | undefined {
        const place = this.$place;
        if (place === undefined) return undefined;
        return (this.book as $LibraryBook).chapters.find(chapter => identifier.slug(chapter.title?.name ?? '') === place);
    }
    get versionName(): string { return this.version?.title?.name ?? ''; }
    get name(): string { return this.versionName.replace(/ v\d+(?:-\d+)?$/u, '') || this.$identifier; }
    get number(): string { return / v(\d+)(?:-\d+)?$/u.exec(this.versionName)?.[1] ?? '1'; }
    get kind(): string {
        const type = this.$type.replace(/^\./u, '');
        return type === 'md' || type === 'txt' || type === '' ? 'document' : type === 'html' ? 'page' : 'code';
    }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

    $Artifact(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        const glyph = { __html: this.kind === 'document' ? documentGlyph : codeGlyph };
        return (
            <>
                <button
                    type="button"
                    className="pd-card"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span
                        className="pd-card-mark"
                        dangerouslySetInnerHTML={glyph}
                    />
                    <span className="pd-card-words">
                        <b>
                            {this.name}
                        </b>
                        <small>
                            {`Click to open ${this.kind} · v${this.number}`}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-artifact');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export class $Attachment extends $Code {
    get sentence(): string { return html.copy(this.text); }
    get fileName(): string { return /“([^”]+)”/u.exec(this.sentence)?.[1] ?? 'a file'; }
    get extension(): string { return (this.fileName.split('.').pop() ?? 'file').toUpperCase().slice(0, 4); }
    get lineCount(): number { return this.names ? this.contents.split('\n').length : 0; }
    get shown(): boolean { return showingBook(this)?.$shown === this; }

    $Attachment(...chemicals: $Chemical[]) {
        this.$Code(...chemicals);
        this.containers.replace(this, 'pre', 'figure');
    }

    override write(): ReactNode {
        const words = [...this.text].map((chemical, index) => {
            const Word = $(chemical);
            return (
                <Word key={index} />
            );
        });
        return (
            <>
                <button
                    type="button"
                    className="pd-chip"
                    aria-pressed={this.shown}
                    onClick={() => this.press()}
                >
                    <span className="pd-chip-mark">
                        {this.extension}
                    </span>
                    <span className="pd-chip-words">
                        <b>
                            {this.fileName}
                        </b>
                        <small>
                            {this.names ? `${this.lineCount} lines` : 'not carried by the export'}
                        </small>
                    </span>
                </button>
                <figcaption>
                    {words}
                </figcaption>
            </>
        );
    }

    press(): void {
        const book = showingBook(this);
        if (book === undefined) return;
        book.$shown = book.$shown === this ? undefined : this;
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-attachment');
        if (this.shown) this.classes.add(this, 'pa-open');
    }
}

export const Version = $($Version);
export const Artifact = $($Artifact);
export const Attachment = $($Attachment);
