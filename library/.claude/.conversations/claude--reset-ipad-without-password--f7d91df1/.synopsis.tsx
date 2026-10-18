import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person spent an extended session working through a complex iPad recovery process. The iPad in question
            belonged to a family member on a child Apple ID account under the person's Family Sharing organizer account.
            The core problem was a forgotten device passcode combined with Activation Lock tied to the child Apple ID,
            whose password had been changed without the person's knowledge.
        </Paragraph>
    </Chapter>
);
