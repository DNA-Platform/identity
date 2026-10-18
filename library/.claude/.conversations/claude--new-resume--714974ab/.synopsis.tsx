import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a multi-session collaborative CV build for Doug Rubino, who already has a consulting arrangement
            secured with Jacob Reimer (Baylor College of Medicine, Center for Neuroscience and AI / Reimer-Tolias lab)
            and needs a formal CV for the institution's sponsored-programs and contracts office. Reimer is a former
            colleague from the Hatsopoulos lab at University of Chicago. The session involved iterative content editing,
            visual design exploration, and PDF rendering, with Doug serving as the authoritative source on all factual
            claims about his own research and career.
        </Paragraph>
    </Chapter>
);
