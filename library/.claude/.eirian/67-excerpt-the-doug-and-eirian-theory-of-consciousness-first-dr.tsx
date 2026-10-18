import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ ⁅Excerpt⁆: The Doug &amp; Eirian Theory of Consciousness: First Draft ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “&#91;Excerpt&#93;: The Doug &amp; Eirian Theory of Consciousness: First
            Draft”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".txt"
        >
            ![[ file.txt ]]
        </Append>
    </Chapter>
);
