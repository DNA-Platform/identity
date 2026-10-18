import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation centered on the development of a philosophy paper titled Pointing Out at the Problem of
            Consciousness (later refined to Pointing Outward at the Problem of Consciousness), positioned in the lineage
            of Chalmers's "Facing Up to the Problem of Consciousness" (1995), Dennett's "Facing Backwards on the Problem
            of Consciousness" (1996), and Chalmers's "Moving Forward on the Problem of Consciousness" (1997). The person
            is developing this paper as a front piece to a broader theory called Semantic Reference Theory (SRT). The
            core argument developed across the conversation: for anything to have a quality there must be a qualifier,
            for anything to be individuated an identifier, for anything to be related a relative. The paper's stopping
            rule is that it may assert a referrer is required but may not assert the referrer contains its referents.
            The three principal figures—Chalmers (identifier of the problem), Dennett (disqualifier), and Hofstadter
            (relative to both, serving as referee)—mirror the paper's own ontological triad. A four-panel figure was
            designed showing a crossing-out procedure where the writer ultimately adds themselves to a completed
            ontology, justified as a fixed-point construction and a direct response to Dennett's first-person
            subtraction.
        </Paragraph>
    </Chapter>
);
