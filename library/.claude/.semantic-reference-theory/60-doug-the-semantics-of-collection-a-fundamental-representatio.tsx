import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: The Semantics of Collection: A Fundamental Representational Form ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: The Semantics of Collection: A Fundamental Representational Form”,
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
