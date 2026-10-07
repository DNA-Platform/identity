import { Append, Chapter, Heading, Image, Means, Paragraph, Section, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Title>[[ The Manual's Page ]]</Title>
        <Section>
            <Heading>What I come to the manual for</Heading>
            <Paragraph>
                The reference manual is the book I build the library with: one chapter to a part, the code that
                is the part beside the chapter that says what it is and how it is used. I come to its page to
                find a part, read what it is, and read its code without leaving the words — or to read the
                code first and the words beside it, which is the other way round. So the page is a chapter and
                its files, read two ways: words forward, where the chapter is the page and its files stand by;
                and code forward, where the file is the page and the chapter is a brief beside it. I decided
                that in the sketch phase — <Means>$[[ the manual read two ways ]]( ./The Designs I Am Going With )</Means> —
                and the switch between them is a thing said of the book, already built; what the page decides
                is how each reading looks and how one becomes the other.
            </Paragraph>
            <Paragraph>
                The page beside this chapter is the manual's own print — every chapter, every brief, every
                file, the framework's names on every element — made by <Means>$[[ The Print ]]( ./The Print )</Means> and
                opened from the file. It begins as the manual looks today, set in the frame
                that <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> decided: the bar is the cover, with
                the library's mark as the subject I am filed under, my mark and my name, and my author; the
                contents stand down the side. From there it is changed one thing at a time, and what I decide
                is written here in my words, as it was for the bookshelf.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What I decided on the page, in order</Heading>
            <Paragraph>
                The two marks stand next to each other, almost like characters, a small space between; resting on
                the subject's mark shows the logo of the page a press will go to — the library's mark alone and
                its name in its ink — with a transition worth watching. The form is utilitarian, a code
                documentation platform's: the words run wide, the index is a file tree with collapsible levels and
                marks that help a reader understand, tight enough to scale to a codebase, and the fonts blend the
                bookshelf's into it — the serif where the library's identity lives, the sans where the manual works.
                Clicking the code expands it; most of a desk's screen was wasted, so the code and the words now share it.
            </Paragraph>
            <Paragraph>
                The transitions of colour, subtle; the moments of drop shadow, pulled back; little moments of nuance
                at the edge of perception, while the highest-level percept stays elegant and ordinary, the magic a
                slight feeling. The near-white bars relate differently on different sides of the page, and that
                stays. The code shows its black on the right; a press docks it as a tab left against the side bar,
                as in an editor, and if the words are anywhere they are on the right. Three states, and one toggle is
                the affordance each time, with a hint of the thing it expands. Syntax highlighting for as many
                languages as possible, and options for how code is viewed.
            </Paragraph>
            <Paragraph>
                Every piece of code has a mark that grounds it in a design and a colour: one of seven kinds, each a
                shape and a colour, so related code looks related, with a key. The marks have the same square feel as
                the site's, as if of a type — a statement about what it means for something to have a visual
                representation — slightly utilitarian, somewhat abstract, always at the left. The mark belongs to the
                chapter as well as to its files. The groups of the contents no longer read as sentences foreign to a
                tree: a folder's mark and its own words.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The key, built</Heading>
            <Paragraph>
                <Image>![[ key-table.png ]]</Image>
            </Paragraph>
            <Paragraph>
                The marks were the first thing carried from the page into the manual, the same day, on my
                word that there might be a pattern for them: a resource file in the appendix that a chapter
                imports as a reference. There is, and it is the cover's pattern turned on kinds. The page's
                seven glyphs and its lookup from a chapter's name to its kind became an appendix section of
                the manual's table, the key, with one chapter per kind holding its drawing and its colour,
                and a kind said in each chapter as a reference to its entry. It is built
                in <Means>$[[ The Key ]]( Dougs Reference Manual / The Key )</Means>, with the code beside
                that chapter, and the entries are its seven neighbours,
                from <Means>$[[ A Type of Book ]]( Dougs Reference Manual / A Type of Book )</Means> to <Means>$[[ A Tool ]]( Dougs Reference Manual / A Tool )</Means>;
                how a new chapter or a new kind joins is said there, under how the key scales.
            </Paragraph>
            <Paragraph>
                <Image>![[ key-entry.png ]]</Image>
            </Paragraph>
            <Paragraph>
                An entry opened: the drawing large under its title, and the words for what the kind is. The
                rest of the page, the tree with its chevrons, the rail and the split, the file's thin-line
                icon and the kind on a file's press, waits on the port of the manual's look, and this chapter
                is where the team reads what was decided and follows a mention to where it is built.
            </Paragraph>
        </Section>
        <Append
            identifier="035"
            type=".html"
        >
            ![[ 035.html ]]
        </Append>
    </Chapter>
);
