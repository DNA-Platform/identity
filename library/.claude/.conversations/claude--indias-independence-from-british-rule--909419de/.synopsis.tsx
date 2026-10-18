import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two brief historical questions about Indian independence. First, they asked when India
            gained independence from British rule, and Claude provided the date of August 15, 1947. Second, they asked
            why Britain relinquished control of India, prompting a more detailed response from Claude.
        </Paragraph>
    </Chapter>
);
