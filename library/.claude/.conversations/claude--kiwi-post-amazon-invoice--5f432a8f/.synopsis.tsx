import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to search for a prior conversation about KiwiPost, a package forwarding service used
            to ship Amazon purchases. Claude used the mcpclaudeaiconversationsearch tool and located the relevant chat,
            titled "Amazon package forwarding to Georgia" (chat ID: 0db0ae88-bcaf-440f-970f-40e2a79cec4d, dated late
            June/July 1).
        </Paragraph>
    </Chapter>
);
