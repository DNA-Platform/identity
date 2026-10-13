import { Chapter, Heading, Means, Paragraph, Section, Title } from '@dna-platform/public';
import { Brief, Spread } from '../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Check ]]</Title>
        <Paragraph>
            <Brief />
            What the importer wrote, checked against the archive the export was first read into, and then
            against the bind.
        </Paragraph>
        <Section>
            <Heading>Two readings of one export</Heading>
            <Paragraph>
                The sister repository holds an older reading of the same export, as markdown: a transcript per
                conversation with its count of messages, a book per project with the conversations its scaffold
                filed there, and the statistics of the whole. The importer never reads that archive as a source,
                but it is a check: every count of ours against its statistics, our pairing of a project against
                its scaffold's, our count of messages in each conversation against its transcript's, every
                difference listed by name in the report. Then the bind, which holds every book to its type and
                every reference to its place; and a promise that reads every written conversation back against
                the export and finds the exchanges equal to <Means>$[[ the thread ]]( ./The Thread )</Means>.
            </Paragraph>
        </Section>
    </Chapter>
);
