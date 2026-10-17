import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ On the Formal Requirement of Symbolism: How Meaning achieves Consciousness ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “On the Formal Requirement of Symbolism: How Meaning achieves
            Consciousness”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
