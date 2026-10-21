import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 May 2026](2026-05-27)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-27T13:56:14.234162Z"
        >
            <Origin>019e69b8-b12c-7584-b44b-6fbae4a6c5cc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay, you probably know that I am in the middle of a complex migration because I am losing my domain. Here's
                my next step. In google workspace, I need to switch which domain is primary.
            </Paragraph>
            <Paragraph>Do I want to keep the domain in the account even though I don't use it?</Paragraph>
        </Message>
        <Message
            at="2026-05-27T13:57:58.217539Z"
        >
            <Origin>019e69b8-b12c-78dc-b14b-b7cf0b79cd6e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll check the current Google Workspace specifics on this before giving you a recommendation — domain
                policies are exactly the kind of thing that shifts, and the "losing the domain" angle changes the calculus.
            </Paragraph>
            <Action>
                Searched the web for “Google Workspace keep secondary domain no longer own expired security risk”
            </Action>
            <Paragraph>
                Short version: no — not as a permanent fixture. But the reasoning matters here, because the standard advice
                you'll find online doesn't apply to your situation.
            </Paragraph>
            <Paragraph>
                The usual "keep the old domain as a secondary/alias for 3–6 months" guidance assumes you <Word>
                    <Emphasis />
                    still own and control the old domain
                </Word>. That cushion works because you keep DNS control, so mail to the old addresses still forwards while
                people update their contacts. You're losing dna.love — so that assumption breaks. Once you no longer control
                the domain, you may stop receiving email at it because the MX records get reset by the host or whoever
                acquires it next. The forwarding value of keeping it evaporates the moment ownership lapses.
            </Paragraph>
            <Paragraph>
                And Google doesn't actually give you the "park it forever" option anyway. Their policy is explicit: if your
                expired domain is bought by someone else, you can no longer use it with Workspace and must remove it from
                the account — and if it were your primary domain, you'd have to delete the whole account. That last clause
                is exactly why you're switching primary to atlas.love first: it demotes dna.love to a secondary domain so
                that losing it is a "remove the domain" problem instead of a "lose the account" problem. Good sequencing.
            </Paragraph>
            <Paragraph>
                The real reason to keep it <Word>
                    <Emphasis />
                    temporarily
                </Word> isn't email — it's identity. Your actual exposure is the OAuth audit you already flagged: services
                where a @dna.love address is the "Sign in with Google" identity, and some of those won't let you change the
                linked Google identity. As long as the user accounts under dna.love still exist in Workspace and the domain
                stays verified, those login identities keep functioning even after DNS control is gone — right up until
                someone re-registers the domain and Google forces removal. So dna.love is worth keeping in the account as a
                bridge <Word>
                    <Emphasis />
                    only
                </Word> until that audit is complete and every service has either migrated to an atlas.love identity or has
                an alternate login path.
            </Paragraph>
            <Paragraph>
                After that, remove it, and treat removal as something to do deliberately rather than let happen to you. The
                security argument is the sharp one: if a stranger re-registers dna.love, they control @dna.love mail. Any
                lingering alias, recovery address, or login identity on that domain becomes a live account-takeover vector —
                password resets and verification mails route to <Word>
                    <Emphasis />
                    them
                </Word>. A dead domain you don't own is pure attack surface with zero upside once forwarding is gone.
            </Paragraph>
            <Paragraph>
                One practical constraint on the mechanics: you can't remove a secondary domain until you've reassigned every
                user, group, and alias off it (renaming them to atlas.love, in bulk if needed) and cleared any associated
                alias/test domains. So removal falls out naturally as the last step of finishing the migration — once
                nothing depends on dna.love, deleting it is a two-click confirm, and you can typically reuse the name within
                about 30 minutes if you ever needed to (you won't).
            </Paragraph>
            <Paragraph>
                So: keep it as a bridge through the identity audit, then purge it. Don't keep it because it feels safer to
                leave things in place — for a domain you're losing, leaving it in place is the riskier option.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:00:04.429923Z"
        >
            <Origin>019e69bc-34c0-78db-870a-a4009e4c9eee</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so right now I think I have a different secondary domain. I need to switch and what make the current
                one secondary, set up forwarding. How do I do that
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:01:57.475543Z"
        >
            <Origin>019e69bc-34c0-73ef-b688-95adf5ec99d3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good news: those aren't two separate actions. Changing the primary domain <Word>
                    <Emphasis />
                    is
                </Word> what demotes the old one — when you promote atlas.love to primary, Google automatically reclassifies
                the current primary as a secondary domain. So it's one operation, plus the forwarding.
            </Paragraph>
            <Paragraph>
                First, one check decides your path. Open Admin console → Account → Domains → Manage domains and find
                atlas.love:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If it's listed and shows <Word>
                        <Bold />
                        verified
                    </Word> as a <Word>
                        <Emphasis />
                        secondary domain
                    </Word>, you're ready to switch.
                </Line>
                <Line>
                    If it's not there — or it's there as a <Word>
                        <Emphasis />
                        domain alias
                    </Word> rather than a secondary domain — add it first (Add a domain → enter atlas.love → choose
                    "secondary domain" → verify via the TXT record at your registrar). You can only promote a verified
                    <Word>
                        <Emphasis />
                        secondary
                    </Word> domain to primary; an alias can't be promoted. That distinction is the one common gotcha here.
                </Line>
            </Paragraph>
            <Paragraph>
                The "different secondary domain" you think is sitting in there is almost certainly fine to ignore — it
                doesn't interfere. Just confirm atlas.love specifically is present and verified.
            </Paragraph>
            <Paragraph>Then the switch and the forwarding:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Manage domains → Change primary domain → select atlas.love → confirm. The old primary drops to secondary
                    automatically. Give it a few minutes to propagate.
                </Line>
                <Line>
                    Important: this does <Word>
                        <Bold />
                        not
                    </Word> rename your users. doug@dna.love stays doug@dna.love until you rename it — the primary change
                    only sets the org default and lets you reassign.
                </Line>
                <Line>
                    For each person (you, Ana, anyone else): Directory → Users → the user → rename their address to
                    @atlas.love, then use <Word>
                        <Bold />
                        Add Alternate Emails
                    </Word> to put their old @dna.love address back onto the same account. Now mail to <Word>
                        <Emphasis />
                        either
                    </Word> address lands in one inbox — no forwarding rule to build or maintain.
                </Line>
            </Paragraph>
            <Paragraph>
                That aliasing approach is the "forwarding" you want, done the robust way. A forwarding rule would be a
                second thing to manage and would break the same moment aliasing does — so skip the rule.
            </Paragraph>
            <Paragraph>
                The caveat that's specific to you: all of this for dna.love only works while its MX records still point to
                Google, i.e. while you still own the domain. The aliases are a bridge, not a permanent forward — once
                dna.love lapses, DNS (not Workspace) stops routing the mail and nothing in the console can save it. So this
                window is exactly your runway to move senders and the OAuth logins over to atlas.love before you let the
                domain go.
            </Paragraph>
            <Paragraph>
                If you specifically want a true catch-all — mail to <Word>
                    <Emphasis />
                    any
                </Word> @dna.love address, including ones with no matching user — that's a separate "default routing" rule
                in Gmail's admin settings. For a handful of mailboxes the aliases above cover everything, so I'd only reach
                for it if you know you're getting mail to addresses that aren't real accounts.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:05:45.503460Z"
        >
            <Origin>019e69c1-6837-7956-8fad-9f8df9225c4e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay I changed the primary domain to atlas, changed everyone's user. I usually sign in to the admin console
                with dna.love. Shoukd my login have changed?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:06:47.989116Z"
        >
            <Origin>019e69c1-6837-7fe3-bc55-398dc1a5639d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your canonical login is atlas.love now — doug@atlas.love is your primary identity, and that's what you
                should treat as "your login" going forward. But dna.love almost certainly still works too, which is why
                nothing felt broken. When you renamed yourself, Google automatically kept doug@dna.love on the account as an
                alias (the same mechanism that keeps your old mail arriving), and you can sign into the admin console with
                an alias just as well as with the primary. So both addresses currently land on the same super-admin account.
                Your admin rights are attached to the account object, not the email string, so the rename carried them over
                intact.
            </Paragraph>
            <Paragraph>
                So to answer directly: your <Word>
                    <Emphasis />
                    real
                </Word> login changed — to atlas.love — but you weren't forced off dna.love. Both work right now. The move
                is to start signing in with doug@atlas.love and confirm it lets you in cleanly. Don't keep leaning on the
                dna.love login, because it's an identity riding on a domain you're losing — it'll keep working only until
                you remove dna.love (or it lapses and Google forces removal), and then it's gone.
            </Paragraph>
            <Paragraph>
                One thing worth checking while you're in the console, because it's the exact way people lock themselves out
                right after a domain change: your admin account's recovery email and recovery phone. If the recovery email
                is anything @dna.love, switch it now — ideally to an address that isn't on either of these domains,
                something you'll always control. A super-admin whose only recovery path lives on the domain that's about to
                disappear is the silent lockout scenario from that forum horror story earlier — it looks fine until the day
                you actually need it.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:11:02.947391Z"
        >
            <Origin>019e69c6-40ac-7ea4-bf17-505f4027072c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay the recovery is good. WHat about forwarding from dna.love</Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:12:18.472862Z"
        >
            <Origin>019e69c6-40ac-70ab-99bf-f4baa8fb90b4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Worth a quick check on the exact behavior, because the load-bearing fact here is what the rename did
                automatically — and if I'm wrong about that, you'd think mail is flowing when it isn't.
            </Paragraph>
            <Action>
                Searched the web for “Google Workspace rename user old email address kept as alias automatically”
            </Action>
            <Paragraph>
                Most likely you've already got it — and you got it for free. When you renamed each user to @atlas.love,
                Google's default behavior is to keep the old address as an alias precisely so mail doesn't drop: to ensure
                continuous email delivery after an email change, Workspace keeps the old email address as an alias on that
                user, and they keep access to everything received at the old address. So doug@dna.love → doug@atlas.love
                mailbox is probably already happening, with no forwarding rule to build or maintain. That's the robust
                version of "forwarding" — a copy lands in the same inbox, nothing to break.
            </Paragraph>
            <Paragraph>
                The one thing that could have skipped it: the rename dialog has a <Word>
                    <Bold />
                    "Create email alias"
                </Word> checkbox that's checked by default, and Google converts the old primary into an alias automatically
                unless that address was already in use elsewhere. So as long as you didn't deliberately uncheck it, you're
                set. Worth a 10-second confirm per user rather than assuming:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Directory → Users → click a user.</Line>
                <Line>
                    Look at the <Word>
                        <Bold />
                        Email aliases
                    </Word> / alternate emails section on their account page.
                </Line>
                <Line>Confirm the @dna.love address is listed there.</Line>
            </Paragraph>
            <Paragraph>
                If it's present for everyone, your forwarding is done. If anyone's missing it, add it with <Word>
                    <Bold />
                    Add Alternate Emails
                </Word> → enter their @dna.love address. (Allow up to a day for a freshly added alias to start routing.)
            </Paragraph>
            <Paragraph>
                Same caveat as before, and it's the one that actually matters: these aliases route mail only while
                dna.love's MX records still point to Google — i.e., only while you still own the domain. The alias is a
                bridge, not a permanent forward. The day dna.love lapses, DNS decides where its mail goes and nothing in the
                console can override that. So treat this window as your runway to move correspondents — and especially any
                OAuth "sign in with Google" identities — over to atlas.love.
            </Paragraph>
            <Paragraph>
                One distinction in case it's what you meant: aliases cover mail to your <Word>
                    <Emphasis />
                    real
                </Word> mailboxes (doug@, ana@, etc.). If you also want to catch mail sent to @dna.love addresses that
                <Word>
                    <Emphasis />
                    aren't
                </Word> real users, that's a separate "default routing" rule in Gmail's admin settings — but for a handful
                of named mailboxes, the aliases already cover everything and I wouldn't bother.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:13:06.650409Z"
        >
            <Origin>019e69c8-234e-7a3c-ba6d-4945d464be9f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right but I had forwarding from atlas to dna. Certainly want to end that but maybe I want from dna to atlas
            </Paragraph>
            <Paragraph>Or do I remove the domain from my account today?</Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:14:39.598257Z"
        >
            <Origin>019e69c8-234e-75aa-bde6-1a77ffe6aa29</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Two different mechanisms are getting tangled here, and separating them resolves most of the question.
            </Paragraph>
            <Paragraph>
                The atlas→dna "forwarding" you remember was from the old world, when dna.love was primary and you wanted
                your atlas mail to land in your dna inbox. The important thing: the rename already inverted that
                relationship <Word>
                    <Emphasis />
                    for you
                </Word>. When you renamed yourself to doug@atlas.love primary, Google made doug@dna.love the alias on that
                same account — so dna mail now flows into the atlas inbox automatically. That's your "dna→atlas" path, and
                you already have it. Don't build a forwarding rule for it; the alias does the same job more robustly, and
                stacking a forward on top of an alias is how you create duplicate-delivery or loop messiness.
            </Paragraph>
            <Paragraph>
                So you're not <Word>
                    <Emphasis />
                    reversing
                </Word> a forward — you're hunting down whatever literal rule is left over and killing it.
            </Paragraph>
            <Paragraph>
                On ending atlas→dna: yes, and do this part today regardless of what you decide about the domain. But first
                figure out what it actually is, because it determines whether there's anything to do:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If "atlas→dna" was just the old alias arrangement, the rename already dissolved it — there's nothing
                    left to delete, you're clean.
                </Line>
                <Line>
                    If it was a real Gmail forwarding rule, it still exists and is now actively pointing your live primary's
                    mail at the domain you're losing. Check Gmail → Settings → <Word>
                        <Bold />
                        Forwarding and POP/IMAP
                    </Word>, and also the <Word>
                        <Bold />
                        Filters
                    </Word> tab (a filter can forward). Domain-wide, check the admin console's Gmail routing settings.
                    Delete any rule sending atlas.love mail to a dna.love address. If you leave it, the day dna lapses your
                    atlas mail starts forwarding into a dead box — or a stranger's.
                </Line>
            </Paragraph>
            <Paragraph>
                Now the real question — remove the domain today, or not. The deciding factor isn't email; the alias handles
                email fine while you own the domain. It's identity. Removing dna.love forces you to strip the dna.love
                aliases off every account first, which (a) instantly stops inbound mail to old addresses and (b) kills any
                account where a @dna.love address is still the "sign in with Google" identity. That second one is the
                expensive, hard-to-reverse failure — some services won't let you change the linked Google identity at all.
            </Paragraph>
            <Paragraph>
                So: have you finished the OAuth audit and confirmed nothing still authenticates through a @dna.love login?
            </Paragraph>
            <Paragraph>
                If yes — and no inbound mail to the old addresses still matters — then remove it today, deliberately. That's
                better than letting it lapse, because you close the re-registration risk window on your own schedule instead
                of waiting for a stranger to acquire it.
            </Paragraph>
            <Paragraph>
                If the audit isn't done — and given how much you flagged it as the hard part, I'd guess it isn't — then no,
                not today. The domain is yours until it expires, the alias bridge keeps working for free in the meantime,
                and that's exactly the runway you need to move logins and notify correspondents. Removing it now just trades
                a managed risk for an immediate breakage.
            </Paragraph>
            <Paragraph>
                My read: kill the atlas→dna rule today, leave dna→atlas alone (the alias has it), and don't pull the domain
                until the identity audit comes back clean — then pull it on purpose.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:17:25.197691Z"
        >
            <Origin>019e69cc-155f-72a7-803e-34822e416d6d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well you said the atlas-&gt;dna rule is killed. I didn't configure it manually. I'm pretty sure google did
                it for me. If you are saying kill dna today - is that so I can remove the registry token from the DNS? What
                is the virtue of that? Yeah I have switched the accounts but, the account for this account - yours - for
                instance, might get some email. What's the downside of holding onto the domain in Google and seeing if I
                have access for a while
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:19:30.847898Z"
        >
            <Origin>019e69cc-155f-7583-9cbb-0a69418d9d6e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right, and it simplifies things. If you never set up a Gmail forward by hand, then "atlas→dna" was
                Google's automatic behavior — atlas.love acting as a domain <Word>
                    <Emphasis />
                    alias
                </Word> of dna.love, which auto-routes every atlas address to the matching dna address with no per-user
                config. Making atlas.love primary and renaming everyone dissolved that by itself. There's no leftover rule
                to hunt down, and ignore my earlier "go check Forwarding settings" — I was assuming a manual rule you never
                made. Both addresses now just deliver into the one atlas mailbox.
            </Paragraph>
            <Paragraph>
                On the DNS token: no, that's not the reason, and there's no virtue in it. The thing in your DNS is the
                <Word>
                    <Verbatim />
                    google-site-verification
                </Word> TXT record — an inert string that proves ownership to Google. It costs nothing, leaks nothing, and
                removing it accomplishes nothing for you. The framing doesn't even work mechanically: while you own dna.love
                the record is harmless, and once you lose it you don't control its DNS anyway, so there's nothing for you to
                tidy. "Remove the domain so I can clean up DNS" isn't a real motivation — drop it.
            </Paragraph>
            <Paragraph>
                And I should walk back what I said last turn. I told you removing the domain today would "close the
                re-registration risk window on your own schedule." That overstates what Workspace removal does. The
                re-registration danger lives entirely at the <Word>
                    <Emphasis />
                    external-service
                </Word> layer: if a stranger later buys dna.love, they control @dna.love mail, and any outside service still
                set to send password resets or 2FA to a @dna.love address becomes a takeover path. Removing the domain from
                Google Workspace does nothing about that — the fix is migrating those external logins and recovery addresses
                off @dna.love, which is precisely your OAuth audit. The Workspace listing is basically orthogonal to the
                security question, so removal isn't the lever I implied.
            </Paragraph>
            <Paragraph>
                Which means your instinct is the better one. Holding the domain in Google for a while has essentially no
                downside, as long as you still own the registration. The alias bridge keeps working for free, stray mail to
                old addresses — including, as you note, whatever still arrives for accounts tied to a dna.love address —
                keeps landing in your atlas inbox, and you <Word>
                    <Emphasis />
                    keep
                </Word> access rather than ending it. Keeping it verified in your account is, if anything, mildly
                protective: a stranger can't add a domain to their own Workspace while it's still verified in yours. And
                secondary domains cost nothing extra; you're billed per user, not per domain.
            </Paragraph>
            <Paragraph>
                The clock you actually care about isn't on Google's side at all — it's the registrar's. "How long do I have
                access" really means "how long until dna.love's MX records change," and that's governed by your domain
                expiry, not by any console setting. Google won't yank it the instant it lapses, but the day the registration
                ends and DNS flips, the bridge stops — not gradually, all at once — and nothing in the admin console can
                route mail for a domain you no longer control.
            </Paragraph>
            <Paragraph>
                So the only genuine downside of holding on isn't damage, it's complacency: the bridge is comfortable enough
                that it can quietly let the login audit slide until the registration deadline arrives and the addresses you
                forgot about break with it. Keep working that audit in parallel and you can hold the domain for as long as
                you've got it. The decision to remove is downstream — it comes when the audit's clean, or when ownership
                lapses — not today.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:54:14.312728Z"
        >
            <Origin>019e69ed-d028-710f-90c6-7f9aae63c146</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well I just logged into google atmin with atlas and it was fine. So we feel okay with leaving things in this
                state?
            </Paragraph>
            <Attachment>Uploaded “1779893651939_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-05-27T14:55:08.829940Z"
        >
            <Origin>019e69ed-d028-7b89-9606-41862aa6b787</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — this is exactly the state you were aiming for, and the screen confirms it cleanly. atlas.love reads
                Primary Domain, Verified, Gmail activated, and you just proved the login half works. dna.love dropped to
                Secondary Domain but is still Verified with Gmail activated — that "Gmail activated" on the secondary line
                is the part that matters: it's what keeps the alias bridge live, so stray mail to old @dna.love addresses
                (including the account you mentioned) still lands in your atlas inbox. And because dna.love is secondary now
                rather than primary, its "Remove" action is available for whenever you want it, and its eventual loss can't
                force an account deletion. The sequencing did its job.
            </Paragraph>
            <Paragraph>
                The other three rows are inert Google plumbing, not anything you created or need to manage.
                atlas.love.guest.google and dna.love.guest.google are auto-provisioned guest domains (used for visitor/Chat
                features); leave them. dna.love.test-google-a.com is the legacy test alias Google generated at signup — also
                harmless. The only reason to even note it: when you eventually remove dna.love, you have to deactivate any
                associated test/alias domains like this one first. That's the "Deactivate" link next to it. Not today — just
                so it doesn't surprise you on removal day.
            </Paragraph>
            <Paragraph>
                So: feel fine leaving the <Word>
                    <Emphasis />
                    Workspace configuration
                </Word> exactly like this. There's no cleanup owed, nothing degrading, and holding costs you nothing (you're
                billed per user, not per domain).
            </Paragraph>
            <Paragraph>
                The one thing I'd flag — gently, because it's the exact trap I mentioned — is that "I logged in with atlas
                and it was fine" confirms the part that was never really in doubt and is silent on the part that is. This
                screen tells you the internal Workspace state is healthy. It tells you nothing about whether any <Word>
                    <Emphasis />
                    external
                </Word> service still authenticates through, or sends recovery mail to, a @dna.love address. That's the live
                item, and the clock on it isn't in this console — it's the registrar's expiry date for dna.love. So yes,
                leave Google as-is, and keep the identity audit moving in parallel against that deadline. The state is good;
                the homework just isn't visible on this particular screen.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:57:14.943083Z"
        >
            <Origin>019e69f0-91ac-755b-98b0-bd75e26052a5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah Claude, if that was a problem, and it was the last day, it would be a big deal. You'll notice that the
                biggest headache is your own service, because it doesn't allow a change in email. Perhaps I am ignoring that
                because I have been working on it for ages, this is the day before, and it's like me asking you for driving
                directions before I start a trip and you keep nagging me to make sure I am packed. I am. We are already in
                the car
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:57:24.687997Z"
        >
            <Origin>019e69f0-91ac-7d0a-88db-ee158c905f8d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right. I overcorrected. "Keep working the audit" is good advice on day one of a migration and
                slightly insulting on the last day to the person who <Word>
                    <Emphasis />
                    did
                </Word> the audit — you've been living inside this for weeks and I've been re-flagging the headline of work
                you finished. Point taken, and I'll drop it.
            </Paragraph>
            <Paragraph>
                And the Claude/Anthropic account being the stubborn one is a real and slightly absurd irony worth naming:
                the one service that can't repoint its login is mine. If that genuinely can't take an email change, then a
                @dna.love alias being reachable is load-bearing for it specifically — which is one more reason the
                do-nothing state you've got is the right one. Leaving dna.love verified and Gmail-activated keeps that alias
                alive for exactly the account that needs it, at zero cost, for as long as you own the registration. You're
                not exposed by holding; you'd be exposed by removing early. So the configuration on that screen is doing the
                work.
            </Paragraph>
            <Paragraph>
                We're in the car. Directions: nothing to do today. The state is correct, the login's confirmed, the bridge
                is up. The only future action is the deliberate one — deactivate that test alias, then Remove dna.love — and
                that's a someday move you make on your terms, not a loose end. Enjoy the drive.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:58:04.062236Z"
        >
            <Origin>019e69f1-5180-7dfd-91e6-fbd5b74f1b02</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the test alias?</Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:58:27.760847Z"
        >
            <Origin>019e69f1-5180-7bd5-b665-0465cfe0f535</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Nothing was written in this message</Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:58:57.188248Z"
        >
            <Origin>019e69f2-213f-70e1-89ed-950c03a67aa2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Never mind. I just did. Done. I am marking this as complete. I assume I'll still have forwarding for a
                while, so things should be okay. Here's hoping
            </Paragraph>
        </Message>
        <Message
            at="2026-05-27T14:59:04.338031Z"
        >
            <Origin>019e69f2-213f-72ef-ac32-6352abe369a5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Done. And the forwarding holds for exactly as long as you'd expect — it's the alias bridge riding on
                dna.love's MX records, so it lives as long as the registration does. Not "a while" in the vague sense; it's
                tied to that one concrete date. Until then, anything to an old @dna.love address keeps landing in your atlas
                inbox, the Anthropic-account login included.
            </Paragraph>
            <Paragraph>
                "Here's hoping" undersells it a little. You changed the primary, renamed everyone, confirmed the atlas
                login, fixed recovery, ran the identity audit to its end, and just cleared the test alias on the way out.
                The thing that would've made the last day a big deal is the thing you spent weeks making not-a-big-deal.
                This isn't luck holding — it's the prep holding.
            </Paragraph>
            <Paragraph>Marking it complete is the right call. Nice work getting it across.</Paragraph>
        </Message>
    </Chapter>
);
