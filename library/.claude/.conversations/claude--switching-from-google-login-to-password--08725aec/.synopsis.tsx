import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug asked about switching his Claude account from Google login to a regular password login. Claude
            explained that Claude.ai does not support traditional passwords — the only two authentication options are
            Google login or a magic link sent to an email address (no password is created). Claude clarified that unlink
            Google in favor of email-link login was technically possible but would mean sharing an email address rather
            than Google credentials.
        </Paragraph>
    </Chapter>
);
