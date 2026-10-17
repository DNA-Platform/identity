import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged Claude in a sophisticated analysis of Microsoft's 15% single-day stock surge following
            its fiscal Q4 earnings report, pushing Claude repeatedly to move beyond numerical recitation toward a
            forward-looking narrative with genuine predictive content. The person has a background in computational
            neuroscience with deep study of the fundamentals of computation, and previously ran an algorithmic trading
            operation at their own quantitative hedge fund — an experience they describe as formative, noting that
            breaking even against institutional competition was a meaningful achievement. This background informed their
            explicit instruction to Claude: numbers formalize what happened but don't predict what will; build the
            narrative first, use figures only as scaffolding.
        </Paragraph>
    </Chapter>
);
