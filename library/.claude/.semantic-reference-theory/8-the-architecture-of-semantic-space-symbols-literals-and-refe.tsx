import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Architecture of Semantic Space: Symbols, Literals, and Referential Structure ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “The Architecture of Semantic Space: Symbols, Literals, and Referential
            Structure”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
