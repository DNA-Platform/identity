import { $, $check } from '@dna-platform/chemistry';
import { $Chapter, $Synopsis, Theme, specify } from '@dna-platform/public';
import { Layout as layout } from './12-the-layout~code.tsx';
import { Light as light, Tone as tone } from './16-the-tone~code.tsx';
import { $Journal, JournalLayout, JournalSpecification } from './28-the-journal~code.tsx';
import { Typeset } from './28-the-journal~theme.tsx';
import { $Messages } from './29-the-conversation~code.tsx';
import { $Volume } from './19-the-cover~code.tsx';

export class $Register extends $Journal {
    override specification = new RegisterSpecification();
    override get entries(): $Chapter[] {
        return this.text.find($Chapter).filter(chapter => chapter.is($Synopsis) && chapter !== this.synopsis);
    }
    override get laidOutChapters(): ($Chapter | undefined)[] {
        return [...super.laidOutChapters, ...this.entries];
    }

    sizeOf(entry: $Chapter): number {
        return entry.annotations.expressed($Volume)?.cover?.annotations.expressed($Messages)?.shown ?? 0;
    }
}

export class RegisterSpecification extends JournalSpecification {
    @specify('every entry of a register stands for a book, holding its synopsis')
    $everyEntryStandsForABook(book: $Register): void {
        const astray = book.entries.find(chapter => chapter.annotations.expressed($Synopsis)?.means === undefined);
        $check(astray === undefined, `every entry of a register stands for a book, holding its synopsis, and "${astray?.title?.name}" stands for none`);
    }
}

export const Register = $($Register);
$(Register, Theme)(Typeset);
$(Register, tone)(light);
$(Register, layout)(JournalLayout);
