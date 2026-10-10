import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./A Noun ]]</Keyed>
        <Title>[[ The Author and the Subject ]]</Title>
        <Paragraph>
            <Brief />
            Two paragraphs every book draws from its cover: by whom, and its subject.
        </Paragraph>
        <Section>
            <Heading>What the two lines is</Heading>
            <Paragraph>
                Every cover in this library names who wrote the book and its subject, and the
                compiler refuses a book that leaves out either. Naming them draws nothing: the framework keeps
                both on the cover as facts and leaves it to a library to show them. So <Means>$[[ the book ]]( ./The Book )</Means> draws
                them on every book as two paragraphs: by, which leads to the author's own book, and filed
                under, which leads to the book that catalogues this one. They are the way out of any book and
                into the rest of the library, and a book of mine is never drawn without them.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the two lines fits the library's patterns</Heading>
            <Paragraph>
                Each is a paragraph with content of its own, written by the book, never by a chapter, so the
                frame places them: the subject stands at the head of the library's bar as its mark and its name,
                and by stands as me, at the bar's end or the column's foot. Each opens with a word said to be a
                label — by, subject — so a theme sets the label apart from the name and a phone can keep
                the face and drop the words, as the frame's sketch does. The label was filed under until
                2026-10-10, and I struck it: this is a library, and that is the subject.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the two lines is used</Heading>
            <Paragraph>
                A book writes nothing for them; it writes its cover with an author and a subject, and the base
                draws both. The mark before the subject and the face before by are the theme's, in the colours
                of <Means>$[[ the tone ]]( ./The Tone )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the two lines bite</Heading>
            <Paragraph>
                The two were once lines inside the cover, put there so a rule could reach them, and the
                catalogue's bars then tore the cover apart to place them; a paragraph the book draws goes where
                the book puts it.
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
