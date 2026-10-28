import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: Godel &amp; Goldbach: A Twin Pair of Prime Mathematicians ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: Godel &amp; Goldbach: A Twin Pair of Prime Mathematicians”, as it
            was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
