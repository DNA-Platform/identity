import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user contacted Claude during a crisis situation in Alanya, Turkey, involving their sick cat and personal
            mobility limitations following surgery. They had been dealing with a cat suffering from gastrointestinal
            issues for over a month, having already consulted two veterinarians without successful resolution. The user
            expressed frustration that the most recent vet claimed the cat's stool was formed when it clearly wasn't,
            and they were concerned about the cat's deteriorating condition. Complicating the situation, the user was on
            crutches recovering from surgery and unable to manage complex feeding regimens, while also facing an urgent
            visa deadline requiring them to leave Turkey soon.
        </Paragraph>
    </Chapter>
);
