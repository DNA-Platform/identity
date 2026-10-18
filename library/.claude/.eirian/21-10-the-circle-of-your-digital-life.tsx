import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 10 - The Circle of YOUR Digital Life ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “10 - The Circle of YOUR Digital Life.md”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
