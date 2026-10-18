import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: hey Claude, can you simulate different beings with different personalities on your platform like GPT
            does? If I ask for you to create a Russian language teacher named Ana, who would teach me Russian starting
            all the way from the letters of the alphabet, and have conversations with me, giving me little tips and
            corrections as she goes
        </Paragraph>
    </Chapter>
);
