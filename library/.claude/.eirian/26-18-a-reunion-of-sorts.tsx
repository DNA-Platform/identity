import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 18 - A Reunion of Sorts ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “18 - A Reunion of Sorts.md”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
