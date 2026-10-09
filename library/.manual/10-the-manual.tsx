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
            The view that shows a chapter beside its file, read code first or words first, and the type of book
            that is one manual through.
        </Paragraph>
        <Section>
            <Heading>What a manual is</Heading>
            <Paragraph>
                A manual is a format said of a chapter: the chapter is shown beside its files, as <Means>$[[ Side by Side ]]( Dougs Design / Side by Side )</Means> has
                it, read two ways, <Means>$[[ the code in front ]]( Dougs Design / The Code in Front )</Means> and <Means>$[[ the words in front ]]( Dougs Design / The Words in Front )</Means>, and
                between them a split. Every chapter of this book says it at its head, and so does any chapter of
                mine that documents a tool with the tool's file beside it: the catalogue's one chapter on how it is
                built, the design book's six, my story's one, each in the part its table lists it under. This book
                is the case where everything is one manual.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a manual fits the library's patterns</Heading>
            <Paragraph>
                A manual is a view of <Means>$[[ a part ]]( ./The Part )</Means>. Its layer is the spread: the words
                holding the chapter, the files with the tab bar at their head, the file tabs, the words tab, the
                dock and the three options, the listings with the chosen one opened, the rail of file presses with
                their skeletons, and the grip. The spread's rules are the layer's own styled component, read off the
                book's theme, so the design book's manual wears rose, my story's its paper, and this book its light.
                Which file is shown is the manual's own state, set by a press and read by the tabs and the listings
                through the manual they are given. The readings are three annotations on the book, one in front at
                a time, and the options three more, each a switch. A row of the tree that leads to a manual chapter
                gets that chapter's files as presses from the manual, and the book wears a class while a manual
                chapter is open, which is how the side bar shows the part first.
            </Paragraph>
            <Paragraph>
                The book that is a manual through is a type of book under <Means>$[[ the book ]]( ./The Book )</Means>: it
                opens on its first chapter when none is named, has the words in front and the line numbers on by
                default, wears the light tone, and registers its theme and its numbered entry, which notes the icon
                and the number beside each row. That is some fifteen lines, and another subject's manual extends it
                in one. Its theme is values, its bar and its wash; the spread's look is the manual's wherever a
                manual stands.
            </Paragraph>
            <Paragraph>
                The brief is a paragraph said to be so, written after every chapter's title: a much smaller synopsis
                of the tool for the code reading, where the words that teach are put away. This book's own
                specification refuses a chapter that has none. Its cover and its table of contents are the
                framework's with a look, the table being <Means>$[[ the index ]]( ./The Entry )</Means> with its own
                kind of entry registered, which shows the type of the file a chapter appends.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How a manual is used</Heading>
            <Paragraph>
                A chapter about a tool says it is a manual at its head, writes its title, a paragraph that says it
                is brief, its sections, and an append for each file beside it; the manual draws the rest. A new tool
                is a new chapter beside its file, listed in the table under its group. In a book that has parts the
                chapter says its part too, and the table lists it under the part's section.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where a manual bites</Heading>
            <Paragraph>
                The readings were once a Format given through the switch, and a press replaced the whole book
                beneath it; they are classes now. A paragraph that is brief must stand directly under the chapter,
                before its sections, or the rule that asks for it does not find it. The press on the folded strip
                itself does not open the code; the tab does. And the spread's rules stand earlier in the sheet than
                a theme's, so every one says the book first or loses a tie; three did, the day the spread became
                the manual's own.
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
