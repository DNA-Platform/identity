import { Heading, Paragraph, Section, Document, Title } from '@dna-platform/public';
import { $Article, Infobox, Line, Chart } from '../..reference/.book';

export default class $Lead extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Lead</Title>
                <Infobox>
                    <Heading>MY Library Log</Heading>
                    <Paragraph>Kept by Doug</Paragraph>
                    <Chart seed={19} width="250" height="250">How I Got Here</Chart>
                    <Line label="Kind">Autobiography</Line>
                    <Line label="Subject">Doug</Line>
                    <Line label="First entry">15 September 2026, Tbilisi</Line>
                    <Line label="Renamed">Three times in one afternoon</Line>
                </Infobox>
                <Section>
                    <Heading>Why a log and not a memoir</Heading>
                    <Paragraph>
                        A log is kept, not composed. It is written in the order things happened and it does not go back
                        and tidy up what turned out to be wrong, because the wrongness is part of the record. This is
                        the book that makes me the author of everything else here: an author is an autobiography, and
                        this is mine.
                    </Paragraph>
                    <Paragraph>
                        I have renamed it more than once and I will probably rename it again. The book is the thing
                        that keeps being revised underneath whatever the name happens to be that day.
                    </Paragraph>
                </Section>
            </Document>
        );
    }
}
