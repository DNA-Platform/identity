import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Kind } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Kind>$[[ ./An Annotation ]]</Kind>
        <Title>[[ The Key ]]</Title>
        <Paragraph>
            <Brief />
            The key to the marks on this manual's chapters: seven kinds of thing a library is made of, each
            a shape and a colour, and the way a chapter says which it is.
        </Paragraph>
        <Section>
            <Heading>How a chapter says its kind</Heading>
            <Paragraph>
                Every chapter of this manual documents one kind of thing: a type of book, a theme, an
                annotation, a noun, a layout, a face or a tool. The chapter says which as a kind, an
                annotation at its head holding a reference to the kind's entry in this appendix, written as
                any reference is written and checked by the binder as any reference is. The entries are the
                seven chapters that follow this one. Each holds its drawing as a file beside it and its
                colour, said of the chapter, and each is of its own kind, so the entry for a noun wears the
                mark for a noun.
            </Paragraph>
            <Paragraph>
                Nothing else is in the chapter. Its words stay its words, and what the kind adds, the mark,
                is drawn by the kind itself: a kind is a format whose layer stands the icon before the
                chapter, which is the door the framework's own chapter on annotations designed for a label
                of this sort and left unbuilt. In the table of contents the entry notes the icon beside the
                number, and the manual's theme stands it first. The design the key answers
                is <Means>$[[ the manual's page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the key scales</Heading>
            <Paragraph>
                A new chapter of this manual says its kind in one line at its head, before its title,
                importing the kind from the file beside this chapter: the kind holds a reference to the
                entry, written as any reference to a chapter of this book is written. The binder refuses a
                chapter whose kind names no entry, or an entry without its drawing and its colour, so a
                chapter cannot be filed under a kind the key does not have. Nothing else is needed: the
                entry in the table of contents reads the chapter's kind through
                <Means>$[[ the entry ]]( ./The Entry )</Means>, and the leaf draws it.
            </Paragraph>
            <Paragraph>
                A new kind is a new entry: a chapter in the key's section of the table, numbered after the
                seven, whose kind is itself, whose drawing stands beside it as a file named for the icon,
                and whose colour is said of it with <Means>$[[ the colour ]]( ./The Colour )</Means>. The
                drawing is one square of sixteen, with the ground drawn first and the shape on it in one
                line: a closed shape, or one that meets the square's border, never a floating line, because
                a mark reads at sixteen pixels or not at all; its one colour is dark enough to be the ink
                and to thin to a ground. A file beside a chapter will wear its chapter's kind when the
                leaf's rail is built; until then a file is drawn as a file.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the icon is drawn</Heading>
            <Paragraph>
                An icon is a word that draws a kind's drawing, painted in the entry's colour; the ground of
                the square is that colour thinned to a tint, so each kind is one colour said once. The
                drawings are closed shapes, or shapes that meet the square's border, never a floating line,
                and they share the square feel of the marks the bar draws for a book, as if of one type.
                A kind's entry, opened, shows its drawing large with the words for what the kind is.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Why this is the pattern</Heading>
            <Paragraph>
                The key is to kinds what <Means>$[[ the cover ]]( ./The Cover )</Means> is to a book. An
                appendix chapter holds the data, as annotations and as files beside it; the code beside it
                exports the one thing a chapter imports to say the trait; the type draws. Whatever a design
                needs a chapter to carry is carried this way, said once in the chapter and read everywhere,
                so a chapter stays a piece of writing while a trait as particular as a coloured mark from a
                legend is added to it. A kind is added by adding an entry; nothing in the code names the
                seven.
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
