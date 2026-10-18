import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an in-depth technical discussion about three common over-the-counter pain medications:
            acetaminophen (paracetamol), aspirin, and ibuprofen. They requested comprehensive scientific information
            about dose-dependent toxicity, age-related safety concerns, drug classifications, mechanisms of action, and
            specific milligram dosages rather than mg/kg calculations. The conversation progressed through three main
            phases: initial safety and toxicity comparison, detailed pharmacological classification and dosing
            information, and finally the neurological mechanisms of pain relief.
        </Paragraph>
    </Chapter>
);
