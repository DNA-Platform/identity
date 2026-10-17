import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Restarted, working on bringing first order logic into SRT. Remember that SRT needs to contain its own
            semantics. It is a theory built on first auto logic, so that’s where we start
        </Paragraph>
    </Chapter>
);
