import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug, who lives in Tbilisi and shares his account with his wife Ana (a cartographer and mathematician),
            conducted an extended collaborative formal logic and philosophy session developing SRT (Semantic Reference
            Theory) — a homoiconic relational theory of reference, types, inheritance, and symbolization. This was a
            second session continuing from a prior compacted conversation. The session covered an enormous range of
            interconnected formal and philosophical topics, all building toward a unified single-domain FOL theory that
            internalizes reference and symbolization without a metalanguage.
        </Paragraph>
    </Chapter>
);
