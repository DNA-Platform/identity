import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Claude &amp; Doug: Designing Role-Based Reflection for the Art of It! ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Claude &amp; Doug: Designing Role-Based Reflection for the Art of It!”, as
            it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
