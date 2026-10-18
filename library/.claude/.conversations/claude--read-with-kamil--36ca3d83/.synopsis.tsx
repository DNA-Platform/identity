import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought assistance with a Turkish residence permit (ikamet) delivery and travel documentation issue.
            They have received approval for their ikamet renewal valid through February 2027, but the physical card is
            being mailed to a rental address in Alanya where mail delivery is not possible due to gate access issues.
            They are concerned about traveling without the physical card and need to understand what documentation to
            present at passport control.
        </Paragraph>
    </Chapter>
);
