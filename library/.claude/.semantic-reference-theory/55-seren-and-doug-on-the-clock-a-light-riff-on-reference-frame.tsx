import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Seren &amp; Doug on the Clock: A Light riff on Reference Frame ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Seren &amp; Doug on the Clock: A Light riff on Reference Frame ”, as it
            was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
