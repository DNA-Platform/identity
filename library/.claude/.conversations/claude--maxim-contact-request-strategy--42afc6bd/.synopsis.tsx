import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person, writing on behalf of Ana in an ongoing custody matter, needed help drafting a message to their
            family's lawyers (addressed to a contact named Lena) after the other parent, Maxim, made contact for the
            first time in years. Maxim requested communication with the children and demanded they come to Moscow during
            school holidays, citing the court order and threatening bailiff action; the family believes this is leverage
            related to a recently denied alimony modification attempt and considers him dangerous. The family was in a
            gap period with their law firm (prior contract completed, new one not yet signed) and wanted to request
            guidance on handling contact-channel logistics without over-signaling need for a new paid engagement, given
            cost sensitivity.
        </Paragraph>
    </Chapter>
);
