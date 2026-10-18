import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug: Hey Claude, can you help me make maps? I will give you instructions. You ask me for any details you
            might be missing, you give me an architecture with the code you will write, I sign off, you write the code,
            we debug
        </Paragraph>
    </Chapter>
);
