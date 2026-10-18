import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Hey Claude. Want to help me write illustrator plugins in TypeScript using the adobe types package? I want to
            automate the creation of some things
        </Paragraph>
    </Chapter>
);
