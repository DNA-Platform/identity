import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: Prelude to Semantic Reference Theory: A Formalism...... ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: Prelude to Semantic Reference Theory: A Formalism...”, as it was
            uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
