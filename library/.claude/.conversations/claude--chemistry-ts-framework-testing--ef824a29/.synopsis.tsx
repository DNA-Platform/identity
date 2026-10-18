import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing a reactive UI framework called "Chemistry" that implements a component system with
            decorators for reactive properties and parent-child binding. The framework uses a $Chemical base class with
            automatic reactivity, property systems with $ prefixes for props, and decorators like @child, @optional,
            @dynamic for various behaviors. Throughout an extensive debugging session, the user worked through
            fundamental architectural challenges in making child components automatically bind to parent properties
            while maintaining React's component lifecycle.
        </Paragraph>
    </Chapter>
);
