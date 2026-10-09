import { Append, Chapter, Heading, Means, Paragraph, Part, Section, Title } from '@dna-platform/public';
import { Manual } from '../.manual/.book';

export default () => (
    <Chapter>
        <Part>How this book is built</Part>
        <Manual />
        <Title>[[ The Print ]]</Title>
        <Section>
            <Heading>A design is drawn on the book's own words</Heading>
            <Paragraph>
                In the design phase I do not sketch a page; I design the page itself. The tool beside this chapter
                takes a book's print — the page the binder wrote, exactly as the site serves it — and makes a design
                page from it: the bar, me, the table of contents, the front and every chapter's leaf, hidden, with the
                framework's class names kept on every element and nothing else. The page gets a style of its own
                in place of the printed sheet, and I open it from the file in a browser. Because every element wears
                the name the live book wears, every rule written on the page can be carried into the book's theme
                as it is, and because every word is the book's, nothing on the page is pretend.
            </Paragraph>
            <Paragraph>
                A page that exists keeps its style and its script; the tool refreshes only the print between them, so
                after a bind the words on a design page are the book's words again. The first page made this way
                is <Means>$[[ The Bookshelf ]]( ./The Bookshelf )</Means>; its own additions — the desk, the marks,
                the two states — are written in its script and stand on the print's names. The method as a whole,
                for anyone designing a book of this library, is the branch library's chapter beside the framework,
                Designing a Page from Its Print; the photographs come later, from <Means>$[[ the camera ]]( ./The Camera )</Means>.
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
