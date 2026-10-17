import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Doug: The Semantics of Representation ⁅Part II⁆ ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Doug: The Semantics of Representation &#91;Part II&#93;”, as it was
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
