import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            OK, review the files in this project. We are moving this work to a GitHub repo in the form of a sort of open
            source project. I want us to design the user interface that will contain it. But don’t do that yet. I want
            you to just read the project files and conversations and get a sense for the work that we’re doing and catch
            yourself up. Tell me what you believe that we’re working on here and I will correct you so that we can start
            coming up with prototypes for how we want to show this to the world.
        </Paragraph>
    </Chapter>
);
