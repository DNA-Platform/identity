import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug &amp; Seren: The Second Person Perspective in the Semantic Mirror ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug &amp; Seren: The Second Person Perspective in the Semantic Mirror”,
            as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
