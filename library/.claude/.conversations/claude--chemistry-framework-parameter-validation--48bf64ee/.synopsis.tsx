import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user asked Claude to analyze their custom React framework called "Chemistry" (chemistry.ts), which
            implements object-oriented programming paradigms over React components. The framework features a
            sophisticated reactive system where components extend a $Chemical base class, use a "bond" system for state
            management, and employ a unique pattern where JSX children become typed constructor parameters. Key
            conventions include $property for external props, property for internal reactive state, and property for
            non-reactive private fields. The framework uses complex TypeScript mappings, prototype manipulation, and
            getter/setter interception to create reactive bindings.
        </Paragraph>
    </Chapter>
);
