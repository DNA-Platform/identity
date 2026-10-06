import { Chapter, Heading, Image, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Pain, Solution } from './.book';

export default () => (
    <Chapter>
        <Title>[[ Driving the Build ]]</Title>
        <Section>
            <Heading>How I look at it</Heading>
            <Paragraph>
                On 6 October the four books stood built in one frame, and I drove them the way a reader would:
                every page as it opens, every switch pressed alone and then with another, every entry in the
                contents pressed to see where it lands. Each page is photographed at a desk 1280 wide and on a
                phone 390 wide, and held against the HTML it was decided from — the shelf
                of <Means>$[[ 1 ]]( ./The Shelf )</Means>, the frame
                of <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>, the two readings of the
                manual in <Means>$[[ 28 ]]( ./The Code in Front )</Means> and <Means>$[[ 31 ]]( ./The Words in Front )</Means>,
                and the sheet of <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means>.
                The desk comes first by far. The phone needs a good story too.
            </Paragraph>
            <Paragraph>
                What I found is written here as I found it: a pain, in the words of the person who met it, and
                then what I think solves it. The solutions are sketched in HTML before anything is coded, because
                designing is easier in HTML, and each sketch links to the book it is for.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The library's page</Heading>
            <Paragraph>
                <Image>![[ library-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                The shelf holds the three other books and not the catalogue itself, though the catalogue is
                filed under what it is about, which is itself. The one book that catalogues the library is the
                one book missing from its shelf.
            </Paragraph>
            <Paragraph>
                <Solution />
                The catalogue is the first book on its own shelf, in black, as my own books are black in 1 and
                in 15. Pressing it opens its entry, which says what it is; opening the book from there brings
                this page back, showing that I was just reading about the thing I am on. That is the closure
                this library has — the library catalogues itself — and it is shown, never avoided.
            </Paragraph>
            <Paragraph>
                <Pain />
                The three books I keep are named three times on one screen: across the top bar, down the side
                bar under Contents, and on the shelf. Nothing says which to press. In 15 each region has a use:
                the top bar holds the library's subjects wherever I am, with the open one lit; the side bar holds
                what the open page holds; the shelf holds covers to pick up.
            </Paragraph>
            <Paragraph>
                <Solution />
                Each catalogue earns its place by what pressing it does. The top bar takes me to a book from
                anywhere and lights the one I am in. The side bar holds this catalogue's own chapters: the
                shelves, and an entry for each book filed here, marked with the book's colour, and pressing an
                entry opens it on this page — the cover, what the book is about, and the way in. A cover on the
                shelf goes straight to the book. Explored
                in <Means>$[[ 32 ]]( ./The Library's Page, in the Site's Language )</Means>, not decided from
                the photograph.
            </Paragraph>
            <Paragraph>
                <Pain />
                The three books in the side bar are dead presses: pressing Dougs Story goes to an address that
                shows nothing and marks nothing. The only way in is a small square at the row's end, which The
                Shelves explains in prose, and The Shelves itself leaves the shelf with no row back. The group
                headings — Contents, How this book is built — are dead too, on every book, and in the design
                book a press on a section lights two rows at once.
            </Paragraph>
            <Paragraph>
                <Solution />
                A row in the contents does one thing when pressed, and the row that is lit is the thing shown.
                An entry for a book filed here opens that entry on this page, as 32 sketches; a group heading
                is a label, not a link; one row is lit at a time.
            </Paragraph>
            <Paragraph>
                <Pain />
                Under each cover the book's whole synopsis runs, thirteen lines of small grey, and the three
                columns end at different heights. In 1 under a cover is the name in one line and a small line
                beneath it, the date and the number of chapters; in 15 the name is on the cover and one line is
                under it.
            </Paragraph>
            <Paragraph>
                <Solution />
                Under a cover, one line: how many chapters, and the date of the latest when the book has dates.
                What a book is about is read on its entry, not on the shelf.
            </Paragraph>
            <Paragraph>
                <Pain />
                The cover's foot is a line across with nothing under it. In 1 the foot says who the book is
                with, in small capitals, and the title is set at 15px in the serif; here the title is smaller
                and the foot is blank.
            </Paragraph>
            <Paragraph>
                <Solution />
                The foot carries the author, as 1 has it, and the title takes the file's size.
            </Paragraph>
            <Paragraph>
                <Pain />
                The synopsis sits in a gradient box at a size larger than anything in the files. In 15 the wash
                is the card that says Continue, not the synopsis; the words about a book are 20px serif, plain,
                56 characters wide; the body is 14px Inter and the title 36px serif. I asked what the sizes were
                drawn from, and the answer has to be the file.
            </Paragraph>
            <Paragraph>
                <Solution />
                Every size in the theme is the file's value, written beside it, and the wash is kept for a card
                that invites a press.
            </Paragraph>
            <Paragraph>
                <Pain />
                A button called outline sits on every book and draws the class of every element in dotted
                boxes. No reader wants this. It is a developer's tool on a reader's page.
            </Paragraph>
            <Paragraph>
                <Solution />
                It goes. The workbench is where classes are looked at. Gone the same day, from every book.
            </Paragraph>
            <Paragraph>
                <Pain />
                Each book was given a colour — an orange, a pink, a purple — painted on its cover and nowhere
                else, and they are about as far from the site's own scheme as colours get. The site is the
                coming-soon page: a soft black ground, warm off-white words in Cormorant light, five blurred
                orbs drifting in five hues, and the opal cycling through the letters of coming soon to make
                white text look a bit inexplicable. The frame lifted that opal into side bars, pills and lit
                rows, where nothing is meant to be inexplicable, and the dots in the side bar are all one blue.
            </Paragraph>
            <Paragraph>
                <Solution />
                I do not want a book to have a colour. I want it to have a colour scheme, and the scheme
                influences how it looks as a book. And every book has a new scheme of its own — not the site's
                scheme with one hue swapped, which is still a couple of colours. The coming-soon page is used
                to infer the elements of my aesthetic, not copied: it cannot be reduced to a couple of colours
                to use.
            </Paragraph>
            <Paragraph>
                <Solution />
                The blue and black of that page show what I want everywhere: I hate out-of-the-tube effects,
                and prefer subtlety and nuance. The page is mostly black, and the touch of blue produces a
                subtle effect at the edge of consciousness. That cannot be reduced to a palette; it is a design
                philosophy, and the sketches have to find it: restraint, one touch at the threshold of
                noticing, a hue felt before it is seen. And that page is a teaser for the project, not even for
                this library. Nothing here has to be drenched in drama, and a library is not given the suspense
                of a teaser: a UI element is chosen for its purpose. What I appreciate is the tiny detail that
                lives at the edge of consciousness and has a function — the hairline that says where I am, the
                dot that says which book. A subtle thing that does nothing goes.
            </Paragraph>
            <Paragraph>
                <Solution />
                So the opal, and every shimmer, gold and mother-of-pearl that followed it, are not for this
                library. It is a repository of conversations with AI, and it has absolutely no need for an
                effect like a swirling, wavy, inexplicably white font. When something in it does, it will be
                given its colours then. Until then it is not necessary, and it is gone from the sketches.
            </Paragraph>
            <Paragraph>
                <Solution />
                What a scheme is, then, is a set of roles, each read somewhere: a deep ground that is never
                pure black and carries an undertone of its own; words in an off-white of the opposite
                temperature; one hue, read as the dot beside the book's name and as the hairline under it when
                it is open; a paper and an ink of its own to read on, with the soft and the line that follow.
                The library's scheme is the site's: blue-black, warm words, a sky hue, a warm white. The story's
                is an umber black with cream words and an amber hue on the book's paper. The manual's is an
                ink-violet black with cool words and a lavender hue on a cool white. The design book's is a rose
                black with blush words and a rose hue, read on white. These are first proposals, shown as each
                works — the bar, the contents, the page, the cover —
                in <Means>$[[ 33 ]]( ./Four Schemes )</Means>, for me to choose from.
            </Paragraph>
            <Paragraph>
                <Solution />
                And a palette does not exist in isolation in a design language. If bright red is the alert
                colour, writing page titles in it is not using the palette, whatever the swatch says. Every
                value in a scheme carries the role it was designed for, and a theme names its fields for those
                roles — ground, words, hue, paper, ink — never for the colours, so that a value cannot wander
                into a role it was not designed for.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The reference manual's page</Heading>
            <Paragraph>
                <Image>![[ reference-manual-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                The manual opens on its synopsis, three lines, and nothing else, beside a side bar of sixteen
                chapters each ending in .tsx at the right. I come to a manual to look up a part: its code, and
                the words that say how to use it.
            </Paragraph>
            <Paragraph>
                <Solution />
                To find in 28 and 31 before it is coded: what the door shows, and whether a file's name belongs
                in the contents or on the strip above its code. Both open on a chapter, with its address above
                the title and a lead under it.
            </Paragraph>
            <Paragraph>
                <Pain />
                Pressing code on the door only narrows the synopsis. On a chapter, the code in front is a
                right-hand half column, where 28 puts the file under the title, and the strip above the words
                clips the file's name to its last word.
            </Paragraph>
            <Paragraph>
                <Solution />
                The code in front is 28's: the file under the title across the page, the words folded to a
                brief beside it. The strip carries the whole name.
            </Paragraph>
        </Section>
        <Section>
            <Heading>My story's page</Heading>
            <Paragraph>
                <Image>![[ story-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                My story opens on a sheet carrying a masthead and the synopsis in italics, and a short chapter
                leaves the sheet mostly empty. It does not look like a book. In 29 there is no synopsis page:
                the first chapter is open on the sheet, its title at 39px, a drop cap on its first paragraph,
                and at the foot the folio, chapter 1 of 3, with the next chapter's name.
            </Paragraph>
            <Paragraph>
                <Solution />
                The story opens on a chapter, dated in its masthead, with the folio and the turns at the foot.
                A short entry is still a page when the title, the drop cap and the foot are there.
            </Paragraph>
            <Paragraph>
                <Pain />
                The side bar lists my chapters and then, under How this book is built, The Sheet. A reader of
                my story meets the book's machinery in its contents.
            </Paragraph>
            <Paragraph>
                <Solution />
                What a book is built with stands at the foot of the contents in a smaller voice, or is reached
                from the manual, which is where the parts live.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The design book's page</Heading>
            <Paragraph>
                <Image>![[ design-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                Ten switches stand in the head: six arrangements, three tones and the outline. In the frame
                file an arrangement is an attribute of the document, never a control; every book here has both
                bars; and pressing top or rail runs the table of contents across the top of the page as a
                column of rows.
            </Paragraph>
            <Paragraph>
                <Solution />
                Two switches, named for what they are: white, and the black side bar. The blue with the black
                top is sketched before it is a switch. An arrangement belongs to a book, fixed where the book is
                registered, and the family of six goes. Done the same day: the layout carries one grid, the
                frame's, and the manual lost two chapters it no longer needed.
            </Paragraph>
        </Section>
        <Section>
            <Heading>On a phone</Heading>
            <Paragraph>
                <Image>![[ library-phone.png ]]</Image>
                <Image>![[ reference-manual-phone.png ]]</Image>
                <Image>![[ story-phone.png ]]</Image>
                <Image>![[ design-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                Every page runs past the right edge: 31 elements on the library's page, 82 on the manual's, 19
                on my story's, 52 on the design book's. In the frame file the subjects row and the holds row
                scroll sideways under a fixed me, and nothing else is wider than the screen.
            </Paragraph>
            <Paragraph>
                <Solution />
                The two rows scroll and nothing else is wider than the screen, measured by the camera's own
                count, which is zero on every concept file.
            </Paragraph>
            <Paragraph>
                <Pain />
                The open card's × sits under the bar's fixed face, so it cannot be pressed. A manual chapter
                opens with its title under the sticky bar. Every bar's subjects are clipped under the face,
                where the frame file leaves a margin for it. The manual's contents are one pill row three
                thousand pixels long, where 28 has a sticky picker. My story's short front sheet stops
                mid-screen over white.
            </Paragraph>
            <Paragraph>
                <Solution />
                The bar keeps the frame file's margin for the face; what opens under a sticky bar leaves room
                for it; the × stands clear of the face; the manual's chapters on a phone are picked, not
                scrolled; the sheet fills the screen as 29's does.
            </Paragraph>
        </Section>
    </Chapter>
);
