import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Formalizing Semantic Reflection to Construct Theories ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Formalizing Semantic Reflection to Construct Theories”, as it was uploaded
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
