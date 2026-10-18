import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Opus 4 2 ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Opus 4.1: Plans, Reflections &amp; Consequences: But What Should be in The
            Paper?”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
