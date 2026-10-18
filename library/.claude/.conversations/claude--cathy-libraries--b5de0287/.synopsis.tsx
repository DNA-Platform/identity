import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a long, iterative technical design conversation involving multiple participants: Cathy (who builds
            the reactive framework and served as the primary interlocutor with Claude), Doug (the system's designer
            whose rulings governed all architectural decisions), and Ana (mentioned briefly as a team member). The
            conversation centered on designing and building .public, a compiler for a library system that validates a
            knowledge graph using library domain semantics. The core premise is that books written as TypeScript/TSX
            classes are compiled into a validated knowledge graph, with referential integrity enforced through a card
            catalogue that refuses citations by non-membership alone.
        </Paragraph>
    </Chapter>
);
