import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ tsconfig..node ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “tsconfig.node.json”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".json"
        >
            ![[ file.json ]]
        </Append>
    </Chapter>
);
