import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation involved troubleshooting why a Credo Bank card (used by someone named Ana) had stopped
            working on Glovo and Bolt in Georgia after previously functioning normally. The person asked Claude to
            research fixes deeply and creatively, specifically searching in Georgian. Claude used web search tools and
            fetched Credo Bank's official card services documentation to diagnose the issue.
        </Paragraph>
    </Chapter>
);
