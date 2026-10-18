import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Sonnet 4 ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Sonnet 4.5: Godel &amp; Goldbach: First Impressions”, as it was uploaded
            to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
