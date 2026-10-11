import { Append, Chapter, Heading, Image, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Design, Desk, Exhibit, Phone, Thumbnail, Volume } from '../.manual/.book';
import DesignCover from './.cover.tsx';

export default () => (
    <Chapter>
        <Part>The designs</Part>
        <Design>$[[ Dougs Design ]]</Design>
        <Volume>{DesignCover()}</Volume>
        <Title>[[ The Design Book's Page ]]</Title>
        <Section>
            <Heading>This book, as built</Heading>
            <Paragraph>
                <Exhibit />
                <Image>![[ built-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                This book's own page, the third designed from a print and the one that designs the book it stands in:
                this library contains all of its own designs, and this chapter is the one entry that is its own
                definition. How it was decided is <Means>$[[ the story ]]( ./Designing this book )</Means>; this is
                the book as bound, open on its first chapter, and the page it was designed on is below.
            </Paragraph>
        </Section>
        <Section>
            <Heading>What the page became</Heading>
            <Paragraph>
                The page became a type of book and a vocabulary, kept in the reference manual so another portfolio
                can be written from them. The type is <Means>$[[ The Portfolio ]]( Dougs Reference Manual / The Portfolio )</Means>,
                which keeps every chapter in a part, asks every design for its exhibit, and registers this book's
                theme, the exhibition. A design chapter and its room, with the plate and the places it is built in,
                are <Means>$[[ The Room ]]( Dougs Reference Manual / The Room )</Means>. The sketches by number, the
                card, the concept opened and the strip of thumbnails are <Means>$[[ The Gallery ]]( Dougs Reference Manual / The Gallery )</Means>,
                over the words a concept's section says, in <Means>$[[ The Concept ]]( Dougs Reference Manual / The Concept )</Means>.
                What a paragraph of the story is said to be, a question, an answer, a decision, a pain or what
                solves it, is <Means>$[[ The Paragraphs ]]( Dougs Reference Manual / The Paragraphs )</Means>. The
                print the page was designed on comes from <Means>$[[ The Print ]]( Dougs Reference Manual / The Print )</Means>,
                and its photographs from <Means>$[[ The Camera ]]( Dougs Reference Manual / The Camera )</Means>.
            </Paragraph>
            <Paragraph>
                That the type holds for a book other than this one was proved the day it was built: a second
                portfolio of seven files and 237 lines, a story, a design and two sketches, written from the
                manual's words alone, bound, photographed, and thrown away. This is its page.
            </Paragraph>
            <Paragraph>
                <Image>![[ second-portfolio.png ]]</Image>
            </Paragraph>
        </Section>
        <Section>
            <Heading>Designed on page 036</Heading>
            <Paragraph>
                <Desk />
                <Image>![[ 036-desk.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Phone />
                <Image>![[ 036-phone.png ]]</Image>
            </Paragraph>
            <Paragraph>
                <Thumbnail />
                <Image>![[ 036-small.png ]]</Image>
            </Paragraph>
        </Section>
        <Append
            identifier="036"
            type=".html"
        >
            ![[ 036.html ]]
        </Append>
    </Chapter>
);
