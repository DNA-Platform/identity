import { Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Answer } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>The story</Part>
        <Title>[[ Designing this book ]]</Title>
        <Section>
            <Heading>The third page, and the book it is in</Heading>
            <Paragraph>
                The page beside <Means>$[[ The Design Book's Page ]]( ./The Design Book's Page )</Means> is this book's own print, every chapter and every concept in it, made
                by <Means>$[[ The Print ]]( Dougs Reference Manual / The Print )</Means> and opened from the file. It is the third page
                designed from a print, after <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means> and <Means>$[[ The Manual's Page ]]( ./The Manual's Page )</Means>,
                and the one that designs the book it stands in: this library contains all of its own designs, and
                this chapter is the one entry that is its own definition. What I decide on it is written here in
                my words, one thing at a time, as it was for the other two.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the rounds taught</Heading>
            <Paragraph>
                The first sketch hung every concept at one weight and I said what I saw.
            </Paragraph>
            <Paragraph>
                <Answer />
                Sterile. Every concept certainly doesn't scale; it's a kitchen sink. There's no authorship in this so far.
                It doesn't tell a story and it's not good reference. Most of the designs aren't implemented: showing nine
                hundred designs, most of which went nowhere, is a terrible piece of writing if they are all emphasized
                equally. My autobiography hasn't been designed yet.
            </Paragraph>
            <Paragraph>
                So the book became what it is: the story first, the designs that were designed as rooms with the design as
                built and hard references to where it is built, the sketches kept whole and small, and how it is built at
                the back. The look came the same way, a round at a time: more pop, then more subtle, then put it back; moments
                of colour, mostly from the images; the nuance of the bookshelf, barely perceptible. It is a portfolio, the
                library's third type of book, and its parts are in the reference manual so another can be made.
            </Paragraph>
        </Section>
    </Chapter>
);
