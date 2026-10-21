import { Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[26 May 2026](2026-05-26)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-26T16:09:33.352133Z"
        >
            <Origin>019e650c-6945-7198-8b3e-d30a252dde2c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I want to switch this account from a google login to a regular password. How can I do that?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:09:51.531128Z"
        >
            <Origin>019e650c-6945-7987-b605-b0ea6cfe918c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me check Anthropic's current documentation on this, since account login settings change.
            </Paragraph>
            <Action>Searched the web for “claude.ai switch from google login to email password account”</Action>
            <Paragraph>
                Short version, Doug: Claude doesn't actually support a traditional password at all right now, so there's no
                Google-to-password switch to make.
            </Paragraph>
            <Paragraph>
                The two login options are "Continue with Google" using your Google credentials, or "Continue with email,"
                which sends a one-time login link to your email address — no password is ever created. As Anthropic's help
                center puts it directly, Claude uses email login links instead of passwords, so there isn't a way to create
                a password at the moment.
            </Paragraph>
            <Paragraph>So what you can do depends on what you're actually after:</Paragraph>
            <Paragraph>
                If you just want to stop logging in <Word>
                    <Emphasis />
                    through Google
                </Word> but keep the same account, you can unlink Google and switch to the email magic-link method instead.
                The catch is that if you've previously authenticated using Google, you can unlink your Google account from
                Claude — the support article had steps for that, though the snippet cut off before listing them. The key
                thing is the email you use for the link needs to be the same address, so the account (and all its history,
                projects, memory) stays intact.
            </Paragraph>
            <Paragraph>
                If your real goal is a password specifically — for a password manager, or because magic-links feel less
                secure — that option doesn't exist yet on Claude. The closest you'd get is the email link method, which has
                no password to store.
            </Paragraph>
            <Paragraph>
                One thing worth flagging given this account: if you unlink Google and move to email-link login, make sure
                the email you'll authenticate with is one you reliably control and won't lose, since the magic link <Word>
                    <Emphasis />
                    is
                </Word> your only access path at that point. Want me to pull up the exact unlink steps?
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:11:20.678026Z"
        >
            <Origin>019e650e-0bcc-7ee4-9479-c9e00366d273</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No but I want to share this, and that means sharing my email. I didn't want to share my google account, but
                I can do that with my wife Ana. It's fine
            </Paragraph>
        </Message>
        <Message
            at="2026-05-26T16:11:46.100416Z"
        >
            <Origin>019e650e-0bcc-748c-819d-a626ec3d815c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Makes sense — and that's the simpler path anyway. Sharing the Google login keeps everything as-is: same
                account, all the projects and history intact, and the Google connectors already wired up here (Gmail,
                Calendar, Drive) just keep working for both of you without re-authenticating anything.
            </Paragraph>
            <Paragraph>
                The one thing you've clearly already weighed: the Google login is the whole Google account, not just Claude
                — so Ana gets into Gmail, Drive, and the rest of it too, not only this. With a spouse that's a non-issue,
                which is exactly what you're saying. If you'd ever wanted to scope it down to <Word>
                    <Emphasis />
                    just
                </Word> Claude, the email-link route was the way to do that, but it sounds like you don't need that boundary
                here.
            </Paragraph>
            <Paragraph>So nothing to change — just give Ana the Google credentials and she's in.</Paragraph>
        </Message>
    </Chapter>
);
