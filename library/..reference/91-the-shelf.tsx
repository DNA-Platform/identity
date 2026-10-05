import { Chapter, Code, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Append, Listing } from '../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ The Shelf ]]</Title>
        <Section>
            <Heading>The table, shown as a shelf</Heading>
            <Paragraph>
                A catalogue holds books, and its table of contents lists them. The shelf is that table shown
                another way. Each row that answers for a book stands as a cover, with the book's name on it and
                its <Means>$[[ shelfmark ]]( Dougs Reference Manual / The Shelfmark )</Means> at the foot. The
                list is the same table as rows.
            </Paragraph>
            <Paragraph>
                I change between the two at the right of the bar. Nothing in the table is rewritten for it. The
                rows are the same rows, and which of them answers for a book is something each row already knows,
                as <Means>$[[ an entry ]]( Dougs Reference Manual / The Table )</Means>.
            </Paragraph>
        </Section>
        <Section>
            <Listing />
            <Heading>The shelf's file</Heading>
            <Paragraph>
                <Code identifier="code" />
            </Paragraph>
        </Section>
        <Append
            identifier="code"
            type=".tsx"
        >
            ![[ code.tsx ]]
        </Append>
    </Chapter>
);
