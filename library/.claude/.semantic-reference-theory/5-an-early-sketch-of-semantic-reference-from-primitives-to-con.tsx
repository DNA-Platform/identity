import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ An Early Sketch of Semantic Reference: From Primitives to Consciousness ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “An Early Sketch of Semantic Reference: From Primitives to Consciousness”,
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
