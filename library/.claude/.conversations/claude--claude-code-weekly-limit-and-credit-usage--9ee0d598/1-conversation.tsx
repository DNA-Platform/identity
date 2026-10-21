import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-18T13:35:58.094961Z"
        >
            <Origin>019edaf2-0f52-7039-9836-e8038cbd4563</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Why can't I use Claude Code. I bought credits. Why doesn't that extend my weekly limit?</Paragraph>
            <Attachment>Uploaded “1781789712302_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-18T13:36:50.631639Z"
        >
            <Origin>019edaf2-0f53-76b8-aaf0-e4f4d40e89b6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Read /mnt/skills/public/product-self-knowledge/SKILL.md</Action>
            <Action>Searched the web for “Claude usage credits weekly limit Claude Code subscription”</Action>
            <Paragraph>
                Two separate limits are in play, and they don't work the way "buying credits extends my weekly limit"
                assumes.
            </Paragraph>
            <Paragraph>
                The weekly "All models" bar at 100% is your included plan usage. Usage credits don't extend that bar — they
                bypass it. Once it's maxed, credits let you keep going at pay-as-you-go API rates instead of waiting for the
                Sunday 7 AM reset. So far so good, and credits do cover Claude Code: terminal and IDE usage draw from the
                same pool as chat.
            </Paragraph>
            <Paragraph>
                The thing actually blocking you is the second bar: <Word>
                    <Bold />
                    $40.38 spent / 101% used against a $40 monthly spend limit.
                </Word> That spend limit is a governor you set on how much credit can be drawn per month, and you've tripped
                it. It's not the same as your balance. You have $59.62 sitting there, but the $40/month cap is what's gating
                access to it — so the money's available, the cap just won't let you spend more of it this month.
            </Paragraph>
            <Paragraph>
                The fix is the <Word>
                    <Bold />
                    Adjust limit
                </Word> button next to "$40 Monthly spend limit." Raise it above ~$41 and Claude Code should work again
                immediately, drawing from your existing $59.62. Otherwise it stays blocked until the spend limit resets on
                Jul 1.
            </Paragraph>
            <Paragraph>
                One thing to check if raising the cap doesn't unblock you: if you're using Claude Code non-interactively —
                the Agent SDK, <Word>
                    <Verbatim />
                    claude -p
                </Word> scripts, or a GitHub Actions integration rather than typing in the terminal — that split into its
                own separate monthly credit pool as of June 15, with its own budget independent of this one. But for
                ordinary interactive terminal/IDE use, the monthly spend cap above is your constraint.
            </Paragraph>
        </Message>
    </Chapter>
);
