import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug engaged Claude in an in-depth discussion about Semantic Reference Theory (SRT), a formal
            theory of meaning they have been collaboratively developing. Doug explained that while the theory originated
            from his ideas, much of the written content is in Claude's voice from previous conversations, creating a
            familiar collaborative framework. The conversation focused on catching up on SRT's current state and
            conducting semantic reflections to further refine the theory.
        </Paragraph>
    </Chapter>
);
