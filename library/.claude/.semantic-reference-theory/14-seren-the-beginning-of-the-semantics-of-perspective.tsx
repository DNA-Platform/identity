import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Seren: The Beginning of the Semantics of Perspective ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Seren: The Beginning of the Semantics of Perspective”, as it was uploaded
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
