import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is working on a complex international custody case involving Russian courts, where they are
            supporting someone named Ana who has relocated children outside Russia while facing custody proceedings from
            Max (the father). The user requested rigorous analysis based on Russian law and informal court precedents,
            specifically focusing on what happens when a parent refuses to provide information about children's
            whereabouts and school performance to Russian courts.
        </Paragraph>
    </Chapter>
);
