import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ App ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “App.css”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".css"
        >
            ![[ file.css ]]
        </Append>
    </Chapter>
);
