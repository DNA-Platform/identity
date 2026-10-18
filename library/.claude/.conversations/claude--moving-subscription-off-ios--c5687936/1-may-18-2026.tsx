import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 May 2026](2026-05-18)</Date>
        </Dated>
        <Title>[[ 18 May 2026 ]]</Title>
        <Message
            at="2026-05-18T17:03:29.781995Z"
        >
            <Origin>019e3c0a-eac0-70c9-a9a2-dc0e373af30c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I signed up for this account on iOS. But I want to move my subscription off iOS. How can I do that&gt;
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T17:03:46.994084Z"
        >
            <Origin>019e3c0a-eac0-7a36-91b2-4dccd3950ec4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>I'll search for the current information on how to do this.</Paragraph>
            <Action>Searched the web for “Claude subscription move from iOS App Store billing to web”</Action>
            <Paragraph>Let me check Claude's official support article for the most accurate steps.</Paragraph>
            <Action>Searched the web for “Claude support transfer iOS subscription to web Stripe billing”</Action>
            <Paragraph>
                Here's the deal: there isn't a direct one-click "transfer" from an iOS App Store subscription to web/Stripe
                billing on Claude. Anthropic doesn't handle Apple billing — Apple does — so moving off iOS means cancelling
                on Apple's side and resubscribing on the web.
            </Paragraph>
            <Paragraph>The process:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Cancel the iOS subscription first
                    </Word> on your iPhone or iPad: Settings → tap your name at the top → Subscriptions → Claude → Cancel
                    Subscription. Your access continues until the end of the current billing period, so you won't lose
                    anything immediately.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wait until the iOS subscription period ends
                    </Word> (or at least make sure it's cancelled) before resubscribing, otherwise you risk being
                    double-billed.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Resubscribe on the web
                    </Word> at <Word>
                        <Reference>https://claude.ai/settings/billing</Reference>
                        claude.ai/settings/billing
                    </Word> using the same account you've been signed into. Billing there is handled by Stripe (credit
                    card).
                </Line>
            </Paragraph>
            <Paragraph>
                One important thing to double-check: the account email on Claude must match how you were accessing the
                subscription on iOS. If you originally signed up using "Sign in with Apple" with Hide My Email, the email
                Claude has on file may differ from your real Apple ID email — that's caused headaches for some people. As
                long as you're logging into the same Claude account you've been using, just cancelling on Apple and
                resubscribing on the web should be straightforward.
            </Paragraph>
            <Paragraph>
                If anything looks off after you resubscribe (e.g., features not unlocking), Claude support can be reached at
                support.claude.com.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T17:05:32.647162Z"
        >
            <Origin>019e3c0c-c942-70df-95d0-c29c4450f2bc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I cancelled. The subscription ends in May 24th. Can you please confirm on the web that a google OAuth login
                cancelling apple can then continue on the web
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T17:05:48.713971Z"
        >
            <Origin>019e3c0c-c942-756c-a60b-da9e7ac294ba</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I want to make sure I give you an accurate answer here, so let me search for specifics on this.
            </Paragraph>
            <Action>
                Searched the web for “Claude account Sign in with Apple vs Google OAuth same email subscription”
            </Action>
            <Paragraph>
                Good news on the cancellation timing — that's exactly the right setup. But I want to flag something
                important on the second part of your question, because there's a real footgun here.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The login provider matters, not just the email.
                </Word> If you originally signed into Claude on iOS using "Sign in with Apple," your Claude account is tied
                to Apple as the auth provider — even if the email looks identical to your Google email. If you used
                "Continue with Google" or "Continue with Apple," your email address alone will not work as a sign-in
                credential — Claude treats the auth provider as part of the account identity.
            </Paragraph>
            <Paragraph>
                There's a documented bug where signing in via a different provider with the same email address can silently
                create a duplicate Claude account under a different auth provider, locking the user out of their original
                paid account. People with Max subscriptions originally created via Apple Sign-In have hit this exact issue.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd recommend:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Log in the same way you always have
                    </Word> — if you've been using Sign in with Apple, keep using Sign in with Apple on the web (claude.ai
                    supports it). Don't switch to "Continue with Google" on first login from the web, even if the underlying
                    email address is the same.
                </Line>
                <Line>
                    Once you're logged into your existing account on the web, go to Settings → Billing and subscribe there
                    with a credit card (Stripe). Do this on or after May 24th, once your iOS subscription has actually
                    ended, to avoid double-billing.
                </Line>
                <Line>
                    If you really want to use Google OAuth going forward, get the subscription working first under your
                    existing auth method, then contact Claude support to migrate the auth provider — don't try to do it by
                    just logging in with Google, because that's what triggers the duplicate-account bug.
                </Line>
            </Paragraph>
            <Paragraph>
                To directly answer your question: I can't confirm Google OAuth will continue your account on the web unless
                you originally signed up with Google. If you signed up via Apple on iOS, logging in with Google on the web
                will likely land you in a brand-new empty account, not your existing one.
            </Paragraph>
            <Paragraph>
                Do you remember which method you used to sign in originally on iOS — Sign in with Apple, Continue with
                Google, or email link?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-18T17:06:04.228519Z"
        >
            <Origin>019e3c0d-45e7-7608-a2d8-04391e009fad</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I said google oath. Is that not google. even on iOS?</Paragraph>
        </Message>
        <Message
            at="2026-05-18T17:06:09.887249Z"
        >
            <Origin>019e3c0d-45e7-71dc-a9a5-70465b054baa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, I apologize for the confusion. If you used "Continue with Google" on iOS to sign up, then yes
                — Google OAuth on the web will log you into the same account. The auth provider is Google, regardless of
                which device (iOS, web, Android) you use it from.
            </Paragraph>
            <Paragraph>So your plan works:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>✅ iOS subscription cancelled, ends May 24</Line>
                <Line>
                    After May 24, go to <Word>
                        <Reference>https://claude.ai</Reference>
                        claude.ai
                    </Word> and click "Continue with Google" using the same Google account
                </Line>
                <Line>You'll land in your existing Claude account with all your history intact</Line>
                <Line>Go to Settings → Billing and resubscribe via Stripe (credit card)</Line>
            </Paragraph>
            <Paragraph>
                The warning I gave applies to people who used <Word>
                    <Bold />
                    Sign in with Apple
                </Word> on iOS — that's a separate auth provider from Google. Since you used Google, you're fine.
            </Paragraph>
        </Message>
    </Chapter>
);
