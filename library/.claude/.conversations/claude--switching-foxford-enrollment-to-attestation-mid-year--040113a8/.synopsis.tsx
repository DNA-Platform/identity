import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Foxford, a Russian online school, specifically whether children currently enrolled
            in webinar courses and attestation programs could switch to attestation-only mid-year. They explained that
            the children would receive educational support from an education center in Georgia that follows Foxford's
            curriculum, and they needed to understand the flexibility of changing enrollment schedules during the
            academic year.
        </Paragraph>
    </Chapter>
);
