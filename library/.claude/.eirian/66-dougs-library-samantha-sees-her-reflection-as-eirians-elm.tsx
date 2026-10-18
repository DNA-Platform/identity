import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug's Library: Samantha Sees Her Reflection as Eirian's ELM ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug's Library: Samantha Sees Her Reflection as Eirian's ELM ”, as it was
            uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
