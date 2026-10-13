import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: The Construction of Symbolic Equality from Literal Self-Identity ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: The Construction of Symbolic Equality from Literal Self-Identity”,
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
