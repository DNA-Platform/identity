import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[5 October 2026](2026-10-05)</Date>
        </Dated>
        <Title>[[ 5 October 2026 ]]</Title>
        <Message
            at="2026-10-05T09:40:01.745748Z"
        >
            <Origin>01a10b6f-9696-72ca-b8eb-dac0af96c2e8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Anyone writing about Pavel’s absence? It’s been about a month since his last message. Maybe he’ll message
                soon or maybe not and I’m just wondering when people will start saying something.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:40:22.046136Z"
        >
            <Origin>01a10b6f-9696-7e4b-9b61-7d1dbf3228ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Nobody is writing about the absence. The coverage is all still-frame: Forbes profile updated, Wikipedia
                updated with the July warrant, the Tech Policy Press arrest tracker last touched in February. Nothing asking
                where he is.
            </Paragraph>
            <Paragraph>
                The closest thing I found is an Italian piece from July 31, right after the designation, titled "The World's
                Most Elusive Billionaire." It notes Telegram's response to the warrant was <Word>
                    <Emphasis />
                    pure Durov — no press release, just a photograph, in black, middle finger up
                </Word>, and ends: he posted last week that he was in Georgia, he might be in Dubai tomorrow, <Word>
                    <Bold />
                    he might be nowhere
                </Word>. That was written as a flourish about a man who moves constantly. Two months later it reads
                differently.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One date worth knowing: he turns 42 on October 10 — five days away.
                </Word> And his birthday is historically when he posts his most personal material. October 2024, turning 40:
                a long first-person account of the Paris interrogation, asking his lawyer whether Julia would be questioned
                too, and a second story about building VK in six weeks. October 2025, turning 41: the "I don't feel like
                celebrating, our generation is running out of time to save the free Internet, we've been fed a lie"
                manifesto, pushed to every user's chat list. Two years running, his birthday produced exactly the kind of
                unforced, first-person, voice-bearing post you defined as the test.
            </Paragraph>
            <Paragraph>
                So your instrument has a scheduled reading. If the pattern holds he posts something personal on the 10th. If
                the 10th passes with silence or a template, that's the third consecutive occasion where his own established
                behavior predicted a personal post and didn't produce one — and it lands two days after TOKEN2049 ends.
            </Paragraph>
            <Paragraph>
                As for when others start noticing: probably not from the silence itself. It'll come from a journalist
                needing a quote for a story about something else — a regulatory action, a French case development — finding
                nobody to ask, and writing that line. The absence gets discovered as a sourcing problem before it gets
                discovered as a story.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:41:39.547603Z"
        >
            <Origin>01a10b71-14c3-700e-96d2-b7ec7b9fc3fc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Perfect forward test in 5 days!</Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:41:45.867892Z"
        >
            <Origin>01a10b71-14c3-7a27-81e7-57fd877ecb90</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                It is — and it's unusually clean because he set it himself, twice, without knowing anyone would score it.
            </Paragraph>
            <Paragraph>
                Worth fixing the criteria now, before the result is in, so it can't be rationalized afterward:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Pass:
                    </Word> a first-person post with unforced personal or political content, in his own register. The 40th
                    and 41st are the reference specimens.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fail:
                    </Word> silence, or a template with emoji, or a product announcement standing in for the occasion.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Ambiguous:
                    </Word> a short personal note that's clearly pro-forma — a thank-you to users, nothing he wasn't obliged
                    to say. Call that a weak pass and down-weight it.
                </Line>
            </Paragraph>
            <Paragraph>
                Three things resolve in the same week: TOKEN2049 ends the 8th, his birthday is the 10th, and both land after
                five weeks of institutional-only messaging. If all three come up empty, that's not one data point, it's a
                pattern completing.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:42:41.119135Z"
        >
            <Origin>01a10b72-0538-77fb-8d97-0e49898cc2b5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Remember that the best explanation as far as I’m concerned is that he has a huge Russian user base and he’s
                been designated a terrorist and he doesn’t want that designation to be passed on to the company
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:42:52.350008Z"
        >
            <Origin>01a10b72-0538-7030-98dd-111e8e17aa3f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Right — and that's a sharper version than the one I built, because it targets the users rather than the
                asset.
            </Paragraph>
            <Paragraph>
                The mechanism is the Meta precedent: the organization gets designated extremist, Russians lawfully keep
                using the platforms, and what becomes criminal is the <Word>
                    <Emphasis />
                    financial
                </Word> and promotional conduct around it. So the risk isn't that Telegram gets blocked — blocking failed in
                2018 and MAX isn't ready. It's that the designation <Word>
                    <Emphasis />
                    transfers from the man to the platform
                </Word>, at which point ~90 million Russians using Gram Wallet are transacting on a designated terrorist's
                financial infrastructure. Russian lawyers already flagged this: Durov's mere presence in the
                Rosfinmonitoring registry creates substantial legal risk for purchases inside the ecosystem, and commentary
                went as far as saying sending him Stars personally could trigger liability.
            </Paragraph>
            <Paragraph>
                Every time he posts, he re-establishes the identity between himself and the platform. "Durov said," "Durov
                announced," "Durov's app" — that's the sentence the FSB needs to extend the designation. Going silent
                starves it. Within eight weeks of the listing, product communication moved to Walt, to TON Foundation, to
                the channel's institutional voice — the company stopped being narrated by the designated person.
            </Paragraph>
            <Paragraph>
                Which also explains a detail that otherwise doesn't fit: the August 25 post was aimed at <Word>
                    <Emphasis />
                    France
                </Word>, not Russia. If he had to speak once more, the safe target was the jurisdiction where he's a
                defendant rather than a designee. Nothing in it gives Moscow a fresh link between him and the platform.
            </Paragraph>
            <Paragraph>
                And it's consistent with what he's always said he'd trade away. Markets, revenue, his own freedom of
                movement — but not users. Withdrawing his name is the cheapest thing he has left to give, and the one that
                protects the people most exposed.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:44:27.946801Z"
        >
            <Origin>01a10b73-a618-798b-9686-6bc583cdd476</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Russia has always been about media control. Are there any signs that cryptocurrency is gaining more traction
                in Russia possibly to support legally gray things maybe interacting with Ukraine that we might be able to
                infer is happening through GRAM on Telegram
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:45:06.224249Z"
        >
            <Origin>01a10b73-a619-7c2b-b8c6-e0156550afdd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Yes, massively — and Telegram is already the interface layer for it, just not with GRAM as the settlement
                asset.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The scale first.
                </Word> Elliptic puts Russian crypto use at roughly <Word>
                    <Bold />
                    20 million users and $376 billion received over 12 months
                </Word>. That's not a gray-market niche, it's a parallel financial system at national scale.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The state built its own unfreezable rail, and it runs on Telegram.
                </Word> A7A5 is a ruble-pegged stablecoin issued from Kyrgyzstan by A7 — the cross-border payments platform
                launched by Promsvyazbank, Russia's defense-sector lender — described by TRM as a Kremlin-backed
                sanctions-evasion platform. Volume claims run from $72B to Fradkov's $140B, with the UK FCDO noting that's
                roughly half of Russia's annual military spending. A7A5 claims it's used in nearly 20% of Russia's
                international transactions.
            </Paragraph>
            <Paragraph>
                And the Telegram integration is explicit in the reporting: A7's <Word>
                    <Bold />
                    Digital Promissory Notes are redeemable through a Telegram bot
                </Word>, A7A5 announces its liquidity injections <Word>
                    <Bold />
                    on Telegram
                </Word>, and OCCRP's investigation found Russian payment agents openly touting sanctions-busting services on
                Telegram, promising "there will be no trace." The coordination layer for Russia's gray cross-border economy
                is already Telegram. The settlement is USDT and A7A5.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Which makes the structural point sharp.
                </Word> A7A5 was built deliberately without a freeze function — but Elliptic's caveat is that <Word>
                    <Emphasis />
                    only the issuer
                </Word> can blacklist addresses, and that issuer is Russian-state-aligned. So Russia's answer to Tether
                freezing wallets was to build a stablecoin where <Word>
                    <Emphasis />
                    Russia
                </Word> holds the freeze key instead. It solves Washington's control by substituting Moscow's.
            </Paragraph>
            <Paragraph>
                GRAM has no issuer at all. That's the one property neither USDT nor A7A5 has, and it just became
                default-placed in a billion clients inside the exact app where this economy already coordinates.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest gap:
                </Word> I have no evidence of GRAM being used for any of this. Every documented flow is USDT or A7A5. And
                the existence of A7A5 cuts <Word>
                    <Emphasis />
                    against
                </Word> the thesis in one way — the Russian state, needing an unfreezable rail, built its own rather than
                using Durov's. They wanted the keys.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Two dates worth putting together, though.
                </Word> Russia's crypto law cleared its second and third Duma readings on <Word>
                    <Bold />
                    July 21, 2026
                </Word> — the same day Durov announced the native wallet. Eight days later, the FSB charged him. The state
                was legislating its own controlled crypto framework on the exact day the uncontrolled alternative was
                announced into the same 90-million-user market.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:49:59.830193Z"
        >
            <Origin>01a10b78-b6d9-7f04-9b2d-44119c0f4763</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Great so we want to see if that migrates. Anything else? Maybe doing tasks or odd jobs for people who have
                trouble getting into the country. Be creative. What might people be using crypto for that has just been made
                easier
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:50:40.364372Z"
        >
            <Origin>01a10b78-b6d9-7bd0-b71d-c5b2400d9d9b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The unifying principle is worth naming first: the wallet doesn't make <Word>
                    <Emphasis />
                    money
                </Word> easier, it makes <Word>
                    <Bold />
                    identity optional
                </Word>. Traditional rails fail people not because they lack funds but because they lack documents, a bank,
                or a permitted nationality. A no-KYC non-custodial wallet in a chat removes the identity requirement from
                the payment entirely. And the @push architecture means the recipient doesn't even need to exist financially
                yet — funds sit in a contract until someone claims them.
            </Paragraph>
            <Paragraph>
                So the demand categories are wherever <Word>
                    <Emphasis />
                    the person
                </Word> is the obstacle:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Remote work for the debanked.
                </Word> Russians, Belarusians, Iranians were cut off from Payoneer, Wise, PayPal; Upwork and Fiverr blocked
                withdrawals. These are skilled people with clients who still want their labor and no legal way to be paid.
                Freelance dev, design, translation, tutoring. This is the largest legitimate category and it's been
                bottlenecked for four years on payout, not demand.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Diaspora-to-home transfers.
                </Word> Relevant where you are — Georgia is full of Russian relocants whose cards don't work in either
                direction. Informal transfer networks already run on Telegram chats; the settlement leg was the missing
                piece.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Independent media and civil society.
                </Word> Russian outlets designated "undesirable" make donating to them criminal <Word>
                    <Emphasis />
                    for the donor
                </Word>. Crypto is the only remaining channel, and now it's one tap from a chat rather than requiring an
                exchange account.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Services for people stuck outside a border.
                </Word> Translation, document preparation, immigration lawyers, local fixers — paying someone in-country
                when you can't get in, or paying from outside for someone who can't leave. The payer and payee are often in
                jurisdictions with no banking relationship at all.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Anything payment processors refuse on category rather than legality
                </Word> — adult work, gambling, certain health products, VPN services in countries that ban them. Visa and
                Mastercard decline these as policy; the obstacle was never the law.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Family support across sanctions lines.
                </Word> Ordinary people with relatives in Iran, Russia, Syria, Afghanistan, where sending $200 to your
                mother requires a hawala broker.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What would make this visible to you:
                </Word> watch for <Word>
                    <Emphasis />
                    small, frequent, bidirectional
                </Word> transfers rather than large ones — $50–500, peer-to-peer, not merchant checkout. That's the
                signature of labor and remittance. Large round-number flows are trade settlement and would show up on A7A5
                instead. Also watch wallet activations in Georgia, Armenia, Kazakhstan, Serbia, Turkey, UAE — the relocation
                destinations — since that's where the debanked diaspora concentrates.
            </Paragraph>
            <Paragraph>
                One flag: this is also exactly the profile that attracts the Guarantee-marketplace operators looking to
                escape USDT freezes, and attracts the scam economy that already runs on Telegram. The same property that
                serves a Belarusian developer serves them. Whatever adoption shows up will be mixed, and the enforcement
                response will arrive accordingly.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:51:54.466787Z"
        >
            <Origin>01a10b7a-76de-7b16-a279-354d7b013d5a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yes, I understand but the thing that’s easier is that it’s now embedded more easily in the chat. You could
                always have a non-custodial wallet in wallet - now walt. I would imagine that the community is building
                around the GRAM wallet though.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-05T09:52:30.591719Z"
        >
            <Origin>01a10b7a-76de-72f2-be8e-64c6fe78ebfa</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — the capability existed. Walt's DeFi Account was non-custodial, Tonkeeper and MyTonWallet were
                a tap away. What changed is placement and the removal of the choice step: no app to pick, no download, no
                seed-phrase ceremony, and critically <Word>
                    <Bold />
                    no KYC
                </Word>, which the custodial Wallet did require and which was the thing generating all those frozen-funds
                complaints. The friction wasn't technical, it was that you had to decide to go get one.
            </Paragraph>
            <Paragraph>On whether the community is building around it — let me check rather than guess.</Paragraph>
            <Action>Used WebSearch</Action>
            <Paragraph>Checked, and the finding is structural rather than a build-out.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Nobody needs to build around Gram Wallet.
                </Word> TON Connect became the <Word>
                    <Emphasis />
                    exclusive
                </Word> wallet-connection protocol for blockchain-enabled Mini Apps in 2025. That means any mini app that
                already integrated TON Connect — which is all of them, per the ecosystem docs, "there is no serious TON dApp
                without TON Connect" — automatically works with Gram Wallet the moment it registers in the wallet list.
                There's no SDK to adopt, no integration work, no migration. The community doesn't build <Word>
                    <Emphasis />
                    around
                </Word> it; it inherits it.
            </Paragraph>
            <Paragraph>
                Which is why there's no visible land-rush and why that absence isn't evidence of apathy. The architecture
                was designed so a new default wallet requires zero developer action.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one concrete artifact I found deserves a flag rather than enthusiasm.
                </Word> On September 19 someone opened PR #332 against the <Word>
                    <Verbatim />
                    ton-connect/wallets-list
                </Word> repo titled "Add GramPay wallet configuration," submitted by an account named <Word>
                    <Verbatim />
                    tatietati627-crypto
                </Word>, with the body still containing the unfilled template placeholder <Word>
                    <Verbatim />
                    Add &lt;WALLET_NAME&gt; wallet
                </Word>. That's not an official Telegram submission — it's an anonymous account trying to register a wallet
                called "GramPay" into the registry that mini apps use to decide which wallets to offer. Getting a fake
                wallet into that list is a known attack shape, and Fragment-adjacent phishing is already a documented risk
                in this ecosystem. I'd treat it as suspicious until proven otherwise, not as a signal.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What I did not find:
                </Word> any Gram Wallet developer documentation, any Gram-Wallet-specific SDK, any hackathon or grant
                program oriented to it, or Gram Wallet appearing in the 2026 lists of TON Connect wallets — those still name
                Tonkeeper, Bitget, OKX, Binance Web3, with the note that Telegram's own Wallet supported Wallet Pay SDK
                rather than full TON Connect.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So the thing actually worth watching is narrow and checkable:
                </Word> whether Gram Wallet lands in the official TON Connect wallet registry, and whether it becomes the
                <Word>
                    <Emphasis />
                    default responder
                </Word> — i.e. when a mini app asks for a wallet connection, Gram Wallet answers first rather than
                presenting a chooser. That single configuration decision would silently route every mini-app payment flow in
                the ecosystem through the native wallet, with no announcement and no developer involvement. It's the
                quietest possible way to win the payments layer, and it would show up in a GitHub PR before it showed up
                anywhere else.
            </Paragraph>
        </Message>
    </Chapter>
);
