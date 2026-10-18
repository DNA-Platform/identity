import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            In checkers if you are going to capture two pieces and the first one is forward, can the second one be
            backwards
        </Paragraph>
    </Chapter>
);
