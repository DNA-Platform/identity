import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ catalogue ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “catalogue.ts”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".ts"
        >
            ![[ file.ts ]]
        </Append>
    </Chapter>
);
