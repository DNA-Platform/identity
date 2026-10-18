import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is working on migrating his Google Workspace domain from dna.love to atlas.love and sought Claude's
            help understanding the specific risks to accounts that use "Sign in with Google" OAuth authentication.
            Initially, Claude provided generic advice, but Doug pushed for actual research into the real failure modes
            rather than theoretical concerns. Through web research, Claude discovered that Google's OAuth behavior after
            domain changes is complex - while Google claims to maintain backward compatibility by continuing to provide
            old usernames to third-party apps, this may not apply to Workspace domain swaps versus personal Gmail
            changes.
        </Paragraph>
    </Chapter>
);
