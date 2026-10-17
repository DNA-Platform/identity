import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved an extensive exploration of Semantic Reference Theory (SRT), a formal system the
            user is developing to axiomatize meaning and reference. The user worked through refining five fundamental
            axioms that establish the foundation for how relationships, inheritance, and symbolism work in formal
            semantic systems. The discussion began with examining candidate axioms from the user's project documents,
            then evolved into a collaborative refinement process that resulted in five core axioms: Universality
            (establishing a universal relationship that all others inherit from), Specification (ensuring every related
            pair has a most specific relationship), Directionality (preventing cycles in inheritance hierarchies),
            Canonicity (defining local representation through chain-like structures), and Representation (establishing
            asymmetry between symbols and representatives).
        </Paragraph>
    </Chapter>
);
