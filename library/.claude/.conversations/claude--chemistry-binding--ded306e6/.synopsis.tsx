import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing an innovative React framework called Chemistry that fundamentally reimagines
            component architecture by embracing object-oriented programming principles. Chemistry introduces a paradigm
            where React components become true objects with inheritance, polymorphism, and direct parent-child
            relationships, eliminating common React pain points like prop drilling and complex state management. The
            framework uses a unique constructor pattern where JSX children become actual constructor arguments, enabling
            components to receive and bind to their child instances directly.
        </Paragraph>
    </Chapter>
);
