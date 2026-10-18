import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Abstract ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Abstract.tsx”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".tsx"
        >
            ![[ file.tsx ]]
        </Append>
    </Chapter>
);
