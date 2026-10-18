import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person, who identifies as having a biology degree, engaged Claude in a sustained and increasingly
            rigorous debate about what constrains insect body size. The conversation began with the person's observation
            that insects tend to cluster well below the size of small birds, and asking whether predation-agility
            tradeoffs explain this distribution. Over multiple turns, the person repeatedly pushed Claude away from
            mechanistic and architectural explanations toward force-based, selection-gradient accounts rooted in
            evolutionary theory. The person's central methodological demand was that any valid explanation must identify
            what is selected for and against, compare those forces, and avoid treating evolutionary lineages as machines
            subject to fixed tolerances.
        </Paragraph>
    </Chapter>
);
