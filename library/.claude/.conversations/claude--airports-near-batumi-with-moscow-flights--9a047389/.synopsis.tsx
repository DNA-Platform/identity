import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought urgent travel assistance for someone named Ana who needed to get from Batumi, Georgia to
            Moscow for time-sensitive legal matters. Ana's original flight connection through Krasnodar was disrupted
            due to delays, creating an emergency situation where she needed to reach Moscow by the following morning to
            execute notarial documents including removing and granting legal representation and creating powers of
            attorney for family members.
        </Paragraph>
    </Chapter>
);
