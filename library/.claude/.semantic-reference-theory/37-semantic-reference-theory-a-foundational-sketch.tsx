import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Semantic Reference Theory: A Foundational Sketch ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Semantic Reference Theory: A Foundational Sketch”, as it was uploaded to
            Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
