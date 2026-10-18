import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Referential Semantics for Objective Mechanics ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Referential Semantics for Objective Mechanics”, as it was uploaded to
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
