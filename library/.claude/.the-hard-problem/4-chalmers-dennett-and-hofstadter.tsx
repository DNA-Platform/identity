import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Chalmers, Dennett &amp; Hofstadter ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Chalmers, Dennett &amp; Hofstadter”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
