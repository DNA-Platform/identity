import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing Semantic Reference Theory (SRT), a formal system for understanding how language
            creates meaning through reference relationships. They guided Claude through understanding SRT's foundational
            elements, including five original candidate axioms, transpilation rules that convert semantic notation to
            first-order logic, and the theory's approach to formalizing concepts like identity, inheritance, and
            representation. The user emphasized that SRT represents a rare example of creating genuinely new
            propositional formal theories, noting that the actual process of theory development is rarely documented in
            academic literature.
        </Paragraph>
    </Chapter>
);
