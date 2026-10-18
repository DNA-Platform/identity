import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am doing illustratpr scripting with typescript. Does this test make assumptions about the artboard?
        </Paragraph>
    </Chapter>
);
