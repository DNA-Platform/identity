import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user presented Claude with a retrospective diagnostic challenge involving a past medical case with Ana's
            infant son from years ago. They provided specific clinical symptoms for a 3-month-old exclusively breastfed
            infant: high eosinophils, low hemoglobin, blood in loose stool, and metallic-smelling stool. The user
            requested a differential diagnosis with probability estimates based on medical research, asking Claude to
            identify the most likely causes and justify the reasoning with evidence.
        </Paragraph>
    </Chapter>
);
