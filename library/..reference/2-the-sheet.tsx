import { Bold, Document, Heading, Italics, Paragraph, Resource, Section, Title } from '@dna-platform/public';
import { $Article, Comments } from './.book';

export default class $TheSheet extends $Article {
    print() {
        return (
            <Document>
                <Title>The Sheet</Title>
                <Section>
                    <Heading>What it specifies</Heading>
                    <Paragraph>
                        The single theme every page in this library wears. It is the encyclopedia&rsquo;s own sheet
                        with one addition, and the addition belongs to this library rather than to the framework. It
                        names no colour, font or measurement; values are read from the theme above it. What this file
                        owns is the rules.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>What a book gets</Heading>
                    <Paragraph>
                        A reading column reserved for chapters carrying the article type, so prose lands in the middle
                        and apparatus stands where it was written. An infobox floated at the head of a lead, and the
                        plate stands in it the way a portrait does, in the room the encyclopedia gives a picture, its
                        caption and its rows. A contents rail that becomes a block above the article below 1120
                        pixels.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The byline</Heading>
                    <Paragraph>
                        The encyclopedia&rsquo;s sheet hides a cover&rsquo;s author and subject outright, and for a
                        general encyclopedia that is correct: an article has no single author and files its subject in
                        a category bar at the foot. <Bold>Every cover in this library carries both</Bold>, and they are
                        the two links that make it a connected library rather than five separate pages. They are put
                        back, one at each end of the line beneath the tabs.
                    </Paragraph>
                    <Paragraph>
                        That line is the position an encyclopedia reserves for naming itself, which is the first place
                        a reader looks to find out whose page this is. The label is a label and not a headline, so it
                        is not set bold. It sits <Italics>between</Italics> the rules rather than below them: a
                        wikipedia tab row is a namespace group on the left and an action group on the right, and this
                        library has only the right one, so the left half of that row was empty and the author was
                        being pushed onto a line of its own.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The masthead and its mark</Heading>
                    <Paragraph>
                        Laid out as a wikipedia masthead is: the mark on the left, the name beside it, the tagline
                        tucked under the name, the three on one baseline block. The mark is the plate&rsquo;s own
                        untouched state, drawn small and still, so the library&rsquo;s logo is a picture of the thing
                        the library does.
                    </Paragraph>
                    <Paragraph>
                        <Bold>Two links, not one.</Bold> The mark is a section of its own that refers to the plate on
                        the summit, so pressing the logo lands on the painting it is cut from. The name and the
                        tagline are a second section that refers to the library. A section given a reference draws as
                        one anchor, and that is the whole of how each half became a link; nothing in this sheet knows
                        that either of them is one.
                    </Paragraph>
                    <Paragraph>
                        The frame is a grey hairline a few pixels out from the plate, and the plate is a block inside
                        it, so the frame hugs its picture and the two sit inline with the name. The gap between them
                        belongs to the <Italics>frame</Italics> and not to the picture, because a plate writes its own
                        centring as an inline style and <Bold>an inline style beats every rule in every sheet</Bold>.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>The rail</Heading>
                    <Paragraph>
                        The rail carries two lists: the chapters of this book, and the books this one catalogues. A
                        chapter is its name. A catalogued book is a row of two links: its name, which leads to the
                        book&rsquo;s own synopsis, and after a non-breaking space a small square, which leads to the
                        book. The square is the book mention with nothing to say, drawn as an empty anchor, and this
                        sheet gives an empty anchor its size and its border. The same square stands after a
                        cover&rsquo;s title and leads to the catalogue the book is filed under; it says what a thing is
                        about, so it stands at the end of what it follows and never in front as a bullet would.
                    </Paragraph>
                    <Paragraph>
                        <Bold>It was the other way round and that was the fault.</Bold> A row used to be a reference
                        carrying the words with the mention beside it as a marker, so the mention&rsquo;s own text was
                        set to nothing. When the table began listing the books by mention, the one element carrying a
                        name was the one element the sheet was hiding: six squares nine pixels across, each holding
                        the right name and the right address, none of them readable. Now the name is the
                        chapter&rsquo;s and the square says nothing on purpose.
                    </Paragraph>
                    <Paragraph>
                        The two labels above those lists are set small, unemphasised and in the muted ink. A label in a
                        rail names a list; it is not a heading in the document and should not be read as one. An
                        encyclopedia does not set them in bold and neither does this.
                    </Paragraph>
                </Section>
                <Section>
                    <Heading>Cautions</Heading>
                    <Paragraph>
                        <Bold>A property prefix is an identifier.</Bold> A selector is declared once and every property
                        following it belongs to that selector until the next declaration. Two themes in one line of
                        inheritance must not spend the same prefix: re-binding one does not rename a group, it directs
                        the parent&rsquo;s properties at the child&rsquo;s selector.
                    </Paragraph>
                    <Paragraph>
                        Observed: this sheet used the encyclopedia&rsquo;s prefix for the main menu mark to dress the
                        library logo, which carries a width, a height and a background. All of it was pointed at the
                        logo as well. No warning is issued, and it reads as a styling fault for as long as you let it.
                    </Paragraph>
                    <Paragraph>
                        <Bold>Rearrangement is not safe.</Bold> Because order determines ownership, moving a group
                        silently redirects rules. If this file is split or reordered, compare the emitted sheet before
                        and after rather than trusting the file to be equivalent.
                    </Paragraph>
                </Section>
                <Comments by="Gabby">
                    <Paragraph>
                        I chose an encyclopedia because it is the layout most people have already learned to read, and
                        a library should not make a reader learn a second thing before it makes them learn a first.
                        Everything I set here is a rule; every value comes from above. That is what lets one piece of
                        writing survive being dressed twice.
                    </Paragraph>
                    <Paragraph>
                        The caption under the plate is gone, deliberately. It used to explain the painting, and the
                        instruction that removed it was right: art speaks for itself, and an interactive surprise
                        stops being one the moment it is announced.
                    </Paragraph>
                </Comments>
                <Resource>.tsx</Resource>
            </Document>
        );
    }
}
