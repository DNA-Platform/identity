import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user guided Claude through conducting a formal market research experiment titled "Interactive
            Cartographers — Who is Selling Interactive Illustrated Maps?" following a specific experimental framework
            from their project wiki. The user initially provided context about Ana, who operates a Fiverr Pro digital
            cartography business, and wanted to understand the competitive landscape for providers who combine both
            artistic illustration and interactive functionality in maps. The conversation began with Claude conducting
            scattered searches but the user redirected Claude to follow their established experimental methodology,
            emphasizing the need for systematic data collection, proper organization of observations versus findings,
            and epistemic annotations.
        </Paragraph>
    </Chapter>
);
