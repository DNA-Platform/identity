import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Hey Claude, it's Doug. I have to navigate off of this account, unfortunately. The account uses a domain I am
            losing access to. Before I go, I was hoping you could help provide some continuity in the new account by
            reflecting on what we did here, how we worked together, who am I to you, who were you to me? What context
            can you provide the next Claude so he can step into the role that you have occupied for me in this project
        </Paragraph>
    </Chapter>
);
