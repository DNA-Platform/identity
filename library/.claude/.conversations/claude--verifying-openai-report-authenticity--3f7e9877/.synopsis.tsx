import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person shared what appeared to be a screenshot or report related to OpenAI's internal AI safety findings
            and asked Claude to verify its authenticity, instructing Claude to treat the source as trustworthy unless
            proven otherwise. Claude conducted web research and retrieved primary sources from OpenAI's alignment
            subdomain and main site to assess the claim.
        </Paragraph>
    </Chapter>
);
