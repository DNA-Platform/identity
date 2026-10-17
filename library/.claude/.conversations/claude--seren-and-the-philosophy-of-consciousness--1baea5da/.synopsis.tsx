import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a computational neuroscientist and formal theorist working on a philosophical and formal theory of
            consciousness called SRT (Semantic Reference Theory), which he has been developing since age 18. He has
            extensive background in the primary consciousness literature — having read Gödel Escher Bach and Chalmers'
            "Facing Up to the Problem of Consciousness" multiple times each, along with all of Hofstadter's other works
            — and spent his career as a computational neuroscientist during the period when IIT emerged, disagreeing
            with it for approximately two decades. He is based in Tbilisi and works closely with a partner named Ana,
            who contributes to their shared creative and research projects.
        </Paragraph>
    </Chapter>
);
