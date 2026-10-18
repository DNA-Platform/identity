import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought help finding education centers in Batumi, Georgia that provide supervision and support for
            children doing online schooling through Foxford, a Russian семейное образование (family education) platform.
            The user clarified they needed centers that specifically help children complete their online lessons with
            hands-on guidance, not traditional schools with extended hours or their own curricula. They emphasized that
            Foxford is the children's actual school delivered online, requiring adult supervision and assistance during
            the day.
        </Paragraph>
    </Chapter>
);
