import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Okay we got a tough illustrator scripting task. I have a type definition file, and interesting abstraction,
            and I need you to fill in the properties. There are a LOT! It will take writing a piece of code iteratively,
            adding to it each time:
        </Paragraph>
    </Chapter>
);
