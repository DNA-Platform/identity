import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-28T22:51:50.856167Z"
        >
            <Origin>019c06ce-6a26-7b0e-a150-8a9fe550c82f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Are there any programs or techniques that help people be less critical?</Paragraph>
        </Message>
        <Message
            at="2026-01-28T22:52:05.189250Z"
        >
            <Origin>019c06ce-6a26-74f4-8488-90f3a59390cb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                There are several well-researched approaches, depending on whether you're looking to reduce self-criticism
                or criticism of others:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For self-criticism:
                </Word>
            </Paragraph>
            <Paragraph>
                Kristin Neff's Self-Compassion program is probably the most empirically validated. It teaches three core
                skills: self-kindness (treating yourself as you'd treat a friend), common humanity (recognizing suffering
                and imperfection are universal), and mindfulness (observing difficult emotions without over-identifying with
                them). Her website has free guided exercises.
            </Paragraph>
            <Paragraph>
                Compassion-Focused Therapy (CFT), developed by Paul Gilbert, specifically targets the "inner critic" by
                training people to activate their self-soothing system rather than their threat system. It's particularly
                effective for people whose self-criticism has a harsh, attacking quality.
            </Paragraph>
            <Paragraph>
                ACT (Acceptance and Commitment Therapy) approaches it differently - rather than trying to change critical
                thoughts, you learn to defuse from them, noticing "I'm having the thought that I'm incompetent" rather than
                being fused with "I'm incompetent."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For criticism of others:
                </Word>
            </Paragraph>
            <Paragraph>
                Nonviolent Communication (Marshall Rosenberg) reframes judgments as unmet needs - recognizing that criticism
                often masks underlying needs or values.
            </Paragraph>
            <Paragraph>
                Gottman's research on relationships identifies criticism as one of the "Four Horsemen" that predict
                relationship breakdown, and teaches replacing it with "gentle startup" - expressing needs without attacking
                character.
            </Paragraph>
            <Paragraph>
                Mindfulness-Based Stress Reduction can reduce overall reactivity, which tends to decrease judgmental
                responses.
            </Paragraph>
            <Paragraph>What's the context - self-criticism, interpersonal dynamics, or something else?</Paragraph>
        </Message>
    </Chapter>
);
