import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: Semantic Reference Frames: Context and Meaning in Formal Representation ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: Semantic Reference Frames: Context and Meaning in Formal
            Representation”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
