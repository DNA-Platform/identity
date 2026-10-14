import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is a working session between Doug and Claude focused on developing new formal syntax and
            semantic theory within Semantic Reference Theory (SRT). The session began with Claude familiarizing itself
            with the SRT corpus by reading approximately fifteen documents, establishing a working knowledge of the
            formalism's primitives: the ternary relation R(x,y,t) written x =t y, the five foundational semantic forms
            distinguished by equality patterns on three positions, the ten referents, canonicals, quantifier
            conventions, and the dichotomy between canonical and indexical sides. The most recent foundational document
            (the Foundational Sketch) was established as superseding earlier specific assignments in the Semantics of
            Relationship document, a precedence rule Doug stated explicitly: upload date governs, and the documents are
            not internally consistent.
        </Paragraph>
    </Chapter>
);
