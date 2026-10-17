import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Semantics of Self-Identification, Self-Reference, and Self-Description in SRT ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “The Semantics of Self-Identification, Self-Reference, and Self-Description
            in SRT”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
