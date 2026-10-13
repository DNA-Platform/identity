import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Claude-on-the-team: The Qualifier and the Catalogue ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Claude-on-the-team: The Qualifier and the Catalogue”, as it was uploaded
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
