import { ReactNode } from 'react';
import { $, $check } from '@dna-platform/chemistry';
import { $Annotation, $Chapter, $Cover, $Date, $Heading, $Means, $Paragraph, $Section, $Word, $Writing, AnnotationSpecification, specify } from '@dna-platform/public';
import { $LibraryBook, LibraryBookSpecification } from './1-the-book~code.tsx';
import { $Dated } from './4-the-date~code.tsx';
import { dayOf, monthOf } from './28-the-journal~code.tsx';

export class $Speaker extends $Means {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-speaker');
    }
}

export class $Time extends $Date {
    protected override $Define(): void {
        super.$Define();
        this.classes.add(this, 'pd-time');
    }
}

export const Speaker = $($Speaker);
export const Time = $($Time);
const time = Time;

export class $Exchange extends $Annotation {
    specification = new ExchangeSpecification();
    $at: string | undefined = undefined;
    get when(): string { return this.$at ?? ''; }
    get speaker(): $Speaker | undefined {
        const section = this.parent as $Section | undefined;
        return section?.text.find($Heading)[0]?.text.find($Speaker)[0];
    }

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-exchange');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }

    override note(): ReactNode {
        const Time = $(time);
        return (
            <Time>
                {`[${this.when}](${this.when})`}
            </Time>
        );
    }
}

export class $Action extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-action');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Result extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-result');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Quoted extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-quoted');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Attached extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-attached');
    }

    override erase(writing: $Writing): void {
        writing.classes.revert(this);
    }
}

export class $Artifact extends $Annotation {
    specification = new OfAParagraphSpecification();

    override defines(writing: $Writing): void {
        writing.classes.add(this, 'pa-artifact');
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

export class ExchangeSpecification extends AnnotationSpecification {
    @specify('an exchange is said of a section')
    $saidOfASection(writing: $Writing): void {
        $check(writing instanceof $Section, 'an exchange is said of a section, and this is not one');
    }

    @specify('an exchange says when it was said')
    $saysWhen(writing: $Writing): void {
        const when = writing.annotations.expressed($Exchange)?.when ?? '';
        $check(when !== '' && !Number.isNaN(Date.parse(when)), 'an exchange says when it was said, as an instant the machine can read, and this one does not');
    }

    @specify('an exchange is headed by its speaker')
    $headedByItsSpeaker(writing: $Writing): void {
        $check(writing.annotations.expressed($Exchange)?.speaker !== undefined,
            'an exchange is headed by its speaker, a word that refers to them, and this one is not');
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

export const Exchange = $($Exchange);
export const Action = $($Action);
export const Result = $($Result);
export const Quoted = $($Quoted);
export const Attached = $($Attached);
export const Artifact = $($Artifact);
export const Verbatim = $($Verbatim);
export const Period = $($Period);
export const Messages = $($Messages);

export class $Conversation extends $LibraryBook {
    override specification = new ConversationSpecification();
    get period(): $Period | undefined {
        return this.cover?.annotations.expressed($Period);
    }
    get messages(): $Messages | undefined {
        return this.cover?.annotations.expressed($Messages);
    }
    get exchanges(): $Section[] {
        return this.body.flatMap(chapter => chapter.text.find($Section).filter(section => section.is($Exchange)));
    }
    override get pages(): $Chapter[] {
        const body = [...this.body].sort((a, b) => dayOf(a).localeCompare(dayOf(b)));
        return [this.synopsis, ...body, ...this.appendix].filter((chapter): chapter is $Chapter => chapter !== undefined);
    }
}

export class ConversationSpecification extends LibraryBookSpecification {
    @specify('a conversation says its period and how many messages it holds')
    $saysItsPeriodAndHowMany(book: $Conversation): void {
        $check(book.period !== undefined && book.messages !== undefined,
            'a conversation says its period and how many messages it holds, on its cover, and this one says less');
    }

    @specify('every chapter of a conversation is dated')
    $everyChapterIsDated(book: $Conversation): void {
        const undated = book.body.find(chapter => !chapter.is($Dated));
        $check(undated === undefined, `every chapter of a conversation is dated, and "${undated?.title?.name}" is not`);
    }

    @specify('every chapter of a conversation says the month of its date as its part')
    $everyChapterSaysItsMonth(book: $Conversation): void {
        const astray = book.body.find(chapter => chapter.part?.name !== monthOf(chapter));
        $check(astray === undefined, astray === undefined ? '' :
            `every chapter of a conversation says the month of its date as its part, and "${astray.title?.name}" says "${astray.part?.name ?? 'none'}" for ${monthOf(astray)}`);
    }

    @specify('every chapter of a conversation holds an exchange')
    $everyChapterHoldsAnExchange(book: $Conversation): void {
        const empty = book.body.find(chapter => !chapter.text.find($Section).some(section => section.is($Exchange)));
        $check(empty === undefined, `every chapter of a conversation holds an exchange, and "${empty?.title?.name}" holds none`);
    }
}

export const Conversation = $($Conversation);
