import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation began with the person sharing a news post about the release of Fable 5 (the model they were
            speaking with), which led to a meta-exchange where Claude initially flagged the post's credibility before
            recognizing it was doubting the announcement of its own existence. The person correctly called out this
            absurdity and pushed back on Claude's dismissal of Insider Paper as a source, prompting Claude to verify the
            reporting via web search. Claude confirmed the article's accuracy across multiple claims: the Fable 5/Mythos
            5 architecture, the routing of sensitive queries to Opus 4.8, the Glasswing program expansion, pricing
            ($10/$50 per million tokens), and the Pentagon contract dispute. The person shared the full article text,
            and Claude verified three specific claims — the Pentagon severance (confirmed, with ongoing litigation where
            courts have sided against the government), the White House pre-release testing arrangement (partially
            confirmed), and the Anthropic-SpaceX compute lease at $1.25 billion monthly (confirmed via SpaceX S-1
            filing). The person values directness, dislikes unnecessary hedging or spin, and has an established positive
            track record with Insider Paper as a news source that Claude should not treat with unwarranted skepticism.
        </Paragraph>
    </Chapter>
);
