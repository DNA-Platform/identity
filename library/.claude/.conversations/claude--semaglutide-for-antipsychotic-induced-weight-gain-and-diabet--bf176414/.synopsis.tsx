import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in an extended, technically sophisticated conversation about semaglutide and its
            application to their specific situation: lifetime use of quetiapine at 400–600 mg nightly, elevated blood
            lipids on recent testing, and a personal and family risk profile for metabolic conditions. They are located
            in Tbilisi, Georgia (the country), specifically the Saburtalo district. The conversation covered
            semaglutide's mechanism of action in depth, including GLP-1 receptor pharmacology, the SNAC oral delivery
            system, CNS access via circumventricular organs, POMC/CART circuit interactions, and how these mechanisms
            relate to antipsychotic-induced appetite dysregulation via H1 and 5-HT2C blockade. The person demonstrated
            strong prior knowledge and pushed back effectively when explanations were too granular or too low-level,
            asking for circuit-level rather than molecular-level detail.
        </Paragraph>
    </Chapter>
);
