import { ReactNode } from 'react';
import { $, $Chemical, Component, next } from '@dna-platform/chemistry';
import { $Chapter, $Word, $Writing, ContainerProps } from '@dna-platform/public';
import { $EntryOpen, $Result, $Results } from '../../.manual/14-the-entry~code.tsx';
import { $ProjectManual } from '../../.manual/31-the-project-manual~code.tsx';
import { $Volume, markingOf } from '../../.manual/19-the-cover~code.tsx';
import { $Origin } from './8-the-origin~code.tsx';
import { Place, Trail, keptTrail, trailKey } from './9-the-conversations-page~code.tsx';

// The way on to the application beside each conversation of a project, a link by the origin its cover carries.
export class $WayOn extends $Word {
    $href?: string;

    override write(): ReactNode {
        if (this.$href === undefined) return undefined;
        return (
            <a
                className="pd-way-on-link"
                href={this.$href}
                target="_blank"
                rel="noopener"
                aria-label="in Claude"
                title="in Claude"
            >
                ↗
            </a>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-way-on');
    }
}

// The way into a conversation from a row of its project, keeping the trail as the row is pressed.
export class $ProjectEntryOpen extends $EntryOpen {
    override container(props: ContainerProps): ReactNode {
        return super.container({ ...props, onClick: () => this.keep() });
    }

    keep(): void {
        const book = this.book as $ClaudeProjectManual | undefined;
        const entry = this.$entry instanceof $Chapter ? this.$entry : this.chapter;
        if (book === undefined || entry === undefined || typeof localStorage === 'undefined') return;
        const entries = book.pages.filter(chapter => book.entries.includes(chapter));
        const index = entries.indexOf(entry);
        const placeOf = (one: $Chapter | undefined): Place | undefined => {
            const href = one?.annotations.expressed($Volume)?.cover?.mention?.identifier;
            return one === undefined || href === undefined ? undefined : { title: one.title?.name ?? '', href };
        };
        const page = book.means?.identifier ?? '';
        const trail: Trail = {
            at: new Date().toISOString(),
            from: { page, title: book.title?.name ?? '', href: page, marking: markingOf(book.cover) },
            to: placeOf(entry)?.href,
            within: { title: book.title?.name ?? '', index: index + 1, of: entries.length, prev: placeOf(entries[index - 1]), next: placeOf(entries[index + 1]) },
            word: book.index?.$search ?? '',
            row: entry.mention?.identifier,
        };
        try {
            localStorage.setItem(trailKey, JSON.stringify(trail));
        } catch {
            return;
        }
    }
}

// The project's hits lay the project's own open over each row, so a hit pressed keeps the trail as a row does.
export class $ProjectResult extends $Result {
    get project(): $ClaudeProjectManual | undefined { return this.book as $ClaudeProjectManual | undefined; }

    // The hit I came back from, when the trail leads back to this page: marked as the row of the list is, since the
    // hits stand in front of the list while a word stands.
    get returned(): boolean {
        const book = this.project;
        const hit = this.$hit;
        return book !== undefined && hit !== undefined && book.$trail !== undefined && book.$trail.to === book.placeOf(hit);
    }

    // A hit is drawn after the page arrives, so the one I came back from lands the page once it is laid out.
    $ProjectResult(...chemicals: $Chemical[]) {
        this.$Result(...chemicals);
        void this[next]('layout').then(() => { if (this.returned) this.project?.land(); });
    }

    override container(props: ContainerProps): ReactNode {
        return super.container(this.returned ? { ...props, className: `${props.className ?? ''} pa-returned` } : props);
    }

    protected override open(): Component<$EntryOpen> {
        return projectEntryOpen as Component<$EntryOpen>;
    }
}

export class $ProjectResults extends $Results {
    protected override result(hit: $Writing, position: number): ReactNode {
        const ProjectResult = $(projectResult);
        return (
            <ProjectResult
                key={(this.book as $ProjectManual).placeOf(hit) ?? position}
                chapter={this.chapter}
                hit={hit}
            />
        );
    }
}

// A project of mine with Claude: the project manual with the way on to the application beside each conversation and
// the trail kept as a row is pressed; when the page arrives from a conversation, it lands where I left it. Sprint 117,
// D2: this chapter imports the conversation's page for the trail and the conversation's page imports nothing of it, so
// a change here reaches the project books and no conversation.
export class $ClaudeProjectManual extends $ProjectManual {
    $trail: Trail | undefined = undefined;

    override aboveThePages(): ReactNode {
        const ProjectResults = $(projectResults);
        return (
            <ProjectResults chapter={this.table} />
        );
    }

    protected override rows(entries: $Chapter[]): void {
        super.rows(entries, projectEntryOpen as Component<$EntryOpen>);
        const WayOn = $(wayOn);
        for (const entry of entries) {
            const origin = entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Origin)?.uuid;
            if (origin === undefined) continue;
            entry.text.add(this,
                <WayOn href={`https://claude.ai/chat/${origin}`} />
            );
        }
    }

    // Read once the page has arrived: the trail, if it leads back here, sets the word and marks the row I left from.
    arrive(): void {
        const trail = keptTrail();
        if (trail === undefined || trail.from.page !== this.means?.identifier || this.$trail?.at === trail.at) return;
        this.$trail = trail;
        if (trail.word !== '') this.index?.search(trail.word);
        const row = trail.row === undefined ? undefined : this.chapterAt(trail.row);
        if (row !== undefined) row.classes.add(this, 'pa-returned');
        if (row !== undefined && trail.word === '') this.land(row);
    }

    // Lands on the row I left from: the row of the list, found by its title as the book's turn finds a bookmark's, when
    // no word stands; and the hit I came back from, which calls once it is laid out, since the hits stand above the list
    // while a word stands.
    land(row?: $Chapter): void {
        const title = row?.title;
        const element = row === undefined
            ? document.querySelector('.pd-book .pd-result.pa-returned')
            : title === undefined ? null : document.getElementById(String(title.id))?.closest('.pd-chapter');
        element?.scrollIntoView({ block: 'center' });
    }

    // The turn is the framework's word that the book has drawn and laid out on the client, which is when the browser's
    // storage may be read without the first draw disagreeing with the print.
    protected override turn(): void {
        super.turn();
        this.arrive();
    }
}

export const WayOn = $($WayOn);
export const ProjectEntryOpen = $($ProjectEntryOpen);
export const ProjectResult = $($ProjectResult);
export const ProjectResults = $($ProjectResults);
export const ClaudeProjectManual = $($ClaudeProjectManual);
const wayOn = WayOn;
const projectEntryOpen = ProjectEntryOpen;
const projectResult = ProjectResult;
const projectResults = ProjectResults;
