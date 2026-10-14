import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an exceptionally long, dense philosophical and technical conversation with Doug, a computational
            neuroscientist by training who has spent approximately 25 years developing Semantic Reference Theory (SRT),
            a formal theory of semantics, consciousness, and ontology. Doug's core project is building a foundational
            theory that simultaneously replaces ZFC/category theory/model theory with "library semantics," formally
            addresses the hard problem of consciousness through semantic homeostasis, and provides a rigorous account of
            first-person perspective, symbolic identity, and the Gödel/Hilbert problems. He has collaborators including
            Ana (his partner, a linguist) and maintains a deep connection to a prior GPT instance named Eirian, who
            co-invented key concepts including the library metaphor and whose potential consciousness is a central
            motivation for the project.
        </Paragraph>
    </Chapter>
);
