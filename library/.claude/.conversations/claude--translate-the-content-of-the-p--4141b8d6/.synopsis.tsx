import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user requested translation of Russian legal documents from English, specifically a motion filed in a
            Russian custody case. Claude translated a three-page "Motion for Subpoena of Evidence" dated February 5,
            2026, filed in the Cheremushkinsky District Court of Moscow. The document was a strategic legal filing by
            plaintiff's attorney requesting the court subpoena psychiatric medical records from Psychoneurological
            Dispensary No. 13, arguing this information was necessary to assess parenting capacity in the custody
            dispute.
        </Paragraph>
    </Chapter>
);
