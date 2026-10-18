import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person sought help troubleshooting persistent "API rate limit reached" errors in Claude Code despite
            being on the Max 20x subscription plan. The conversation covered how Claude Code's rate limiting works,
            including the 5-hour rolling session window and weekly token caps, and why limits can persist across days.
            Claude explained that the /status command was also blocked due to the limit being enforced at the API layer.
        </Paragraph>
    </Chapter>
);
