import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is a professional programmer with expert-level TypeScript/JavaScript skills and extensive
            experience in C, having worked at multiple companies in finance, ecommerce, and real estate. They have deep
            experience with Angular and some background with React from four years ago, but are now diving into React's
            modern patterns and architecture. The user is building a sophisticated framework called "Chemistry" that
            creates a reactive state management system bridging custom Chemical classes with React components. This
            framework uses decorators, property binding, and a complex type system to automatically generate React
            components from class definitions.
        </Paragraph>
    </Chapter>
);
