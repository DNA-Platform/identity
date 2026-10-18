import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[19 May 2026](2026-05-19)</Date>
        </Dated>
        <Title>[[ 19 May 2026 ]]</Title>
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
