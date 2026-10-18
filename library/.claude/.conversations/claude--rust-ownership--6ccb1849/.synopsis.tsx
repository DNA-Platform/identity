import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked for a brief, intuitive one-sentence explanation of Rust's ownership model, specifying that
            no web search was needed. Claude provided a concise explanation covering the core concepts: each value has
            exactly one owner, the value is automatically freed when the owner goes out of scope, and memory safety is
            achieved through compile-time ownership tracking rather than a garbage collector or manual memory
            management. The conversation was a single focused exchange with no follow-up questions or corrections.
        </Paragraph>
    </Chapter>
);
