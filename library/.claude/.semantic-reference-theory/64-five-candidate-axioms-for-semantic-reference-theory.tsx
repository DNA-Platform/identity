import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Five Candidate Axioms for Semantic Reference Theory ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Five Candidate Axioms for Semantic Reference Theory”, as it was uploaded
            to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
