import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~forward.tsx';
import { Manual } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Manual />
        <Keyed>$[[ ./An Annotation ]]</Keyed>
        <Title>[[ The Key ]]</Title>
        <Paragraph>
            <Brief />
            The key to the marks on this manual's chapters: seven sorts of thing a library is made of, each
            a shape and a colour, and the way a chapter says which it is.
        </Paragraph>
        <Section>
            <Heading>How a chapter is keyed</Heading>
            <Paragraph>
                Every chapter of this manual documents one sort of thing: a type of book, a theme, an
                annotation, a noun, a layout, a face or a tool. The chapter says which by being keyed, an
                annotation at its head holding a reference to that sort's entry in this appendix, written as
                any reference is written and checked by the binder as any reference is. The entries are the
                seven chapters that follow this one. Each holds its drawing as a file beside it and its
                colour, said of the chapter, and each is keyed as itself, so the entry for a noun wears the
                mark for a noun.
            </Paragraph>
            <Paragraph>
                Nothing else is in the chapter. Its words stay its words, and what the annotation adds, the mark,
                is drawn by the annotation itself: it is a format whose layer stands the icon before the
                chapter, which is what the framework's own chapter on annotations designed for a label of
                this sort and left unbuilt. In the table of contents the entry notes the icon beside the
                number, and the manual's theme stands it first. The design the key answers
                is <Means>$[[ the manual's page ]]( Dougs Design / The Manual's Page )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the key scales</Heading>
            <Paragraph>
                A new chapter of this manual is keyed in one line at its head, before its title,
                importing the annotation from the file beside this chapter: it holds a reference to the
                entry, written as any reference to a chapter of this book is written. The binder refuses a
                chapter keyed to no entry, or to an entry without its drawing and its colour, so a
                chapter cannot be keyed to a sort of thing the key does not have. Nothing else is needed: the
                entry in the table of contents reads the chapter's key through
                <Means>$[[ the entry ]]( ./The Entry )</Means>, and the page draws it.
            </Paragraph>
            <Paragraph>
                A new sort of thing is a new entry: a chapter in the key's section of the table, numbered after the
                seven, keyed as itself, whose drawing stands beside it as a file named for the icon,
                and whose colour is said of it with <Means>$[[ the colour ]]( ./The Colour )</Means>. The
                drawing is one square of sixteen, with the ground drawn first and the shape on it in one
                line: a closed shape, or one that meets the square's border, never a floating line, because
                a mark reads at sixteen pixels or not at all; its one colour is dark enough to be the ink
                and to thin to a ground. A file beside a chapter will wear its chapter's key when the
                page's rail is built; until then a file is drawn as a file.
            </Paragraph>
        </Section>
        <Section>
            <Heading>How the icon is drawn</Heading>
            <Paragraph>
                An icon is a word that draws an entry's drawing, painted in the entry's colour; the ground of
                the square is that colour thinned to a tint, so each entry is one colour said once. The
                drawings are closed shapes, or shapes that meet the square's border, never a floating line,
                and they share the square feel of the marks the bar draws for a book, as if of one type.
                An entry, opened, shows its drawing large with the words for what the sort of thing is.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Why this is the pattern</Heading>
            <Paragraph>
                The key is to the sorts of thing in this manual what <Means>$[[ the cover ]]( ./The Cover )</Means> is to a book. An
                appendix chapter holds the data, as annotations and as files beside it; the code beside it
                exports the one thing a chapter imports to say the trait; the type draws. Whatever a design
                needs a chapter to carry is carried this way, said once in the chapter and read everywhere,
                so a chapter stays a piece of writing while a trait as particular as a coloured mark from a
                legend is added to it. A sort of thing is added by adding an entry; nothing in the code names the
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
