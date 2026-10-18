import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is a US citizen living permanently in Tbilisi, Georgia, working to dramatically reduce his monthly
            expenses by cutting an expensive AT&amp;T postpaid wireless plan. The conversation began with Doug paying
            roughly $218/month on AT&amp;T Unlimited Premium, largely due to International Day Pass charges firing
            automatically when incoming calls routed through Georgian cellular towers during brief WiFi Calling
            registration gaps. Claude diagnosed the root cause: AT&amp;T postpaid defaults to international roaming
            enabled, and even unanswered calls or voicemails could trigger the $12/day IDP charge when WiFi Calling
            wasn't registered at the precise moment of connection. Doug's setup uses a Magticom Georgian eSIM for all
            cellular data, with his AT&amp;T US line used exclusively for SMS 2FA reception (Chase, Citibank, Mercury,
            PayPal, IBKR) and occasional calls via WiFi Calling over Magticom's data connection.
        </Paragraph>
    </Chapter>
);
