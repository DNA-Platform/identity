import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about traveling through Turkish airports with an approved ikamet (residence permit) but
            without the physical card yet. They specifically wanted web-researched information rather than speculation,
            and were concerned about whether airport immigration officials would be able to see their approved status in
            the system, particularly since they processed their application at a different immigration office than where
            they are registered.
        </Paragraph>
    </Chapter>
);
