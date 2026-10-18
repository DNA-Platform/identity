import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ index ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “index.html”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".html"
        >
            ![[ file.html ]]
        </Append>
    </Chapter>
);
