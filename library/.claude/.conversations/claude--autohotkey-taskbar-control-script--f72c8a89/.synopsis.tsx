import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am writing AHK 1.1 code that is meant to help me control the taskbar. I am also running unit tests for it.
            I want to show you this code and
        </Paragraph>
    </Chapter>
);
