import { ReactNode } from 'react';
import { $ } from '@dna-platform/chemistry';
import { $Author, $Chapter, $Referent, $Subject, $Synopsis, Reference as reference, Self, Theme, Word as word } from '@dna-platform/public';
import { $LibraryBook, $Scheme, $Volume, Bookshelf, Jacket as jacket, Label as label, Light as light, Mark as mark, Switch as switchOf, Tone as tone } from '../.manual/.book';
import { BookLink } from './o1-the-catalogue~booklink.tsx';
import { Unfolded as unfolded } from './o1-the-catalogue~said.tsx';

export class $Catalogue extends $LibraryBook {
    get books(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get placed(): ($Chapter | undefined)[] {
        return [...super.placed, ...this.books];
    }
    override get pages(): $Chapter[] {
        return [...this.books, ...super.pages];
    }

    override write(): ReactNode {
        return (
            <>
                <div className="pd-library">
                    {this.library()}
                </div>
                <div className="pd-me">
                    {this.byline()}
                </div>
                <div className="pd-holds">
                    {this.holds()}
                </div>
                <div className="pd-head">
                    {this.head()}
                </div>
                <div className="pd-leaves">
                    {this.front()}
                    {this.leaves()}
                    <div className="pd-shelf">
                        {this.volumes()}
                    </div>
                </div>
            </>
        );
    }

    override library(): ReactNode {
        const Mark = $(mark);
        return (
            <>
                <div className="pd-filed">
                    <Mark cover={this.coverOf(this.subject?.means?.identifier)} />
                    {this.filed()}
                </div>
                <div className="pd-logo">
                    <Mark cover={this.cover} />
                    {this.logo()}
                </div>
            </>
        );
    }

    override logo(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return (
            <div className="pd-paragraph">
                <Word>
                    <Reference>{this.means!.identifier}</Reference>
                    {this.title!.name}
                </Word>
            </div>
        );
    }

    override byline(): ReactNode {
        const Mark = $(mark);
        const cover = this.coverOf(this.author?.means?.identifier);
        return (
            <>
                {super.byline()}
                {cover === undefined ? undefined : <Mark cover={cover} />}
            </>
        );
    }

    override head(): ReactNode {
        return (
            <div className="pd-switches">
                {this.switches()}
            </div>
        );
    }

    override front(): ReactNode {
        const Switch = $(switchOf);
        return this.painted(this.cover, (
            <div className={this.open === undefined ? 'pd-leaf pd-front pd-open' : 'pd-leaf pd-front'}>
                {this.jacket(this.cover)}
                {this.opening()}
                {this.reading(this.cover)}
                <Switch
                    chapter={this.cover}
                    of={unfolded}
                >
                    read on
                </Switch>
            </div>
        ));
    }

    override opening(): ReactNode {
        const Title = $(this.title!);
        const Synopsis = $(this.synopsis!);
        return (
            <div className="pd-words">
                {this.shelved(this.cover)}
                <Title />
                {this.line(this.cover)}
                <Synopsis />
            </div>
        );
    }

    line(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Said = $(label);
        const Reference = $(reference);
        const author = cover.annotations.expressed($Author);
        const subject = cover.annotations.expressed($Subject);
        return (
            <>
                <div className="pd-paragraph pd-byline">
                    <Word>
                        <Said />
                        by
                    </Word>
                    <Word>
                        <Reference>{author!.means!.identifier}</Reference>
                        {author!.name}
                    </Word>
                </div>
                <div className="pd-paragraph pd-filed-under">
                    <Word>
                        <Said />
                        filed under
                    </Word>
                    <Word>
                        <Reference>{subject!.means!.identifier}</Reference>
                        {subject!.name}
                    </Word>
                </div>
            </>
        );
    }

    override leaves(): ReactNode {
        const Switch = $(switchOf);
        return [...this.books, ...this.chapters].map((chapter, index) => {
            const Chapter = $(chapter);
            const cover = this.jacketOf(chapter);
            return this.painted(cover, (
                <div
                    key={index}
                    className={chapter === this.open ? 'pd-leaf pd-open' : 'pd-leaf'}
                >
                    {this.jacket(cover)}
                    <div className="pd-words">
                        {this.shelved(cover)}
                        <Chapter />
                        {this.line(cover)}
                    </div>
                    {this.reading(cover)}
                    {cover === undefined ? undefined : (
                        <Switch
                            chapter={chapter}
                            of={unfolded}
                        >
                            read on
                        </Switch>
                    )}
                    <div className="pd-files">
                        {this.listings(chapter)}
                    </div>
                </div>
            ), index);
        });
    }

    volumes(): ReactNode {
        const Word = $(word);
        const Reference = $(reference);
        return [this.cover!, ...this.books].map((chapter, index) => {
            const cover = this.jacketOf(chapter)!;
            return (
                <div
                    key={index}
                    className="pd-volume"
                >
                    {this.jacket(cover)}
                    <div className="pd-paragraph pd-name">
                        <Word>
                            <Reference>{chapter === this.cover ? this.means!.identifier : this.placeOf(chapter)}</Reference>
                            {cover.title!.name}
                        </Word>
                    </div>
                </div>
            );
        });
    }

    jacket(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Jacket = $(jacket);
        return (
            <Jacket cover={cover} />
        );
    }

    shelved(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        return (
            <div className="pd-paragraph pd-shelved">
                {cover === this.cover ? 'filed under itself' : 'filed here'}
            </div>
        );
    }

    reading(cover: $Chapter | undefined): ReactNode {
        if (cover === undefined) return undefined;
        const Word = $(word);
        const Reference = $(reference);
        const address = cover.mention!.identifier;
        return (
            <div className="pd-paragraph pd-read">
                <Word>
                    <Reference>{address}</Reference>
                    {cover === this.cover ? 'This is the catalogue' : `Read ${cover.title!.name}`} →
                </Word>
            </div>
        );
    }

    painted(cover: $Chapter | undefined, drawing: ReactNode, key?: number): ReactNode {
        const Painted = cover?.annotations.expressed($Scheme)?.painted;
        if (Painted === undefined) return drawing;
        return (
            <Painted key={key}>
                {drawing}
            </Painted>
        );
    }

    jacketOf(chapter: $Chapter): $Chapter | undefined {
        return chapter.annotations.expressed($Volume)?.cover ?? (this.appendix.includes(chapter) ? undefined : this.cover);
    }

    override coverOf(identifier: string | undefined): $Chapter | undefined {
        return super.coverOf(identifier) ?? this.books
            .map(book => book.annotations.expressed($Volume)?.cover)
            .find(cover => cover !== undefined && cover.mention?.identifier === identifier);
    }

    override named(place: string): $Chapter | undefined {
        return super.named(place) ?? this.books.find(book => this.placeOf(book) === place);
    }

    placeOf(entry: $Chapter): string | undefined {
        const slug = entry.title?.annotations.expressed($Referent)?.identifier;
        const address = this.means?.identifier;
        if (slug === undefined || address === undefined) return undefined;
        return `${address.replace(/\/+$/u, '')}/#${slug}`;
    }
}

export const Catalogue = $($Catalogue);
$(Catalogue, Self)(BookLink);
$(Catalogue, Theme)(Bookshelf);
$(Catalogue, tone)(light);
