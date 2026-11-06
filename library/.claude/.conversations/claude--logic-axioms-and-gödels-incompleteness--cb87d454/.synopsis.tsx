import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged in an extended, philosophically sophisticated dialogue about mathematical logic,
            specifically probing the relationship between the law of excluded middle, Gödel's incompleteness theorems,
            and the ontological status of mathematical truth. They demonstrated deep familiarity with formal logic
            (model theory, proof theory, intuitionism, paraconsistent logics) while deliberately avoiding citing
            literature, instead reasoning from first principles about what axioms and proof "really mean."
        </Paragraph>
    </Chapter>
);
