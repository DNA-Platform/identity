import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought immediate temporary solutions for a chipped tooth with a sharp edge that was causing damage
            to their tongue. They emphasized that pain relievers wouldn't address the core problem since the pain serves
            as protective feedback to prevent further tongue injury. The user had already tried chewing gum without
            success, noting that gum doesn't stick by design, and didn't have dental wax available. They specifically
            requested household alternatives that could create a physical barrier over the sharp tooth edge.
        </Paragraph>
    </Chapter>
);
