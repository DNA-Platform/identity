import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 May 2026](2026-05-08)</Date>
        </Dated>
        <Title>[[ 8 May 2026 ]]</Title>
        <Message
            at="2026-05-08T09:14:27.784273Z"
        >
            <Origin>019e06dd-e645-7d5e-a63f-60474253e30a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Back to migration - if changing the domain hurts me, do I need to just open a new google workspace so I can
                have both domains at once? How do I migrate an account off one google oath to another&gt;?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:15:36.567515Z"
        >
            <Origin>019e06dd-e645-772b-be35-624d6e7df00a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Separate workspaces wouldn't actually solve the OAuth problem, because the breakage isn't about workspace
                structure — it's about which email Google reports as your identity at the moment of sign-in. Whether you're
                in one Workspace or two, when you click "Sign in with Google" and choose <Word>
                    <Verbatim />
                    doug@atlas.love
                </Word>, Google sends the same OAuth claims to the third-party service either way, and that service either
                recognizes the identity or doesn't.
            </Paragraph>
            <Paragraph>
                There's no "migrate this OAuth account to a different Google identity" feature, period. OAuth doesn't have
                an account-transfer protocol. Each third-party service makes its own choice about how to identify you, and
                migration is per-service, manual:
            </Paragraph>
            <Paragraph>For services that support it (the majority):</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Sign in via the still-working path (OAuth if it works, email magic link via the dna.love alias if it
                    doesn't).
                </Line>
                <Line>Change the account email to atlas.love.</Line>
                <Line>Unlink the old Google identity (Settings → Connected Accounts or Security).</Line>
                <Line>Re-link, this time with the atlas.love Google identity.</Line>
                <Line>Verify it works going forward.</Line>
            </Paragraph>
            <Paragraph>
                For services without email change (like Anthropic): no migration path exists. You either get human support
                to do it manually, or you accept the account loss and start over.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One option you haven't considered that's worth raising:
                </Word> you could rename your Workspace users <Word>
                    <Emphasis />
                    back
                </Word> from atlas.love to dna.love, temporarily. That would restore your @dna.love OAuth identity for the
                next three weeks, and your existing services would recognize you again. Then you'd migrate each service via
                the OAuth-still-works path (change email to atlas.love → re-link Google OAuth) before May 28, instead of via
                the email-magic-link recovery path you're currently grinding through.
            </Paragraph>
            <Paragraph>
                The trade-off is that each rename has small costs — Google Profile resets, marketplace apps need re-auth,
                the <Word>
                    <Verbatim />
                    sub
                </Word>-may-shift bug we discussed. You'd be paying those costs twice (rename forward, rename back, rename
                forward again at the end). And the apps you've already touched via email recovery don't need the rename-back
                help.
            </Paragraph>
            <Paragraph>
                So the question is: how many services are still un-migrated and locked to @dna.love OAuth? If it's many,
                renaming back to @dna.love and grinding through the cleaner path might net out cheaper. If it's few, just
                keep doing what you're doing.
            </Paragraph>
            <Paragraph>What's the count of un-migrated services left, roughly?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:17:02.494092Z"
        >
            <Origin>019e06e0-4217-7977-9a89-f2954fb6e1a8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Two workspaces means I can log into both. IF I switch, I completely lose the old one for all other accounts.
                It's not practical to switch back and forth. That isn't solivng a problem. If the switch actually switched
                my account login for some cases that would be great, but I haven't seen that so far. When I switch, sites
                seem to act like its a new logic
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:18:06.726221Z"
        >
            <Origin>019e06e0-4217-7f10-82bd-31055c213708</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right on all three points, and I should have framed it that way from the start.</Paragraph>
            <Paragraph>
                Two workspaces would give you parallel identities, yes — but it wouldn't actually solve the underlying
                problem, because doug@dna.love is going away on May 28 regardless of workspace structure. After the domain
                dies, the dna.love OAuth identity dies with it (mail stops routing, password resets stop working, Google
                eventually deprovisions). So a separate workspace would buy you exactly the same three weeks of
                dual-identity that you have right now via the alias path. Just at the cost of a much more complex setup.
            </Paragraph>
            <Paragraph>
                The hoped-for "automatic migration when sub is preserved" — yeah, it doesn't materialize in practice. Almost
                no consumer service follows Google's recommendation to key by sub. Fiverr matches by email, Anthropic
                matches by email, almost everyone matches by email. So the rename can never give you the seamless migration
                you'd want; it can only give you a new identity that's invisible to services keyed on the old one.
            </Paragraph>
            <Paragraph>
                What you have right now is functionally already the dual-identity setup you were considering, just expressed
                differently:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>The atlas.love OAuth identity is your forward-going identity (what you sign in as via Google).</Line>
                <Line>
                    The dna.love alias on each user is your legacy email-only identity (what receives mail at the old
                    address, what password resets go to).
                </Line>
            </Paragraph>
            <Paragraph>
                Together, they give you exactly the recovery capability that two workspaces would have given you: log in to
                a service via email magic link (or password reset) to dna.love, change the account email to atlas.love,
                optionally re-link Google OAuth. The mechanism is just "email magic link to the alias" rather than "OAuth
                via the parallel identity." Same outcome.
            </Paragraph>
            <Paragraph>
                So setting up a second workspace at this point would be solving a problem you don't actually have. The pain
                you're feeling is the inherent pain of OAuth migration when services don't use sub-based identity, and no
                Workspace structuring trick fixes that.
            </Paragraph>
            <Paragraph>The grim summary, then:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>There is no automatic OAuth migration. Every service is manual.</Line>
                <Line>
                    For each service: email magic link / password reset to dna.love → change email to atlas.love → re-link
                    Google or set password → done. This works for the ~80% of services that support email change.
                </Line>
                <Line>
                    For the rest (Anthropic, possibly Apple ID, possibly some others): contact support and hope, or accept
                    the account loss.
                </Line>
            </Paragraph>
            <Paragraph>
                The dna.love alias on your renamed users is your friend for the next three weeks. Lean on it for everything.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:19:20.854898Z"
        >
            <Origin>019e06e2-5f90-7e44-a95d-19e890a942b3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don't have an alias path. Each user has a primary email. The secondary doesn't come up when I search. I
                can't log into dna OAuth if I have atlas set as primary with the users emails migrated. Can you please do
                some research. You are well into the domain of over-speculation on this
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:21:18.544367Z"
        >
            <Origin>019e06e2-5f90-7487-b75b-8a9e7e8736d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. I've been speculating about alias behavior without verifying. Let me actually look this up.
            </Paragraph>
            <Action>Searched the web for “Google Workspace rename user primary email old address alias automatic”</Action>
            <Action>
                Searched the web for “Google Workspace rename user "Create email alias" checkbox checked default behavior”
            </Action>
            <Action>
                Searched the web for “Google Workspace change user domain dropdown alias not created bulk rename primary
                domain”
            </Action>
            <Action>
                Searched the web for “Google Workspace convert secondary domain to user alias domain after primary swap”
            </Action>
            <Paragraph>You're right that I was wrong. Here's what the documentation actually says:</Paragraph>
            <Paragraph>
                The "automatic alias on rename" behavior I kept claiming isn't quite what happens when you change the
                primary domain and then rename users. When you rename a user with the rename flow, Google Workspace
                typically converts the old primary email into an email alias for the user automatically, unless that address
                is already in use — but that's the <Word>
                    <Emphasis />
                    individual
                </Word> rename flow. The alias creation depends on the path you took, and Google's official documentation
                about the post-primary-domain-swap rename procedure doesn't mention the alias preservation explicitly. So if
                you used the dropdown-to-switch-domain method through Update User, the alias may simply not have been
                created.
            </Paragraph>
            <Paragraph>
                The deeper issue is what <Word>
                    <Verbatim />
                    dna.love
                </Word> is now in your Workspace. After the primary-domain swap, dna.love became a <Word>
                    <Bold />
                    secondary domain
                </Word>, not a <Word>
                    <Bold />
                    user alias domain
                </Word> — and these are completely different things:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        User alias domain
                    </Word>: Every user automatically gets <Word>
                        <Verbatim />
                        user@aliasdomain
                    </Word> as a free alias, mail to either address goes to the same inbox.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Secondary domain
                    </Word>: Treated as a separate domain capable of holding its own users. No automatic aliases.
                </Line>
            </Paragraph>
            <Paragraph>
                Per Google's FAQ: "you must remove the user alias domain from your account, then add the same domain back as
                a new secondary domain" — this is for the reverse direction, but the principle applies. To get @dna.love
                aliases for all your users, you need dna.love to be a <Word>
                    <Emphasis />
                    user alias domain
                </Word>, not a <Word>
                    <Emphasis />
                    secondary domain
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two ways to fix this:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Add aliases manually per user.
                </Word> In Admin Console → Directory → Users → click the user → "Add alternate email." Add <Word>
                    <Verbatim />
                    user@dna.love
                </Word>. Repeat for each user. For three users this is 3 minutes of work and is the simplest path. From
                source 18: aliases auto-deliver to the primary inbox once added, no other config needed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Convert dna.love from secondary domain back to user alias domain.
                </Word> Per Google: "If you are wanting to convert the old domain to an alias, Google documentation says
                that it can take 30 minutes to 24 hours to release the now-secondary domain and re-add it as an alias." So:
                remove dna.love from Manage Domains, wait, re-add it as a user alias domain (not secondary). Once added back
                as a user alias domain, all users automatically get <Word>
                    <Verbatim />
                    @dna.love
                </Word> aliases.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The hard truth I had wrong:
                </Word> Even with the alias in place, you still cannot sign in to Google as <Word>
                    <Verbatim />
                    you@dna.love
                </Word>. From source 18: "Aliases are only for receiving or sending mail, meaning you can't log in to a
                Google account using an alias account."
            </Paragraph>
            <Paragraph>
                So my "log in via dna.love OAuth" guidance was just wrong. What aliases enable is: mail to the alias arrives
                in your inbox. Which means password reset emails to <Word>
                    <Verbatim />
                    you@dna.love
                </Word> (sent by Fiverr, Anthropic, etc.) would arrive once the alias exists. That's the mechanism that lets
                you recover services that are keyed to dna.love — through email recovery, not through OAuth as @dna.love.
            </Paragraph>
            <Paragraph>So the actual recovery flow is:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Restore @dna.love alias on each user (Option 1 or 2 above).</Line>
                <Line>
                    For each service still keyed to @dna.love: use the service's email reset flow → reset email goes to
                    @dna.love → arrives in your inbox via alias → you set a password → log in → change email to @atlas.love.
                </Line>
            </Paragraph>
            <Paragraph>
                Sorry for the runaround. The framework is the same as what I described, but I was wrong that the alias
                mechanism worked automatically — it doesn't, and you need to set it up explicitly.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:22:51.438204Z"
        >
            <Origin>019e06e5-9368-7635-93f7-0e37dae8c820</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have no clue what your use case for aliases is. This is a migration. What is your migration
                recommendation? I need to swap services to new OAth somehow. We know it won't work for your platform so
                there IS NO magic bullet. What are the options for other sites
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:23:17.452880Z"
        >
            <Origin>019e06e5-9369-796f-83d9-6bcf311182fe</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Fair. Here are the actual migration options per service, in order of how clean they are:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Service supports email change.
                </Word> Sign in (any method that works), Settings → Email → change to @atlas.love, verify the new email,
                done. The Google OAuth link (if any) usually auto-updates to follow the new email, or there's a separate
                "Connected Accounts" section to re-link manually. This works for ~70-80% of services.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Service supports email change but Google OAuth is broken.
                </Word> Sign in via email + password instead of the Google button. If you never set a password, use "Forgot
                password?" — the reset goes to @dna.love, which arrives in your inbox if dna.love mail is still routing.
                (Whether it's still routing is a question you can settle in 30 seconds: send yourself an email to your old
                @dna.love address from another account. If it arrives, you're fine for the next 3 weeks.) Then proceed as
                Option 1.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: Service supports email change but you have no email+password fallback AND can't access dna.love mail.
                </Word> This is where the alias thing matters — if dna.love mail isn't reaching you, you're locked out. The
                fix is to make sure dna.love mail routes to your inbox before you need it. Test now while you have time.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 4: Service has no email-change UI but does have responsive support.
                </Word> Email their support: "I'm migrating from doug@dna.love to doug@atlas.love because my dna.love domain
                is expiring. The doc says self-service email change isn't available — can you do it manually?" Provide ID +
                payment info. Many services will. Some won't. Allow days for response.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 5: Service has no email-change UI and no support recourse.
                </Word> This is the Anthropic case. Two real options: (a) export your data, accept the loss, create a new
                account on @atlas.love. (b) Try the Hail Mary support ticket anyway — sometimes support says yes even when
                docs say no.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Order of operations for any service:
                </Word> test that you can sign in via email+password (or magic link) first. <Word>
                    <Emphasis />
                    Then
                </Word> change the email. Don't change the email before you have a non-Google fallback, because the change
                might break Google OAuth and leave you with no way back in.
            </Paragraph>
            <Paragraph>
                The pattern works whether or not you set up explicit @dna.love aliases — what matters is that mail to the
                @dna.love address reaches you. If it does, you have everything you need. Test it now before working through
                the list.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:25:06.026560Z"
        >
            <Origin>019e06e7-9f39-724e-b850-548079644eea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                But if I change email (we are only talking about OAuth use cases) it won't know google credentials. I still
                don't think you understand what I am asking. Yes, if I used a google email as any old email, I can change in
                the UI. That is not what I am asking
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:25:56.919512Z"
        >
            <Origin>019e06e7-9f39-730d-87b8-0f89163bb3b1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right, I was missing what you were actually asking. Let me give the real answer for OAuth-keyed services.
            </Paragraph>
            <Paragraph>
                The fundamental problem: the service has a record linking <Word>
                    <Verbatim />
                    google_account_X → service_account_Y
                </Word>. When your Google identity changed from @dna.love to @atlas.love, that link is broken (unless the
                service uses sub, which most don't). Changing email in the service's UI doesn't fix it on its own — the
                OAuth pointer also has to be updated, and most services don't expose a "change linked Google account"
                button.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two real paths, depending on whether the service has a non-Google login fallback:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path A: Service has email/password (or email magic link).
                </Word> Forgot password → reset email goes to @dna.love → log in via password → in settings, change email to
                @atlas.love AND disconnect/reconnect Google OAuth. Two changes, both needed.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Path B: Service is Google-OAuth-only.
                </Word> No email/password path exists. You can't get into the original account at all right now, because the
                Google identity that opens it (@dna.love) no longer exists as a sign-in option. The only way back in is to
                <Word>
                    <Bold />
                    temporarily rename your Workspace user back to @dna.love
                </Word>. Then sign in via Google OAuth (works again), update email/connected-accounts in the service, sign
                out, rename your Workspace user forward to @atlas.love, sign in via Google as @atlas.love to verify. One
                rename round-trip, batched across all your OAuth-only services in one session.
            </Paragraph>
            <Paragraph>
                Option B is the only path for services like that. The rename-back-and-forward isn't switching repeatedly —
                it's one batched operation: rename back, hit every OAuth-only service in one sitting, rename forward. Maybe
                an hour of work end to end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Triage:
                </Word> which of your remaining services have email/password fallback (Path A) vs. Google-only (Path B)?
                That tells you whether you need the rename-roundtrip at all.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:29:01.140083Z"
        >
            <Origin>019e06eb-3947-7e37-949c-157e308a8ada</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have my workspace to dna.love. I wouldn't be talking to you if I didn't right? I wouldn't be able to log
                in
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:29:40.336552Z"
        >
            <Origin>019e06eb-3947-7a12-8b51-7fd95a63534c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair point. I had been operating on an assumption about your current state that I should just ask about
                directly:
            </Paragraph>
            <Paragraph>
                What is your Workspace actually set to right now? You said earlier "all emails are updated," which I took to
                mean every user is renamed to @atlas.love. But you're saying you're logged in as dna.love. So one of these
                is going on:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    You reverted the rename(s) at some point and didn't mention it, and your primary user is back on
                    @dna.love.
                </Line>
                <Line>
                    You swapped the primary domain to atlas.love but never actually renamed users — they're still @dna.love.
                </Line>
                <Line>
                    Your Claude session is just persisting from before any of this happened, regardless of current state.
                </Line>
                <Line>
                    You're signing in to Claude via email magic link, not Google OAuth, so your Workspace state doesn't gate
                    Claude access.
                </Line>
            </Paragraph>
            <Paragraph>The advice differs depending on which of those is true. Could you tell me:</Paragraph>
            <Paragraph>
                <List />
                <Line>What's your primary email shown in your Google account right now (myaccount.google.com)?</Line>
                <Line>When you click "Sign in with Google" on a fresh service, which email does Google offer?</Line>
            </Paragraph>
            <Paragraph>Once I know your actual state I can stop speculating about it.</Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:30:08.062650Z"
        >
            <Origin>019e06ec-3f52-773f-9e2c-b57c9401871a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                dna.love is my primary. Atlas is my secondary. All the users are back to dna.love email. The atlas emails
                forward to dna
            </Paragraph>
        </Message>
        <Message
            at="2026-05-08T09:30:48.643226Z"
        >
            <Origin>019e06ec-3f52-7bf7-b7de-7ee69c234cd8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Got it. That's actually a smart state — you reverted to a known-good baseline and bought yourself runway.
                Now the strategy becomes much clearer.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The playbook from here:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 1 (now, while you're still on @dna.love primary): pre-migrate every service's email field.
                </Word> For each OAuth-keyed service, while Google OAuth as @dna.love still works:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Sign in via Google (works normally — your Workspace identity is still @dna.love).</Line>
                <Line>
                    In the service's settings, change the account email to @atlas.love. Verification email arrives at
                    @atlas.love and forwards to your dna.love inbox — click the link.
                </Line>
                <Line>Set a password if the service offers one, as a non-Google fallback.</Line>
                <Line>Done. Move on.</Line>
            </Paragraph>
            <Paragraph>
                After Phase 1, every service has @atlas.love as the email of record. The OAuth link still points to your
                @dna.love Google identity, but that's fine for now — what matters is the service's stored email is on the
                durable domain.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 2 (close to May 28): rename Workspace users to @atlas.love.
                </Word> This time, when you sign back into each service via Google as @atlas.love:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Services that match OAuth by email (most of them): the email Google sends now matches the stored email,
                    so the service recognizes you and the OAuth link auto-rebinds. No phantom accounts.
                </Line>
                <Line>Services that match by sub: had no issue either way.</Line>
                <Line>
                    Services where Phase 1 didn't work because they had no email-change UI (Anthropic, possibly others):
                    still broken, you fall back to email/password if you set one, or to support, or to data export + new
                    account.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The reason this works:
                </Word> the breakage you saw earlier was because you renamed <Word>
                    <Emphasis />
                    first
                </Word>, so services received an OAuth identity (@atlas.love) they'd never seen with no email-of-record
                match. By updating their stored email <Word>
                    <Emphasis />
                    first
                </Word>, you give them the connection point so when the OAuth identity changes later, they can resolve "this
                is the same user, just under a new identity."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The risk you're trading off:
                </Word> Phase 1 takes time (you have ~3 weeks). If you don't finish before May 28, anything not pre-migrated
                is in the same broken state you saw before, and you'll be doing email-password recovery via the dna.love
                forwarding instead.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Triage for Phase 1:
                </Word> highest-stakes services first — banks, IB, Mercury, Apple, Microsoft, Fiverr, microstock platforms,
                anything that touches money. Then mid-stakes (subscription services, accounts with personal data). Then
                low-stakes that can be re-created if lost.
            </Paragraph>
            <Paragraph>Does that clarify the actual strategic picture?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T10:09:16.273347Z"
        >
            <Origin>019e070f-e718-711d-b63a-791c8f91f898</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can I check all my google oauth logins somewhere so I can find the ones to change?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T10:10:03.992966Z"
        >
            <Origin>019e070f-e718-794e-aeda-e9bc0d0a44e8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Each Google account has a page that lists every third-party service with active OAuth access:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    https://myaccount.google.com/connections
                </Word>
            </Paragraph>
            <Paragraph>
                (also reachable via myaccount.google.com → Security → "Your connections to third-party apps &amp; services")
            </Paragraph>
            <Paragraph>
                This shows every service that has an active OAuth token to your Google account, what permissions it holds,
                and when it last accessed. Each entry is a service you've signed into via Google at some point and haven't
                revoked. That's exactly your migration list.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Caveat:
                </Word> services where the OAuth token expired or was revoked may not show up, even if you originally signed
                up via Google. So treat this as a strong starting list, not a guaranteed-complete one — if you remember a
                service that's not on the list, check it manually.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Do this for each of your three identities
                </Word> (your @dna.love account, Ana's, and the third one) by signing into each Google account and visiting
                that URL. Each account has its own independent list.
            </Paragraph>
            <Paragraph>
                Workflow suggestion: copy the list into a spreadsheet (or a tracker), one row per service per identity, then
                work through Phase 1 in priority order — banks/money first, then revenue accounts, then everything else. The
                page itself is just a list, not a tracker, and you'll lose your place if you don't externalize it.
            </Paragraph>
            <Paragraph>
                There's also an admin-side view in Admin Console (Security → API controls → App access control → "Manage
                third-party app access"), but for migration purposes the per-user <Word>
                    <Verbatim />
                    myaccount.google.com/connections
                </Word> view is more useful — it's organized by user and shows the relationship from your side.
            </Paragraph>
        </Message>
    </Chapter>
);
