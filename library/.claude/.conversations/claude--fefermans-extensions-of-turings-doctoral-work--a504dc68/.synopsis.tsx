import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two successive questions about the mathematical relationship between Alan Turing's PhD
            research and Solomon Feferman's later work, indicating strong interest in the history and technical
            foundations of mathematical logic and proof theory. The conversation was entirely technical in nature, with
            no personal details shared about the person themselves.
        </Paragraph>
    </Chapter>
);
