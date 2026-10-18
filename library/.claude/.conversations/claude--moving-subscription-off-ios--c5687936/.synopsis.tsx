import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug sought help moving his Claude subscription from iOS (App Store billing) to a direct web subscription
            via Stripe, motivated by the iOS App Store pricing being 20% more expensive. He had already cancelled his
            iOS subscription, which is set to expire on May 24th. His account was created using Google OAuth on iOS,
            which was a key clarification he made when Claude initially raised concerns about Sign in with Apple
            complications.
        </Paragraph>
    </Chapter>
);
