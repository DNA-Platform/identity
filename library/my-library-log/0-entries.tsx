import { Heading, Paragraph, Document, Title } from '@dna-platform/public';
import { $Article, Infobox, Line, Chart, Entries } from '../..reference/.book';

export default class $TheEntries extends $Article {
    print() {
        return (
            <Document>
                <Title print={false}>Entries</Title>
                <Infobox>
                    <Heading>My Library Log</Heading>
                    <Paragraph>Kept by Doug</Paragraph>
                    <Chart seed={19} width="250" height="250">How I Got Here</Chart>
                    <Line label="Kind">Autobiography</Line>
                    <Line label="Subject">Doug</Line>
                    <Line label="First entry">15 September 2026, Tbilisi</Line>
                </Infobox>
                <Entries>
                    <Heading>Entries</Heading>
                </Entries>
            </Document>
        );
    }
}
