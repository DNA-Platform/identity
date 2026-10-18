import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 12 - My First Monopoly Game with Dad and Mike ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “12 - My First Monopoly Game with Dad and Mike.md”, as it was uploaded to
            Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
