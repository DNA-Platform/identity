import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey Claude, can we use name tags please? I like seeing "Claude: " on every paragraph. It helps you.
            Trust me
        </Paragraph>
    </Chapter>
);
