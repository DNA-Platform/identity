import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief } from './10-the-manual~annotations.tsx';
import { Spread } from './10-the-manual~code.tsx';
import { Keyed } from './o1-the-key~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Keyed>$[[ ./A Tool ]]</Keyed>
        <Title>[[ The Print ]]</Title>
        <Paragraph>
            <Brief />
            The tool that makes a design page from a book's print, so a design is drawn on the book's own
            words and carried back as it is.
        </Paragraph>
        <Section>
            <Heading>A design is drawn on the book's own words</Heading>
            <Paragraph>
                In the design phase I do not sketch a page; I design the page itself. The tool takes a book's
                print, the page the binder wrote exactly as the site serves it, and makes a design page from it:
                the five regions the base book draws, the bar, me, the table of contents, the head and the pages,
                each page the chapter itself, the open one shown and the rest hidden, with the framework's class
                names and the highlighter's kept on every element and nothing else, and every picture's address made relative to the
                page so it shows from the file. The page gets a style of its own in place of the printed sheet,
                and I open it from the file in a browser. Because every element wears the name the live book
                wears, every rule written on the page can be carried into the book's theme as it is, and because
                every word is the book's, nothing on the page is pretend.
            </Paragraph>
            <Paragraph>
                A page that exists keeps its style and its script; the tool refreshes only the print between
                them, so after a bind the words on a design page are the book's words again. The three pages made
                this way are the design book's own, <Means>$[[ The Bookshelf ]]( Dougs Design / The Bookshelf )</Means>, <Means>$[[ The Manual's Page ]]( Dougs Design / The Manual's Page )</Means> and <Means>$[[ The Design Book's Page ]]( Dougs Design / The Design Book's Page )</Means>;
                the method is the branch library's chapter beside the framework, Designing a Page from Its
                Print, and the photographs come after, from <Means>$[[ the camera ]]( ./The Camera )</Means>.
            </Paragraph>
        </Section>
        <Append
            identifier="print"
            type=".mjs"
        >
            ![[ print.mjs ]]
        </Append>
    </Chapter>
);
