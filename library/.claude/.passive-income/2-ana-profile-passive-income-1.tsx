import { Append, Chapter, Paragraph, Title } from '@dna-platform/public';
import { Brief, Spread } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Spread />
        <Title>[[ Ana_Profile_Passive_income ❨1❩ ]]</Title>
        <Paragraph>
            <Brief />
            A knowledge file of the project, “Ana_Profile_Passive_income (1).md”, as it was uploaded to Claude.
        </Paragraph>
        <Append
            identifier="file"
            type=".md"
        >
            ![[ file.md ]]
        </Append>
    </Chapter>
);
