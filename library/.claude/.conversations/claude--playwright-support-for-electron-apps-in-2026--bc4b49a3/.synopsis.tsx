import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked a single technical question about the current state of Playwright support for Electron apps
            in 2026, repeating the identical question four times across the conversation. Claude answered
            comprehensively on the first instance, using a web search to retrieve current information, then provided
            progressively shorter recaps on subsequent repetitions before ultimately declining to repeat the answer a
            fourth time and addressing the repetition pattern directly.
        </Paragraph>
    </Chapter>
);
