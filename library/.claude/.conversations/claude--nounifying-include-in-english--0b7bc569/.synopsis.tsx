import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            If we were to nounify the concept of “include”, like w is included in the word “word”, is there a better
            English option than “inclusion” even if we are bending what that word actually means in colloquial English
        </Paragraph>
    </Chapter>
);
