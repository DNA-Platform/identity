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
                of <Means>$[[ 15 ]]( ./A Black Top Bar and an Opal Side Bar )</Means>, the manual read two ways
                in <Means>$[[ 28 ]]( ./The Code in Front )</Means> and <Means>$[[ 31 ]]( ./The Words in Front )</Means>,
                and the sheet of <Means>$[[ 29 ]]( ./The Reading View, in the Frame, with the Chapters at the Side )</Means>.
                The desk comes first by far. The phone needs a good story too.
            </Paragraph>
            <Paragraph>
                What I found is written as a pain, in the words of the person who met it, and then what solves
                it. A solution is sketched in HTML before anything is coded, because designing is easier in
                HTML, and a sketch starts from comparables. When a house is sold, it is priced from the houses
                like it; a design is drawn from the sites that already do the interaction well, with the elements
                taken from each named, before a line of HTML is written. Nobody simply inventing a design would
                invent two different painful blues side by side, as my story had, and that is what inventing
                without a comparable produces.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The comparables</Heading>
            <Paragraph>
                For the shelf: Apple Books, which 1 is after, and the shelf apps beside it, Literal and
                Hardcover — a shelf is scanned at a glance, the covers pop, and one line stands under each.
                For the manual: Stripe's documentation, whose worth is the relationship between its prose and
                its code — the code re-pins to the part being read — and whose rail is organized by object,
                never by method, which here means by part and never by file; and Mintlify's documented system,
                a side bar of 240 pixels, prose capped at 720, a body of 16 pixels and code of 14 in a mono,
                borders at seven per cent, soft text at sixty, and the current item marked by the colour of its
                text alone with nothing filled behind it. For my story: Matter's reading themes, which reduce
                contrast by day and bring richness at night with a hint of the reader's own palette — the rule
                that ends the two blues: a dark paper carries a hint of its own book's hue and never a foreign
                one. For the design book: Mobbin's cards, the screen first and the name under it, the open one
                across the whole screen with a close.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the drive decided, and still holds</Heading>
            <Paragraph>
                The catalogue is the first book on its own shelf, as my own books are black in 1 and in 15.
                Pressing it opens its entry, which says what it is; opening the book from there brings this
                page back, showing that I was just reading about the thing I am on. That is the closure this
                library has — the library catalogues itself — and it is shown, never avoided.
            </Paragraph>
            <Paragraph>
                A row in the contents does one thing when pressed, and the row that is lit is the thing shown.
                An entry for a book filed here opens that entry on the page, as
                <Means>$[[ 32 ]]( ./The Library's Page, in the Frame of 15 )</Means> sketches; a group heading
                is a label, not a link; one row is lit at a time. Under a cover on the shelf, one line; what a
                book is about is read on its entry, not on the shelf.
            </Paragraph>
            <Paragraph>
                Every size in a theme is the file's value, written beside it, and the wash is kept for a card
                that invites a press. No developer's tool stands on a reader's page: the outline button went,
                and the workbench is where classes are looked at.
            </Paragraph>
            <Paragraph>
                I do not want a book to have a colour. I want it to have a colour scheme, and the scheme
                influences how it looks as a book; every book has a new scheme of its own, not the site's scheme
                with one hue swapped. A scheme is a set of roles, each read somewhere — a ground, words, one hue
                read as the dot beside the book's name and the hairline under it when it is open, a paper and an
                ink to read on — and a theme names its fields for those roles, never for the colours, so that a
                value cannot wander into a role it was not designed for. The coming-soon page is used to infer
                the elements of my aesthetic, not copied: I hate out-of-the-tube effects and prefer subtlety and
                nuance, the tiny detail that lives at the edge of consciousness and has a function, the hairline
                that says where I am, the dot that says which book. A subtle thing that does nothing goes, and
                the opal and every shimmer that followed it are not for this library.
            </Paragraph>
            <Paragraph>
                My story opens on a chapter, dated at its top, with the folio and the turns at the foot, as 29
                has it; a short entry is still a page when the title, the drop cap and the foot are there. What a
                book is built with stands at the foot of the contents as its appendix, in a smaller voice, and is
                left out of the folio and the turns. An arrangement belongs to a book, fixed where the book is
                registered, and the switches a book draws are named for what they are, a tone, a paper.
            </Paragraph>
            <Paragraph>
                On a phone the two rows of the bar scroll and nothing else is wider than the screen, measured by
                the camera's own count, which is zero on every page; the bar keeps the frame file's margin for
                the face, and what opens under a sticky bar leaves room for it.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the sketch phase ended</Heading>
            <Paragraph>
                <Image>![[ library-black.png ]]</Image>
                <Image>![[ design-cobalt.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Pain />
                I hate what I see here. My brain wants to vomit looking at it. We are a long, long way from
                something usable. Those books are huge. Is there even a book selection view that tells you
                something about one? Maybe there is something useful the UI on this page can do. The black is
                not working; it is too loud. Loud cobalt is not subtle. I feel so much pain and sadness looking
                at this work.
            </Paragraph>
            <Paragraph>
                <Solution />
                Go light. Gentle. Pastels with accent colours, a little more in the blue, green and purple
                than the yellow, orange and pink, with interesting contrasts, and several colours that span
                the wheel so that no book is any one thing and no one colour occupies so much. Be thoughtful
                about font, font size and palette. And stop here: this is where the sketch phase ends, and the
                design phase begins from each book's own data in HTML, designed together, one book at a time,
                in <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> and <Means>$[[ The Manual's Page ]]( ./The Manual's Page )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
