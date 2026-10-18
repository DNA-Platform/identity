import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person requested a short iterative Python function (~6 lines) to return the nth Fibonacci number. They
            specified the format explicitly: an inline code block only, no artifact. Claude provided a clean iterative
            implementation using tuple unpacking (a, b = b, a + b) in a for loop, along with a brief note clarifying the
            0-indexed behavior and example outputs.
        </Paragraph>
    </Chapter>
);
