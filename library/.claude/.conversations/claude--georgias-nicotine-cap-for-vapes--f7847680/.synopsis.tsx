import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in a sophisticated neuroscience discussion about nicotine addiction mechanisms, starting
            with questions about Georgia's vaping regulations and evolving into a detailed phenomenological analysis of
            nicotine withdrawal. They demonstrated expertise in computational neuroscience and used a methodical
            approach combining first-person experiential observation with mechanistic theorizing. The conversation
            revealed Georgia (the country) caps nicotine at 2% (20mg/ml), following EU standards, which the user noted
            as significantly lower than US products at 5% or higher.
        </Paragraph>
    </Chapter>
);
