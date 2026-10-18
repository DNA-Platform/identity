import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked about programs or techniques that help people be less critical. Claude provided a
            comprehensive overview of evidence-based approaches, distinguishing between methods for reducing
            self-criticism versus criticism of others. For self-criticism, Claude detailed Kristin Neff's
            Self-Compassion program with its three core components (self-kindness, common humanity, and mindfulness),
            Paul Gilbert's Compassion-Focused Therapy (CFT) for addressing harsh inner criticism, and Acceptance and
            Commitment Therapy (ACT) which focuses on defusing from critical thoughts rather than changing them. For
            reducing criticism of others, Claude explained Marshall Rosenberg's Nonviolent Communication approach that
            reframes judgments as unmet needs, Gottman's relationship research on replacing criticism with "gentle
            startup" techniques, and Mindfulness-Based Stress Reduction for decreasing overall reactivity. Claude
            concluded by asking for clarification about the specific context the user was interested in, whether
            self-criticism, interpersonal dynamics, or another area. The conversation demonstrated Claude's ability to
            provide structured, research-backed information while recognizing the need for more specific guidance based
            on the user's particular situation.
        </Paragraph>
    </Chapter>
);
