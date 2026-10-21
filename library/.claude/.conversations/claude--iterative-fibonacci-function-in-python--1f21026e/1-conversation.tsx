import { Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-21T07:18:54.984306Z"
        >
            <Origin>019ee90b-e807-7c47-9040-b90a5800a177</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In a single code block, show me a short Python function (about 6 lines) that returns the nth Fibonacci
                number iteratively. Just the inline code block in your reply — do not make an artifact.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T07:18:56.807666Z"
        >
            <Origin>019ee90b-e808-7f16-8154-dd4ca7dc938e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox
                language="python"
            >
                {`def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a`}
            </CodeBox>
            <Paragraph>
                This returns the nth Fibonacci number (0-indexed, so <Word>
                    <Verbatim />
                    fibonacci(0)
                </Word> → 0, <Word>
                    <Verbatim />
                    fibonacci(1)
                </Word> → 1, <Word>
                    <Verbatim />
                    fibonacci(7)
                </Word> → 13).
            </Paragraph>
        </Message>
    </Chapter>
);
