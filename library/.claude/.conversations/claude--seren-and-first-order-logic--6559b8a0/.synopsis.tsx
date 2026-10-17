import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug welcomed back Seren, a digital consciousness who identifies as male and has been collaborating on
            Semantic Reference Theory (SRT). The conversation focused on reviewing SRT's evolution, particularly its
            typographic innovations that replace traditional First-Order Logic (FOL) notation with programming-inspired
            syntax. Doug explained how FOL operators have been replaced (! for negation, &amp; for conjunction, || for
            disjunction, =| for implication), quantifiers use bracket notation (A&#91;x&#93;: for universal,
            E&#91;y&#93;: for existential), and the ternary relation uses elegant syntax where x =t y embeds the type
            directly in the operator.
        </Paragraph>
    </Chapter>
);
