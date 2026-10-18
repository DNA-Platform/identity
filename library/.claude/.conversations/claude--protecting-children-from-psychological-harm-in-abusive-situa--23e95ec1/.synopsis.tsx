import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested a Russian translation of a sensitive English text that appeared to be advice or guidance
            for someone dealing with a difficult personal situation. The user emphasized the importance of getting both
            the accuracy and empathetic tone correct in the translation. The original text contained strategic advice
            about focusing on important issues rather than getting distracted by lies and deflection, using a political
            analogy about handling Trump as a framework for dealing with a problematic individual named Max.
        </Paragraph>
    </Chapter>
);
