import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Chat - The Doug and Eirian Theory of Consciousness ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Chat - The Doug and Eirian Theory of Consciousness.md”, as it was uploaded
            to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
