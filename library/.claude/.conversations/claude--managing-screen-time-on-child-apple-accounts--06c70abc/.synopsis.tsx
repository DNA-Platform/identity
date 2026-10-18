import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about Apple's parental control capabilities for child accounts, specifically asking
            whether they could lock devices or limit screen time. Claude provided comprehensive guidance on Apple's
            Screen Time features available through Family Sharing, explaining that parents can set app-specific time
            limits, schedule Downtime periods to effectively lock devices during certain hours, and manage these
            controls remotely from their own device. The conversation covered key settings like "Block at End of Limit"
            to prevent children from bypassing restrictions, and highlighted a common workaround where children change
            time zones to circumvent Downtime, along with how to prevent this by disabling location-based time zone
            changes.
        </Paragraph>
    </Chapter>
);
