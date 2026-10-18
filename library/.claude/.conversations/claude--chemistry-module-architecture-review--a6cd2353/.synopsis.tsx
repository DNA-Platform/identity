import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing an innovative React framework called "Chemistry" that brings object-oriented
            programming patterns back to UI development while maintaining TSX syntax. The framework's core philosophy is
            "What if we kept TSX and got rid of everything else?" and features a sophisticated reactive system built
            around $Chemical base classes, $Formula for state management, and $Bond for property connections. The user
            requested Claude to deeply analyze the framework's architecture by reading chemistry.ts, design notes, and
            test files to understand both the technical complexity and the user's pragmatic coding style.
        </Paragraph>
    </Chapter>
);
