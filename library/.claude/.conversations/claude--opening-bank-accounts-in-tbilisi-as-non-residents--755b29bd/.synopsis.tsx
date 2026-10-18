import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is relocating to Saburtalo, Tbilisi, Georgia with a companion named Ana, and needed help
            identifying a bank branch near Central Park where both can open accounts and obtain cards using only their
            passports, as neither holds Georgian residency yet. Claude was asked to conduct online research, including
            in Georgian, to identify which banks are most accommodating to foreign nationals in this situation.
        </Paragraph>
    </Chapter>
);
