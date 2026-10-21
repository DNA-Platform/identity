import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 March 2026](2026-03-08)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-08T13:29:38.573237Z"
        >
            <Origin>019ccda3-96f0-7b76-8a5e-4d9983f431ba</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I keep getting this API rate limit reached from Claude Code. I have the Pro plan. It happened last night and
                it is still happening today. What's going on?
            </Paragraph>
            <Attachment>Uploaded “1772976550105_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-08T13:30:02.752789Z"
        >
            <Origin>019ccda3-96f0-7ffa-bb75-6b9305ba6c03</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/product-self-knowledge/SKILL.md</Action>
            <Action>Fetched https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md</Action>
            <Action>Searched the web for “Claude Code rate limits Pro plan 2025”</Action>
            <Paragraph>Here's what's going on. There are two separate limit systems that could be hitting you:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5-hour rolling window
                </Word> — this has always existed. It resets 5 hours after your <Word>
                    <Emphasis />
                    first
                </Word> prompt in a session, not on a fixed clock. The window begins with your first prompt and the clock
                resets only when you send the next message after 5 hours lapse. So if you hit it last night and it's still
                happening today, you may be triggering a fresh window before the previous one fully resets.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Weekly limit
                </Word> (newer, since Aug 28 2025) — Anthropic introduced weekly rate limits for Pro and Max subscribers in
                late August 2025, targeting heavy users. The existing 5-hour limits remained in place, with the weekly caps
                added on top. Pro and Max plan usage is shared across Claude.ai and Claude Code — all activity in both tools
                counts against the same limits.
            </Paragraph>
            <Paragraph>
                For the Pro plan specifically: Pro users can expect roughly 40–80 hours of Sonnet 4 through Claude Code
                within their weekly limits — but that's token-based, not actual wall-clock hours, so heavy agentic sessions
                with large file contexts burn through it much faster.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Your options per the official docs:
                </Word>
            </Paragraph>
            <Paragraph>
                You can wait until your usage period resets, enable extra usage (pay-as-you-go API credits at standard
                rates) to continue within the Pro plan, or upgrade to the Max 5x plan if you consistently hit limits.
            </Paragraph>
            <Paragraph>
                The most practical immediate move is to run <Word>
                    <Verbatim />
                    /status
                </Word> in the Claude Code terminal — it'll show you exactly what's left and when the reset hits. If you're
                doing research-heavy agentic sessions (which burn tokens fast), the Pro plan is genuinely tight for that
                workload.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:30:59.647074Z"
        >
            <Origin>019ccda4-d359-7ee4-ac2a-8f2a0e1cf086</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Even status gives me api limit reached</Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:31:08.027629Z"
        >
            <Origin>019ccda4-d359-704b-be8e-7a2cf4adb2d1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                That means you're fully blocked — the limit is being enforced at the API layer before any command can
                execute. There's nothing to do except wait for the reset.
            </Paragraph>
            <Paragraph>
                The 5-hour window started when you sent your first prompt in the session, so if you roughly remember when
                you were last working, add 5 hours to that. If it's the weekly limit that's exhausted, that resets 7 days
                from when you first hit it.
            </Paragraph>
            <Paragraph>Your only real options right now:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Wait it out
                    </Word> — either 5 hours from your last session start, or up to 7 days if it's the weekly cap
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add API credits
                    </Word> via the Anthropic Console (console.anthropic.com) — this lets Claude Code bill pay-as-you-go
                    instead of drawing from your Pro allocation
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Upgrade to Max
                    </Word> ($100/month) — gives you roughly 5x the weekly token budget
                </Line>
            </Paragraph>
            <Paragraph>
                Given that you're hitting it persistently across two days, it's likely the weekly cap rather than just the
                5-hour window. The Pro plan weekly budget is tight for agentic research-style sessions that load large file
                contexts, which is exactly what you were doing.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:33:38.973098Z"
        >
            <Origin>019ccda7-4059-778e-bf4c-0431572d4cf2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I upgrade to Max? I am in the browser.</Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:33:46.317988Z"
        >
            <Origin>019ccda7-4059-73ca-b530-797376f4d3d5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “claude.ai upgrade to Max plan browser steps 2025”</Action>
            <Paragraph>
                Direct link: <Word>
                    <Bold />
                    claude.ai/upgrade
                </Word>
            </Paragraph>
            <Paragraph>
                That's the official upgrade page. Your Pro plan will be upgraded to Max immediately, with billing adjusted
                on a prorated basis for the remainder of your current billing cycle.
            </Paragraph>
            <Paragraph>
                You'll see two options — Max 5x at $100/month or Max 20x at $200/month. Given you're hitting limits on
                intensive Claude Code sessions, 5x is probably the right starting point unless you're planning very heavy
                daily use.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:43:23.452142Z"
        >
            <Origin>019ccdb0-293a-796e-b190-1e90e6b5fc63</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is what I have. What are my options? I need Claude Code to work</Paragraph>
            <Attachment>Uploaded “1772977389585_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-08T13:43:35.180584Z"
        >
            <Origin>019ccdb0-293a-71ca-92df-beed44bd8327</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Stop — don't confirm that. You're already on Max 20x ($200/month), and this page is showing a <Word>
                    <Bold />
                    downgrade
                </Word> to 5x, not an upgrade. If you hit limits on 20x, dropping to 5x will make it worse.
            </Paragraph>
            <Paragraph>Your real options given you're already on the highest subscription tier:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Wait for the reset
                    </Word> — either the 5-hour window or the weekly cap, whichever is exhausted. Check claude.ai in the
                    browser to see if there's any usage indicator in settings.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Add API credits via Anthropic Console
                    </Word> (console.anthropic.com) — this is the most immediate fix. You fund a separate credit balance and
                    Claude Code bills against it at pay-as-you-go rates when your plan allocation is exhausted. It's not
                    cheap (Sonnet 4 is a few dollars per million tokens), but it unblocks you right now without waiting.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Contact Anthropic support
                    </Word> — since you're on their highest tier and still hitting limits, it's worth filing a ticket. They
                    may be able to clarify whether this is the weekly cap, when it resets, or whether something else is
                    going on.
                </Line>
            </Paragraph>
            <Paragraph>
                The Console/API credits route is probably your fastest path back to working today. Go to
                console.anthropic.com, add a credit balance, and Claude Code should offer to use it when your plan limit is
                hit.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:44:27.907037Z"
        >
            <Origin>019ccdb1-28af-7ad4-84d6-7269eb39d989</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do I know the API will be associated with my plan and not a separate key?</Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:44:41.587229Z"
        >
            <Origin>019ccdb1-28af-7329-b59b-09b89740262d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good instinct to check this. The key is that Claude Code authenticates via your <Word>
                    <Bold />
                    claude.ai login
                </Word>, not an API key. When you add credits to the Anthropic Console, as long as you sign into
                console.anthropic.com with the <Word>
                    <Bold />
                    same email address
                </Word> as your claude.ai account, the credits are on the same account and Claude Code will draw from them
                automatically when your plan allocation runs out.
            </Paragraph>
            <Paragraph>
                The one gotcha to watch for, from the docs: if you have an <Word>
                    <Verbatim />
                    ANTHROPIC_API_KEY
                </Word> environment variable set anywhere in your system (in your shell profile, <Word>
                    <Verbatim />
                    .env
                </Word> file, etc.), Claude Code will use that key instead of your logged-in account. You can check by
                running:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`echo $ANTHROPIC_API_KEY`}
            </CodeBox>
            <Paragraph>
                If it returns nothing, you're fine — Claude Code is using your account login. If it returns a key string,
                that's a separate API key and you'd want to unset it to make sure you're on your subscription.
            </Paragraph>
            <Paragraph>
                You can also run <Word>
                    <Verbatim />
                    /status
                </Word> in Claude Code once your limits reset to confirm which account and authentication method it's using.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:48:25.296709Z"
        >
            <Origin>019ccdb4-c453-773b-a989-efddf7318657</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I bought $5 work of API credit to test. My account didn't use it. Still API limit reached</Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:48:44.814912Z"
        >
            <Origin>019ccdb4-c453-72c4-8aec-435f4b887d5c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Claude Code enable API credits after plan limit reached console”</Action>
            <Paragraph>
                The $5 API credits you bought are in the <Word>
                    <Bold />
                    Console
                </Word> (API system), which is a completely separate billing system from your claude.ai subscription. Claude
                Code running on your Max plan won't automatically draw from those Console credits.
            </Paragraph>
            <Paragraph>There are actually two different things here:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What you actually need: "Extra Usage"
                </Word> — this is the subscription-native overflow feature. Go to <Word>
                    <Bold />
                    claude.ai → Settings → Usage
                </Word> and look for an option to enable extra usage. When you reach your plan's usage limit with extra
                usage enabled, you'll see a notification that you've reached your session limit, and if extra usage is
                enabled and you have funds available, you can choose to continue working. This bills against your claude.ai
                account directly, not the Console.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The other issue worth noting:
                </Word> Your screenshot earlier showed you're on Max 20x already, and there's a known bug that matches your
                situation almost exactly. There's a reported bug where every request returns "API Error: Rate limit reached"
                despite a Claude Max subscription being active — and in that case, API credits added as a workaround were
                consumed instantly within seconds, leaving the account in debt. That bug's fix was a fresh <Word>
                    <Verbatim />
                    /login
                </Word> in the terminal.
            </Paragraph>
            <Paragraph>So try this sequence:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    In Claude Code terminal: <Word>
                        <Verbatim />
                        claude logout
                    </Word> then <Word>
                        <Verbatim />
                        claude login
                    </Word>
                </Line>
                <Line>If that doesn't work, check claude.ai → Settings → Usage for the Extra Usage toggle</Line>
            </Paragraph>
            <Paragraph>
                If neither works, this may genuinely be a bug and worth filing at github.com/anthropics/claude-code/issues.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:49:44.210393Z"
        >
            <Origin>019ccdb5-f969-7f0e-98c3-97bfc6937f6d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>This is what I see in settings</Paragraph>
            <Attachment>Uploaded “1772977776014_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-08T13:49:56.211434Z"
        >
            <Origin>019ccdb5-f969-742b-b7d2-54f85ee7c8f4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This tells us exactly what's happening. Your plan limits are fine — 0% session used, only 7% weekly. The
                problem is right at the bottom:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Extra usage is enabled, but your current balance is $0.00.
                </Word>
            </Paragraph>
            <Paragraph>
                Claude Code is hitting the limit, trying to fall over to extra usage, finding no balance, and throwing the
                rate limit error. The $5 you bought went to the Console (API system), not to this extra usage balance —
                they're separate.
            </Paragraph>
            <Paragraph>
                The fix is simple: click <Word>
                    <Bold />
                    "Buy extra usage"
                </Word> right there on that page to add funds to this balance. Even $10-20 should be plenty to get you
                unblocked immediately given your actual usage is so low.
            </Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:50:27.908276Z"
        >
            <Origin>019ccdb6-a641-746d-b280-e6da76a0c615</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>But why do I need extra usage if my limits are so low</Paragraph>
        </Message>
        <Message
            at="2026-03-08T13:50:48.459488Z"
        >
            <Origin>019ccdb6-a641-716d-905f-b8d0e2a64c3e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good catch — look more carefully at that screen. The <Word>
                    <Bold />
                    $80.99 spent
                </Word> line is the key. That's your extra usage spending this month (resets Apr 1). So what actually
                happened:
            </Paragraph>
            <Paragraph>
                Earlier this month you hit your weekly limits multiple times, extra usage kicked in and covered it, and over
                the course of the month it spent $80.99 doing so — depleting your balance to $0. Now the weekly limit has
                recently reset (that's why it shows 7%), but extra usage is still toggled on with no balance left to draw
                from, so any time Claude Code tries to route through it, it fails.
            </Paragraph>
            <Paragraph>
                The 0% session and 7% weekly are current — they reset on a rolling basis. But the extra usage balance is
                monthly and it's been drained.
            </Paragraph>
            <Paragraph>So your real options are:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Turn off extra usage
                    </Word> (toggle it off) and rely purely on your plan allocation — given you're only at 7% weekly and 0%
                    session right now, that should be enough to work normally today
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Buy more extra usage balance
                    </Word> if you want the overflow safety net back
                </Line>
            </Paragraph>
            <Paragraph>
                Turning it off is probably the right move right now since your plan limits are genuinely low. The $0 balance
                with the toggle on is what's blocking you.
            </Paragraph>
        </Message>
    </Chapter>
);
