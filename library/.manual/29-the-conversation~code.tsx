import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import {
    $Annotation, $Chapter, $Cover, $Date, $Heading, $Means, $Paragraph, $Referent, $Section, $Word, $Writing,
    AnnotationSpecification, Referent as referent, SectionSpecification, identifier, specify,
} from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { $Dated } from './4-the-date~code.tsx';
import { dayOf } from './28-the-journal~code.tsx';

export class $Speaker extends $Heading {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-speaker');
    }

    protected override $Bound(): void {
        super.$Bound();
        const referent = this.annotations.expressed($Referent);
        if (referent !== undefined)
            this.annotations.remove(this, referent);
    }
}

export class $Time extends $Date {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-time');
    }
}

export class $Participant extends $Means {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-participant');
    }
}

export class $Participants extends $Paragraph {
    get participants(): $Participant[] { return this.text.find($Participant); }

    override write(): ReactNode {
        const participants = this.participants;
        return participants.flatMap((participant, index) => {
            const Participant = $(participant);
            const between = index === 0 ? '' : index === participants.length - 1 ? ' and ' : ', ';
            return [between, (
                <Participant key={index} />
            )];
        });
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-participants');
    }
}

export const Speaker = $($Speaker);
export const Time = $($Time);
export const Participant = $($Participant);
export const Participants = $($Participants);
const time = Time;

const shownTime = (instant: string): string => {
    const date = new Date(instant);
    if (Number.isNaN(date.getTime())) return instant;
    const day = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
    const hour = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });
    return `${hour} UTC, ${day}`;
};

export class $Message extends $Section {
    override specification = new MessageSpecification();
    $at: string | undefined = undefined;
    get when(): string { return this.$at ?? ''; }
    get speaker(): $Speaker | undefined { return this.text.find($Speaker)[0]; }

    override write(): ReactNode {
        const Time = $(time);
        const speaker = this.speaker;
        const Speaker = speaker === undefined ? undefined : $(speaker);
        const said = [...this.text].filter(chemical => chemical !== speaker);
        return (
            <>
                {Speaker === undefined ? undefined : (
                    <Speaker />
                )}
                <Time>
                    {`[${shownTime(this.when)}](${this.when})`}
                </Time>
                <div className="pd-said">
                    {said.map((chemical, index) => {
                        const Said = $(chemical);
                        return (
                            <Said key={index} />
                        );
                    })}
                </div>
            </>
        );
    }

    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-message');
        if (this.when === '') return;
        const Referent = $(referent);
        this.annotations.add(this,
            <Referent>{identifier.slug(this.when.replace(/Z$/u, ''))}</Referent>
        );
    }

    protected override $Bound(): void {
        const author = this.book?.author?.means?.identifier;
        if (author !== undefined && this.speaker?.means?.identifier === author) {
            const Mine = $(mine);
            this.annotations.add(this,
                <Mine />
            );
        }
        super.$Bound();
    }
}

export class $Mine extends $Annotation {
    specification = new MineSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-mine');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class MineSpecification extends AnnotationSpecification {
    @specify('mine is said of a message')
    $saidOfAMessage(writing: $Writing): void {
        $check(writing instanceof $Message, 'mine is said of a message, and this is not one');
    }
}

export const Mine = $($Mine);
const mine = Mine;

export class $Quoted extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-quoted');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Verbatim extends $Annotation {
    specification = new VerbatimSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-verbatim');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Period extends $Annotation {
    specification = new OfACoverSpecification();
    $from: string | undefined = undefined;
    $to: string | undefined = undefined;
    get from(): string { return this.$from ?? ''; }
    get to(): string { return this.$to ?? ''; }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-period');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Messages extends $Annotation {
    specification = new OfACoverSpecification();
    $shown: string | undefined = undefined;
    $all: string | undefined = undefined;
    get shown(): number { return Number(this.$shown ?? 0); }
    get all(): number { return Number(this.$all ?? 0); }
    get aside(): number { return this.all - this.shown; }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-messages');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class MessageSpecification extends SectionSpecification {
    @specify('a message says when it was said')
    $saysWhen(message: $Message): void {
        $check(message.when !== '' && !Number.isNaN(Date.parse(message.when)),
            'a message says when it was said, as an instant the machine can read, and this one does not');
    }

    @specify('a message is headed by its speaker')
    $headedByItsSpeaker(message: $Message): void {
        $check(message.canonical instanceof $Speaker,
            'a message is headed by its speaker, a heading that refers to them, and this one is not');
    }
}

export class OfAParagraphSpecification extends AnnotationSpecification {
    @specify('this is said of a paragraph')
    $saidOfAParagraph(writing: $Writing): void {
        $check(writing instanceof $Paragraph, 'this is said of a paragraph, and this is not one');
    }
}

export class OfACoverSpecification extends AnnotationSpecification {
    @specify('this is said of a cover')
    $saidOfACover(writing: $Writing): void {
        $check(writing instanceof $Chapter && writing.is($Cover), 'this is said of a cover, and this is not one');
    }
}

export class VerbatimSpecification extends AnnotationSpecification {
    @specify('verbatim is said of a word')
    $saidOfAWord(writing: $Writing): void {
        $check(writing instanceof $Word, 'verbatim is said of a word, and this is not one');
    }
}

export const Message = $($Message);
export const Quoted = $($Quoted);
export const Verbatim = $($Verbatim);
export const Period = $($Period);
export const Messages = $($Messages);

export class $Conversation extends $LibraryBook {
    override specification = new ConversationSpecification();
    get participants(): $Participant[] {
        return this.cover?.text.find($Participants)[0]?.participants ?? [];
    }
    get period(): $Period | undefined {
        return this.cover?.annotations.expressed($Period);
    }
    get messageCount(): $Messages | undefined {
        return this.cover?.annotations.expressed($Messages);
    }
    get messages(): $Message[] {
        return this.body.flatMap(chapter => chapter.text.find($Message));
    }
    override get pages(): $Chapter[] {
        const body = [...this.body].sort((a, b) => dayOf(a).localeCompare(dayOf(b)));
        return [this.synopsis, ...body, ...this.appendix].filter((chapter): chapter is $Chapter => chapter !== undefined);
    }
}

export class ConversationSpecification extends LibraryBookSpecification {
    @specify('a conversation says its participants, its period and how many messages it holds')
    $saysItsParticipantsPeriodAndCount(book: $Conversation): void {
        $check(book.participants.length > 0 && book.period !== undefined && book.messageCount !== undefined,
            'a conversation says its participants, its period and how many messages it holds, on its cover, and this one says less');
    }

    @specify('every chapter of a conversation is dated')
    $everyChapterIsDated(book: $Conversation): void {
        const undated = book.body.find(chapter => !chapter.is($Dated));
        $check(undated === undefined, `every chapter of a conversation is dated, and "${undated?.title?.name}" is not`);
    }

    @specify('every message of a conversation is addressed by its time')
    $everyMessageIsAddressed(book: $Conversation): void {
        const unaddressed = book.messages.find(message => message.annotations.expressed($Referent) === undefined);
        $check(unaddressed === undefined,
            `every message of a conversation is addressed by its time, and the one at "${unaddressed?.when}" is not`);
    }

    @specify('every chapter of a conversation holds a message')
    $everyChapterHoldsAMessage(book: $Conversation): void {
        const empty = book.body.find(chapter => chapter.text.find($Message).length === 0);
        $check(empty === undefined, `every chapter of a conversation holds a message, and "${empty?.title?.name}" holds none`);
    }
}

export const Conversation = $($Conversation);
