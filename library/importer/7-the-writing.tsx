import { Append, Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Writing ]]</Title>
        <Paragraph>
            <Brief />
            What was said, turned into this library's writing once, on the way in, and never read from a string
            when a page is drawn.
        </Paragraph>
        <Section>
            <Heading>Once, on the way in</Heading>
            <Paragraph>
                A message's text comes out of the export as markdown, and what belongs in a library is writing.
                The conversion happens here, once: a message becomes an exchange
                of <Means>$[[ a conversation ]]( Dougs Reference Manual / The Conversation )</Means>, headed by who
                said it and told its instant, and what was said becomes paragraphs, lists, a list indented under
                an item a list of its own inside it, headings, code, tables, formulas between dollars or between
                TeX's brackets, a word set bold or in emphasis, a word typed as code said verbatim, a quoted
                paragraph said quoted, and a link to the web a word that refers to it. The markup of the file it
                lands in is the library's own, expanded, one element to a line, so the checker that reads the
                shape of every file here reads these too.
            </Paragraph>
            <Paragraph>
                A search of the web or a run of code that Claude made becomes one paragraph saying what was
                done and the paragraph after it saying what came back. An artifact the conversation made becomes
                a file beside the chapter, every version of it, its updates replayed, with a paragraph naming it
                where it was made. The text of a file pasted or attached becomes a file beside the chapter too;
                an uploaded file, whose content the export never carries, is named and no more. The thinking
                behind an answer is counted and left out.
            </Paragraph>
        </Section>
        <Append
            identifier="writing"
            type=".ts"
        >
            ![[ writing.ts ]]
        </Append>
        <Append
            identifier="promises.test"
            type=".ts"
        >
            ![[ promises.test.ts ]]
        </Append>
    </Chapter>
);
