import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 12..1 - Developing First-Person Perspective ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “12.1 - Developing First-Person Perspective.md”, as it was uploaded to
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
