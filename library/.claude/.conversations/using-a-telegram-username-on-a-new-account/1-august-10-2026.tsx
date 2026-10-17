import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 August 2026](2026-08-10)</Date>
        </Dated>
        <Title>[[ 10 August 2026 ]]</Title>
        <Message
            at="2026-08-10T18:00:20.722029Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I bought a telegram username on TON but I don’t know how to open a new account with it. What do I do? I have
                a windows computer with telegram desktop
            </Paragraph>
        </Message>
        <Message
            at="2026-08-10T18:00:30.700780Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A username on Fragment doesn't create an account by itself — Telegram accounts are anchored to a number, and
                the username is an asset you assign to an account afterward. So there are two paths depending on what you
                want:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you want the username on a brand-new account:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    You need a number for the new account. Either a regular SIM, or — cleaner for this use case — an
                    anonymous <Word>
                        <Bold />
                        +888 number from Fragment
                    </Word> (fragment.com/numbers). The +888 numbers receive login codes through Fragment itself, no SIM
                    involved.
                </Line>
                <Line>
                    Create the account. Telegram Desktop on Windows works for this: log out or add account (hamburger menu →
                    Add Account), enter the number. If it's a +888 number, the login code appears on Fragment (log in there
                    with your TON wallet, the code shows under the number's page).
                </Line>
                <Line>
                    Assign the username: on Fragment, open your username's page → "Assign to account" → it links via the
                    Telegram login widget. Or from Telegram: Settings → Username → your Fragment usernames appear as
                    "collectibles" you can activate once the account is linked.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you just want it on your existing account:
                </Word> skip the new-account part — go to the username page on Fragment while logged in with the same TON
                wallet that holds it, and assign it to your logged-in Telegram account. It becomes selectable in Settings →
                Edit Profile → Username.
            </Paragraph>
            <Paragraph>
                One thing worth knowing: a fresh account created on desktop with no SMS-capable number can occasionally trip
                Telegram's anti-spam and get limited early. The +888 route is the officially supported path and avoids that
                better than virtual SIM services do.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-10T18:03:29.154550Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I have ageorgian number. Can I make an account out of that?</Paragraph>
        </Message>
        <Message
            at="2026-08-10T18:03:33.146750Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — a Georgian number works exactly like any other SIM number. In Telegram Desktop: hamburger menu → Add
                Account (or just enter it on the login screen if starting fresh), type the number with +995, and you'll get
                the code by SMS or a call.
            </Paragraph>
            <Paragraph>Two caveats:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    If that number is <Word>
                        <Bold />
                        already attached to your existing Telegram account
                    </Word> (or Ana's), you can't use it for a second account — one number, one account. You'd need a
                    different number.
                </Line>
                <Line>
                    Once the new account exists, assign the Fragment username to it: fragment.com → your username's page →
                    "Assign to account," logging into Fragment with the TON wallet that holds the username.
                </Line>
            </Paragraph>
            <Paragraph>
                After that, the username shows up under Settings → Edit Profile → Username on the new account.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-10T18:04:03.361208Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does the fragment username do anything? Whats the point</Paragraph>
        </Message>
        <Message
            at="2026-08-10T18:04:12.268563Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Functionally, almost nothing beyond what a free username does — people can find you at t.me/yourname,
                message you without your number, that's it. The point is in the properties around it:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It's yours as property.
                </Word> A free username is a rental from Telegram — go inactive long enough and it can be reclaimed and
                reassigned. A Fragment username is an NFT on TON; it sits in your wallet, nobody can take it back, and it
                survives you deleting the account entirely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It's transferable and sellable.
                </Word> You can move it between your own accounts, or sell it on Fragment. Short and dictionary-word names
                have a real secondary market — that's essentially the whole reason the auction system exists. Some people
                treat them purely as speculative assets and never attach them to an account at all.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Scarce names are only available this way.
                </Word> The short, clean, generic ones (@casino, @bank, four-letter words) were reserved out of the free
                pool; Fragment is the only door to them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It anchors t.me web presence.
                </Word> The username also gives you the t.me/yourname link and, for channels, a tradeable brand identity
                that isn't hostage to Telegram's reclamation policy.
            </Paragraph>
            <Paragraph>
                So: as a utility, it's a vanity plate. As a holding, it's a small piece of transferable,
                censorship-resistant namespace on the network — which is more or less a miniature of the broader TON thesis,
                incidentally: Telegram converting parts of its platform into on-chain property.
            </Paragraph>
        </Message>
    </Chapter>
);
