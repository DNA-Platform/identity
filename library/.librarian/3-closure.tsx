import { Chapter, Date, Heading, Line, List, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Dated } from '../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 October 2026](2026-10-05)</Date>
        </Dated>
        <Title>[[ Closure ]]</Title>
        <Section>
            <Heading>A script outside the book</Heading>
            <Paragraph>
                While the designs were being drawn, the sketches were photographed by a script kept outside the
                library, in an archive. For a while that script was also writing chapters of the design book, from
                files it kept beside itself. I asked why it was being edited at all. There shouldn't be any script
                outside. If a book needs a tool, the tool belongs in the book's appendix, beside the chapter that
                documents it.
            </Paragraph>
            <Paragraph>
                So the script was retired. What it did is
                now <Means>$[[ the camera ]]( Dougs Design / The Camera )</Means>, a chapter at the back of the
                design book that prints the file that takes the photographs. Each sketch is shown once,
                in <Means>$[[ Every Concept ]]( Dougs Design / Every Concept )</Means>, with its page and its two
                photographs kept beside that chapter. Any other chapter links to a sketch by its number,
                as <Means>$[[ the designs I am going with ]]( Dougs Design / The Designs I Am Going With )</Means> does,
                and <Means>$[[ the concept ]]( Dougs Design / The Concept )</Means> says how. My
                answers had been kept in a file outside as well, and are now written by hand under their questions
                in <Means>$[[ What I Am Asked ]]( Dougs Design / What I Am Asked )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Heading>The code lives inside</Heading>
            <Paragraph>
                The code that builds a book lives inside the book and is documented along with it,
                in <Means>$[[ my own voice ]]( Dougs Story / Ghost-Writing )</Means>. That is the closure I am
                aiming for. A library is not a thing that has code and context that are separated: to be caught up
                on how this library is built, one reads the library.
            </Paragraph>
        </Section>
        <Section>
            <Heading>Where the parts are</Heading>
            <Paragraph>
                The parts every book shares are in <Means>$[[ Dougs Reference Manual ]]</Means>.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Means>$[[ The book ]]( Dougs Reference Manual / The Book )</Means>, which every book here is.
                </Line>
                <Line>
                    <Means>$[[ The listing ]]( Dougs Reference Manual / The Listing )</Means>, which is how a book shows a file a chapter keeps beside it.
                </Line>
                <Line>
                    <Means>$[[ The theme ]]( Dougs Reference Manual / The Theme )</Means>, which holds almost nothing until the designs are built.
                </Line>
                <Line>
                    <Means>$[[ The date ]]( Dougs Reference Manual / The Date )</Means>, which a chapter like this one carries.
                </Line>
                <Line>
                    <Means>$[[ The outline ]]( Dougs Reference Manual / The Outline )</Means>, which shows a book the way the code sees it.
                </Line>
                <Line>
                    <Means>$[[ Initializing a library ]]( Dougs Reference Manual / Initializing a Library )</Means>, which says how one like this is begun and how it is bound.
                </Line>
            </Paragraph>
            <Paragraph>
                The design book carries its own parts at its back.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Means>$[[ The concept ]]( Dougs Design / The Concept )</Means>, a numbered sketch of one idea.
                </Line>
                <Line>
                    <Means>$[[ The paragraphs ]]( Dougs Design / The Paragraphs )</Means>, which say what was asked, what I said and what I chose.
                </Line>
                <Line>
                    <Means>$[[ The camera ]]( Dougs Design / The Camera )</Means>, which photographs each sketch.
                </Line>
            </Paragraph>
            <Paragraph>
                This book and the catalogue carry none of their own yet.
            </Paragraph>
            <Paragraph>
                An appendix reads like a page of the reference manual, because a chapter that carries its file is
                the same kind of chapter wherever it is. So it can spin off into a book of its own when its
                book grows too large, and nothing in it is rewritten.
            </Paragraph>
        </Section>
    </Chapter>
);
