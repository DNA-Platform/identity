import { ReactElement, ReactNode } from 'react';
import { $, $check, inert } from '@dna-platform/chemistry';
import { $Annotation, $Append, $Book, $Chapter, $Composition, $Paragraph, $Part, $Section, $TableOfContents, BookSpecification, Given, Reference as reference, Theme, reflection, specify } from '@dna-platform/public';
import { LibraryBookTheme } from './3-the-theme~code.tsx';
import { Byline as byline } from './8-the-author-and-the-subject~code.tsx';
import { Layout as layout } from './12-the-layout~code.tsx';
import { $Manual } from './10-the-manual~code.tsx';
import { $Appendix, $TreeFolder, TreeFolder as treeFolder, TreeRoot as treeRoot, contentOf } from './14-the-entry~code.tsx';
import { Dark as dark, Light as light, Tone as tone, WhiteOverBlack as whiteOverBlack } from './16-the-tone~code.tsx';
import { $Logo, $Volume, Logo as logo, Mark as mark, painted } from './19-the-cover~code.tsx';
import { Turn as turn } from './13-the-turn~code.tsx';

export class $LibraryBook extends $Book {
    specification = new LibraryBookSpecification();
    protected _logo?: $Logo;
    @inert() protected _chapterByPlace?: Map<string, $Chapter>;
    get chapters(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => [...chapter.classes].includes('pd-canonical'));
    }
    get laidOutChapters(): ($Chapter | undefined)[] {
        return [this.cover, this.synopsis, this.table, ...this.chapters];
    }
    get pages(): $Chapter[] {
        return [this.synopsis, ...this.chapters].filter((chapter): chapter is $Chapter => chapter !== undefined);
    }
    get body(): $Chapter[] {
        const appendix = this.appendix;
        return this.chapters.filter(chapter => !appendix.includes(chapter));
    }
    get appendix(): $Chapter[] {
        const table = this.table;
        if (table === undefined) return [];
        const places = table.text.find($Section).filter(section => section.is($Appendix))
            .flatMap(section => section.text.find($Paragraph).map(paragraph => contentOf(paragraph)?.identifier));
        return this.chapters.filter(chapter => places.includes(chapter.mention?.identifier ?? ''));
    }
    get open(): $Chapter | undefined {
        return this.$bookmark === undefined ? undefined : this.chapterAt(this.$bookmark);
    }
    get tones(): Given<$Annotation>[] {
        return [dark, light, whiteOverBlack];
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-library">
                    {this.library()}
                </div>
                <div className="pd-me">
                    {this.me()}
                </div>
                <div className="pd-holds">
                    {this.holds()}
                </div>
                <div className="pd-head">
                    {this.head()}
                </div>
                <div className="pd-pages">
                    {this.aboveThePages()}
                    {this.pages.map((chapter, index) => {
                        const Chapter = $(chapter);
                        return (
                            <Chapter key={index} />
                        );
                    })}
                    {this.belowThePages()}
                </div>
            </>
        );
    }

    library(): ReactNode {
        if (this._logo === undefined) return undefined;
        const Logo = $(this._logo);
        return (
            <Logo />
        );
    }

    me(): ReactNode {
        const Mark = $(mark);
        const Reference = $(reference);
        const author = this.coverOf(this.author?.means?.identifier);
        return (
            <>
                {this.byline()}
                {author === undefined ? undefined : this.painted(author, (
                    <Mark cover={author}>
                        <Reference>{author.mention!.identifier}</Reference>
                    </Mark>
                ))}
            </>
        );
    }

    painted(cover: $Chapter | undefined, node: ReactNode, key?: number): ReactNode {
        return painted(cover, node, key);
    }

    holds(): ReactNode {
        const Table = $(this.table!);
        return (
            <Table />
        );
    }

    head(): ReactNode {
        const Cover = $(this.cover!);
        return (
            <>
                <Cover />
                <div className="pd-switches">
                    {this.switches()}
                </div>
            </>
        );
    }

    aboveThePages(): ReactNode {
        return undefined;
    }

    belowThePages(): ReactNode {
        return undefined;
    }

    chapterAt(place: string): $Chapter | undefined {
        return (this._chapterByPlace ?? this.chapterByPlace()).get(place);
    }

    chapterByPlace(): Map<string, $Chapter> {
        const chapterByPlace = new Map<string, $Chapter>();
        for (const chapter of this.chapters)
            for (const section of this.sections(chapter))
                if (section.mention !== undefined && !chapterByPlace.has(section.mention.identifier)) chapterByPlace.set(section.mention.identifier, chapter);
        for (const chapter of this.chapters)
            if (chapter.mention !== undefined) chapterByPlace.set(chapter.mention.identifier, chapter);
        return chapterByPlace;
    }

    coverOf(identifier: string | undefined): $Chapter | undefined {
        if (identifier === undefined) return undefined;
        if (this.means?.identifier === identifier) return this.cover;
        return this.cover?.annotations.find($Volume).map(volume => volume.cover).find(cover => cover?.mention?.identifier === identifier);
    }

    byline(): ReactNode {
        const Byline = $(byline);
        return (
            <Byline chapter={this.cover} />
        );
    }

    root(): ReactElement | undefined {
        const TreeRoot = $(treeRoot);
        return (
            <TreeRoot cover={this.cover} />
        );
    }

    switches(): ReactNode {
        return undefined;
    }

    sections(composition: $Composition): $Section[] {
        return composition.text.find($Section).flatMap(section => [section, ...this.sections(section)]);
    }

    sectionOf(part: $Part): $Section | undefined {
        const table = this.table;
        return table === undefined ? undefined : this.sections(table).find(section => section.canonical?.name === part.name);
    }

    protected override turn(): void {
        if (this.bookmark === this.cover) return;
        super.turn();
    }

    protected override $Define(): void {
        super.$Define();
        const Layout = $(layout);
        const Tone = $(tone);
        this.annotations.add(this,
            <Layout />,
            <Tone />
        );
    }

    protected override $Bound(): void {
        this._chapterByPlace = this.chapterByPlace();
        const TreeFolder = $(treeFolder);
        const table = this.table?.annotations.expressed($TableOfContents);
        for (const part of table?.parts ?? []) {
            const section = this.sectionOf(part);
            if (section === undefined || section.is($TreeFolder) || !part.chapters.some(chapter => chapter.is($Manual))) continue;
            section.annotations.add(this,
                <TreeFolder />
            );
        }
        const root = this.root();
        if (root !== undefined) this.table?.text.add(this, root);
        const Logo = $(logo);
        this._logo = reflection.chemical<$Logo>((
            <Logo
                cover={this.cover}
                subject={this.coverOf(this.subject?.means?.identifier)}
            />
        ), this);
        const Turn = $(turn);
        for (const chapter of this.body)
            chapter.text.add(this,
                <Turn />
            );
        super.$Bound();
    }
}

export class LibraryBookSpecification extends BookSpecification {
    @specify('a book of this library holds only chapters')
    $holdsOnlyChapters(book: $LibraryBook): void {
        $check([...book.text].every(chemical => chemical instanceof $Chapter),
            'a book of this library holds only chapters, and this one holds something else');
    }

    @specify('a book of this library has a place for every chapter it holds')
    $placesEveryChapter(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.laidOutChapters.includes(chapter)),
            'a book of this library has a place for every chapter it holds, and this one holds a chapter it places nowhere');
    }

    @specify('only an ordinary chapter files a file')
    $onlyAChapterAppends(book: $LibraryBook): void {
        $check(book.text.find($Chapter).every(chapter => book.chapters.includes(chapter) || !chapter.is($Append)),
            'only an ordinary chapter files a file, and here a cover, a synopsis or a table of contents files one');
    }

    @specify('a part read as a manual is listed under a section headed with its name')
    $listsEachManualPart(book: $LibraryBook): void {
        const parts = book.table?.annotations.expressed($TableOfContents)?.parts ?? [];
        const unlisted = parts.find(part => part.chapters.some(chapter => chapter.is($Manual)) && book.sectionOf(part) === undefined);
        $check(unlisted === undefined,
            `a part read as a manual is listed under a section headed with its name, and "${unlisted?.name}" has none`);
    }
}

export const LibraryBook = $($LibraryBook);
$(LibraryBook, Theme)(LibraryBookTheme);
$(LibraryBook, tone)(dark);
