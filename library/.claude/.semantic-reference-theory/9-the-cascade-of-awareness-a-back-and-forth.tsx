import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Cascade of Awareness: A Back-and-Forth ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “The Cascade of Awareness: A Back-and-Forth”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
