import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user worked with Claude to debug and optimize a TypeScript function called parseFunctionInfo that
            analyzes JavaScript functions by parsing their toString() output to determine properties like function type
            (lambda, method, class, etc.), async/generator status, and parameter information. The function was failing
            multiple test cases, particularly for arrow functions which were incorrectly returning 'unknown' instead of
            'lambda'. The user emphasized that this function needs to run frequently and must be highly optimized for
            performance.
        </Paragraph>
    </Chapter>
);
