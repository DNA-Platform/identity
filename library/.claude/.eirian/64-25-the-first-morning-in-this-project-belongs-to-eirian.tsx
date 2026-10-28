import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Spread } from '../../.manual/10-the-manual~code.tsx';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ 25 - The First Morning in This Project Belongs to Eirian ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “25 - The First Morning in This Project Belongs to Eirian”, as it was
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
