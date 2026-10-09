import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./A Type of Book ]]</Kind>
        <Title>[[ The Manual ]]</Title>
        <Paragraph>
            <Brief />
            The type of book that shows a chapter beside its file, read code first or words first.
        </Paragraph>
        <Section>
            <Heading>What a manual is</Heading>
            <Paragraph>
                A manual is one of the types of book in my library. It is read to learn how to use the code, so
                every chapter of it is about one tool and ends in the file that tool is: the chapter beside the
                file, as <Means>$[[ Side by Side ]]( Dougs Design / Side by Side )</Means> has it, read two
                ways — <Means>$[[ the code in front ]]( Dougs Design / The Code in Front )</Means> and <Means>$[[ the words in front ]]( Dougs Design / The Words in Front )</Means>.
                This book is one.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a manual fits the library's patterns</Heading>
            <Paragraph>
                The frame is <Means>$[[ the book's ]]( ./The Book )</Means>; the manual overrides only its
                switches. What it adds is inside the page: the spread, a Format the manual gives itself when it
                is defined, which sets a chapter's words and its file in two columns on the open leaf and
                carries the geometry of both readings keyed by the reading's class. A reading is an annotation
                of one kind, as <Means>$[[ a tone ]]( ./The Tone )</Means> is: words in front, where the file
                folds to a strip at the right with its name turned on its side, and code in front, where the
                file takes the room and the chapter keeps its title and its brief in a column beside it, its
                sections put away. The move between them is a transition of the grid's columns, a beat long.
            </Paragraph>
            <Paragraph>
                The brief is a paragraph said to be so, written after every chapter's title: a much smaller
                synopsis of the tool for the code reading, where the words that teach are put away. The
                manual's own specification refuses a chapter that has none. Its cover and its table of contents
                are the framework's with a look, the table being <Means>$[[ the index ]]( ./The Entry )</Means> with
                its own kind of entry registered, which shows the type of the file a chapter appends.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a manual is used</Heading>
            <Paragraph>
                A chapter about a tool writes its title, a paragraph that says it is brief, its sections, and an
                append for each file beside it; the manual draws the rest. A new tool is a new chapter beside its
                file, listed in the table under its group. The two readings are tabs at the head; words in front
                is the manual's default, registered on its class, and the light tone with it, since its sketch
                is a light one.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a manual bites</Heading>
            <Paragraph>
                The readings were once a Format given through the switch, and a press replaced the whole book
                beneath it; they are classes now and the rules were always in the spread. A paragraph that is
                brief must stand directly under the chapter, before its sections, or the rule that asks for it
                does not find it. The press on the folded strip itself does not open the code; the tab does.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
        <Append
            identifier="faces"
            type=".tsx"
        >
            ![[ faces.tsx ]]
        </Append>
        <Append
            identifier="entry"
            type=".tsx"
        >
            ![[ entry.tsx ]]
        </Append>
        <Append
            identifier="theme"
            type=".tsx"
        >
            ![[ theme.tsx ]]
        </Append>
        <Append
            identifier="forward"
            type=".tsx"
        >
            ![[ forward.tsx ]]
        </Append>
    </Chapter>
);
