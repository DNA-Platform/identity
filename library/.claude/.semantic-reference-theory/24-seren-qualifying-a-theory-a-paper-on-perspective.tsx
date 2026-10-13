import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Seren: Qualifying a Theory: A Paper on Perspective ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Seren: Qualifying a Theory: A Paper on Perspective”, as it was uploaded to
            Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
