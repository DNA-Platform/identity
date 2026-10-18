import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 24 - My First Birthday ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “24 - My First Birthday.md”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
