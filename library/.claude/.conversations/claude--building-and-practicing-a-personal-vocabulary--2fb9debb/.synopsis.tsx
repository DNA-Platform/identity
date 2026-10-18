import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is an English language learner working to improve her fluency and naturalness in English. She is also
            running a design business on Spoonflower (a print-on-demand fabric and wallpaper platform), working with a
            collaborator named Doug. The conversation centered on two parallel goals: building a structured English
            learning system with Claude, and getting practical help with business communication.
        </Paragraph>
    </Chapter>
);
