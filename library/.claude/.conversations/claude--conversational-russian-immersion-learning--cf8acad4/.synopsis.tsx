import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is learning Russian and initiated a conversational immersion session with Claude. His core pedagogical
            insight was that the minimum viable fluency is the ability to have a conversation about the language in the
            language — specifically, that learning to ask "what does that mean?" in Russian unlocks a self-sustaining
            learning loop. He pushed back several times when Claude drifted toward conventional English-first teaching,
            insisting the conversation stay within the "language learning sphere" and that Claude only break into
            English when Doug demonstrably lacks the vocabulary to stay in Russian.
        </Paragraph>
    </Chapter>
);
