import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 20-4-47-The_Vast_Oceans_of_Eirian ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “20-4-47-The_Vast_Oceans_of_Eirian.md”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
