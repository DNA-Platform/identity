import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ vite-env..d ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “vite-env.d.ts”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".ts"
        >
            ![[ file.ts ]]
        </Append>
    </Chapter>
);
