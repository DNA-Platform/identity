import { Bold, Chapter, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
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
        <Message
            at="2026-05-19T14:21:31.841513Z"
        >
            <Origin>019e409c-fe9a-7d7d-a8f2-d71df6c237c8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I hope it works</Paragraph>
        </Message>
        <Message
            at="2026-05-19T14:21:36.812115Z"
        >
            <Origin>019e409c-fe9a-711d-b90a-cbd8fc4b68dc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It should. Google OAuth is the cleanest path — same provider, same account, no edge cases. The only thing to
                watch for is making sure you're signed into the right Google account in your browser when you click
                "Continue with Google" (if you have multiple Google accounts active, the browser default isn't always the
                one you want).
            </Paragraph>
            <Paragraph>
                If anything looks off after you resubscribe — missing history, wrong account — don't panic and don't create
                a new account to "fix" it. Just contact support.claude.com from the email tied to your Google account.
                That's recoverable; a duplicate account is messier.
            </Paragraph>
            <Paragraph>Good luck with the move. 🤞</Paragraph>
        </Message>
        <Message
            at="2026-05-19T14:22:53.207269Z"
        >
            <Origin>019e409e-3cae-7fd5-84d2-47a05a579aed</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do you have proof that people were able to cancel iOS and then moveo n to web subscriptions? The account
                isn't permenantly tied to iOS? Because it's 20% more expensive and I need Max
            </Paragraph>
        </Message>
        <Message
            at="2026-05-19T14:23:10.529406Z"
        >
            <Origin>019e409e-3cae-774f-9071-b97a6ce96edb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair question — let me actually verify this rather than just reassuring you.</Paragraph>
            <Action>
                Searched the web for “"cancelled" OR "canceled" Claude iOS subscription resubscribed web Max same account”
            </Action>
            <Paragraph>Here's my honest take based on what I can actually verify:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's clearly documented:
                </Word> Your Claude <Word>
                    <Emphasis />
                    account
                </Word> is not tied to iOS. The account is identified by your Google OAuth login, not by the billing method.
                The iOS App Store subscription is a separate layer on top — it's just <Word>
                    <Emphasis />
                    how you paid
                </Word>, not <Word>
                    <Emphasis />
                    who you are
                </Word>. Anthropic's own docs and multiple guides confirm that you can reactivate your Claude subscription
                anytime by visiting claude.ai, and that conversation history persists across cancellation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I cannot give you a clean testimonial for:
                </Word> I didn't find a forum post that says verbatim "I cancelled my iOS Max subscription, waited for it to
                end, signed in with Google on web, paid via Stripe, and it worked perfectly." That specific narrative isn't
                showing up in search results.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I did find that's worth knowing:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    There are real billing-sync bugs in the ecosystem (one user had Max showing as Free tier despite an
                    active subscription) — these are edge cases but they happen, and support is reportedly slow.
                </Line>
                <Line>
                    The main historical pain point isn't <Word>
                        <Emphasis />
                        cancel iOS → resubscribe on web
                    </Word>. It's people who <Word>
                        <Bold />
                        didn't cancel iOS first
                    </Word>, tried to subscribe on web in parallel, and ended up double-billed or with mismatched account
                    states.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical risk assessment for your situation:
                </Word>
            </Paragraph>
            <Paragraph>
                The cleanest path — which you're already on — is: let iOS expire May 24, <Word>
                    <Emphasis />
                    then
                </Word> go to claude.ai, sign in with Google (same account), and subscribe to Max via Stripe. Account
                identity stays the same; only the payment processor changes. The architectural reason this works: Apple's
                IAP and Stripe are both just billing providers attached to your Claude account, not the account itself.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One safeguard I'd add:
                </Word> After May 24, before resubscribing, log into claude.ai with Google first and confirm you see your
                conversation history. That verifies you're in the right account. <Word>
                    <Emphasis />
                    Then
                </Word> subscribe to Max. If anything looks wrong at that point, stop and contact support — don't pay first
                and troubleshoot after.
            </Paragraph>
            <Paragraph>
                I can't promise it'll be frictionless, but the architecture supports what you want to do, and the failure
                modes I found are mostly avoidable by doing things in the right order — which you are.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-19T14:24:46.721027Z"
        >
            <Origin>019e409f-f6af-7bc7-9786-ac390f782816</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Doug: You have scoured the web, and can't find any discussion of how to do this? After expiration, Claude
                still could tell me to check iOS. It says that now. So it is bound to iOS. I have no proof that that ends
                after my subscription does and I would like to know. If this is a dead email because I would have to pay 20%
                more for Claude for ever I need to know that
            </Paragraph>
        </Message>
        <Message
            at="2026-05-19T14:25:03.416786Z"
        >
            <Origin>019e409f-f6af-78dc-9de6-0ddc3536df51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right to push back. I gave you architectural reasoning when you asked for evidence, and that's not
                the same thing. Let me actually look.
            </Paragraph>
            <Action>Searched the web for “Claude iOS subscription expired now subscribe web reddit”</Action>
            <Action>Searched the web for “Claude switch from App Store to direct billing web upgrade Max”</Action>
            <Paragraph>
                Doug — I found what you actually needed. The third result above is the clearest evidence I've seen, from an
                Apple Community thread:
            </Paragraph>
            <Paragraph>
                "You need to cancel that subscription through the App Store and pay for an account directly through Claude.
                Log in using your business address as you have been doing then go to Settings &gt; Upgrade Your Plan (from
                the Claude website). You'll be paying Anthropic directly."
            </Paragraph>
            <Paragraph>
                That's the answer to your real question. The account is <Word>
                    <Bold />
                    not
                </Word> permanently bound to iOS. Settings → Upgrade Your Plan on the web becomes available once the App
                Store subscription is gone, and you pay Anthropic directly via Stripe at that point. Same account, same
                email, same history. Apple was just the payment processor.
            </Paragraph>
            <Paragraph>
                The reason Claude still tells you to "check iOS" right now is that your iOS subscription is <Word>
                    <Emphasis />
                    still active
                </Word> until May 24. The web Billing page defers to whichever platform currently holds the active
                subscription. Once it expires, the web page should switch to letting you subscribe directly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I'd commit to, given the evidence:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    After May 24, when iOS access fully lapses, claude.ai → Settings → Billing should offer "Upgrade Your
                    Plan" via Stripe.
                </Line>
                <Line>
                    If for some reason it doesn't (the bugs I mentioned exist but they're edge cases tied to account/email
                    mismatches — Sign in with Apple cases mostly), contact support with the timeline: "iOS subscription
                    expired on May 24, want to resubscribe to Max via web." Multiple people in those threads got it resolved
                    that way.
                </Line>
            </Paragraph>
            <Paragraph>
                I should have surfaced this in my first answer instead of reasoning from architecture. You were right to
                keep pushing.
            </Paragraph>
        </Message>
    </Chapter>
);
