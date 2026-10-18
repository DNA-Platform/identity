import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Alright Claude, I need your help nailing down a tricky abstraction as fast as possible. Let's be focused.
            Let's get this done
        </Paragraph>
    </Chapter>
);
