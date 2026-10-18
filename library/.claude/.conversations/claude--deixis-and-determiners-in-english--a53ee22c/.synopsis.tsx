import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an in-depth exploration of English grammar, specifically focusing on determiners and
            their function as reference operators in language. They began by analyzing the sentence "That question has
            hounded me ever since I was ten" and identifying what they called the "pointeriness" of determiners like
            "that," "this," "the," and "a." Through systematic questioning, they worked to understand the complete
            taxonomy of determiners, including articles (a, an, the), demonstratives (this, that, these, those),
            possessives (my, your, his, her, etc.), quantifiers (some, any, every, many, few, several), numerals (one,
            two, three), and interrogatives (which, what, whose).
        </Paragraph>
    </Chapter>
);
