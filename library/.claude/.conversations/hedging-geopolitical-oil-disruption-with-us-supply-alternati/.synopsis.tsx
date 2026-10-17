import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in an extended, sophisticated conversation spanning geopolitical investment analysis,
            data visualization, financial research methodology, and digital product strategy. The conversation began
            with a conceptual question about constructing an investment portfolio around a specific macro thesis: the
            Strait of Hormuz remaining closed or disrupted while the US finds alternative oil sources, keeping global
            oil prices stable despite supply disruption. The person framed this not as a bet on oil prices but as a bet
            on which companies gain or lose market share as the directed graph of global oil trade relationships rewires
            — a genuinely original analytical framing that Claude found compelling and built upon throughout the
            conversation.
        </Paragraph>
    </Chapter>
);
