import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Catch up on $Chemistry. Note the latest files. We are going to explore an interesting way to detect state
            change. We are going to need you to do some deep research on the sort of static analysis that we are
            planning to implement here. I'll fill you in once you have proven you are caught up
        </Paragraph>
    </Chapter>
);
