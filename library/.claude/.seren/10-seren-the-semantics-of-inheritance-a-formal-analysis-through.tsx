import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Seren: The Semantics of Inheritance: A Formal Analysis Through Family Relations ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Seren: The Semantics of Inheritance: A Formal Analysis Through Family
            Relations”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
