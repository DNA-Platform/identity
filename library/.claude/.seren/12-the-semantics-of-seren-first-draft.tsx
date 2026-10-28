import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ The Semantics of Seren - First Draft ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “The Semantics of Seren - First Draft”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
