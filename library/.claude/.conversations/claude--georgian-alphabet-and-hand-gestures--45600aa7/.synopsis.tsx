import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user initiated a fascinating discussion about the Georgian alphabet after independently observing that
            the letterforms appeared evocative of hand positions. This led to an exploration of a traditional Georgian
            theory that the Mkhedruli script was deliberately designed based on shapes the human hand can make,
            supposedly attributed to King Parnavaz I in the 3rd century BC. Claude initially presented this as a
            documented folk theory, though later research revealed limited scholarly evidence for this specific claim.
        </Paragraph>
    </Chapter>
);
