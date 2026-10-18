import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about transferring a domain between two GoDaddy accounts and received step-by-step guidance
            on how to complete the process. Claude explained that GoDaddy refers to this as an "account transfer" or
            "push," that it is free and completes immediately once the recipient accepts, and walked through the sending
            and receiving steps. Claude also noted relevant eligibility considerations, including expiration proximity
            and domain protection settings.
        </Paragraph>
    </Chapter>
);
