import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an extended, high-level conversation between Doug and Claude covering quantum mechanics, philosophy
            of physics, and the philosophy of mathematics/ontology. The conversation began with Doug asking about the
            quantum corral experiment (48 iron atoms on copper, IBM Almaden 1993), and progressed through increasingly
            deep conceptual territory: the nature of electron wave behavior, whether classical media could explain
            corral ripples, the status of quantum phase rotation, the relationship between field theory and medium-like
            substrates, and ultimately the ontological foundations of structural realism in philosophy of physics.
        </Paragraph>
    </Chapter>
);
