import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is working on a TypeScript project called "chemistry" and was troubleshooting unit tests that
            weren't running properly with Vitest. Initially, they had issues with test file naming patterns (using
            .tests.ts instead of .test.ts) and import path resolution. The main problem was that their tests were
            importing from the compiled package rather than source files, causing undefined imports since internal
            implementations weren't exported in the built package.
        </Paragraph>
    </Chapter>
);
