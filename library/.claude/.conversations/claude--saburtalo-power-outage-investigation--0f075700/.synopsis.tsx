import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is located in the Sairme neighborhood of Saburtalo, Tbilisi, Georgia, and contacted Claude during
            an active, real-time emergency: a nationwide power outage affecting all of Georgia that began around
            midnight on July 24, 2026. Their immediate needs were practical — to get the exact current time (since they
            had no power) and to find the cause and expected resolution timeline for the outage. They requested all
            responses be delivered in both English and Russian throughout the conversation.
        </Paragraph>
    </Chapter>
);
