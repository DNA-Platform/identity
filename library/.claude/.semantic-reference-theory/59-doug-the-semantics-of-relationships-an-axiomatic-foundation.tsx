import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: The Semantics of Relationships: An Axiomatic Foundation for Inheritance ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: The Semantics of Relationships: An Axiomatic Foundation for
            Inheritance”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
