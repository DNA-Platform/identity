import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in a detailed, technically sophisticated pharmacology discussion about
            alpha-methyltryptamine (AMT), a compound historically marketed as an antidepressant in the Soviet Union
            under the name Indopan. The conversation demonstrated the person's strong neuroscience and pharmacokinetics
            background throughout, with the person asking precise mechanistic questions and offering their own
            pharmacological reasoning for Claude to evaluate. Key topics included AMT's mechanism of action (SERT
            substrate activity, 5-HT2A agonism, and MAO-A inhibition), its comparison to MDMA as a potential therapeutic
            agent, and its history of recreational use across different administration routes.
        </Paragraph>
    </Chapter>
);
