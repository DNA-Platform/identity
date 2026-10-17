import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 October 2026](2026-10-01)</Date>
        </Dated>
        <Title>[[ 1 October 2026 ]]</Title>
        <Message
            at="2026-10-01T17:45:44.394298Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So since Gram wallet has been released on Telegram have there been any consequences in any communities? Are
                people using it even if just in small ways? Is it helping subvert subversive authorities?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-01T17:46:40.786505Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Short answer: <Word>
                    <Bold />
                    the rail is live, the traffic isn't measurable yet, and the state response is moving faster than the usage.
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On adoption — the conspicuous thing is the silence.
                </Word> Durov has not published activation figures, funded-wallet counts, transaction volume, or what
                percentage of the user base actually has access. A month on, that absence is itself data. He publishes
                everything that flatters; if 50M wallets had been funded in September you'd know the number. On-chain, TON
                shows ~2.5M monthly active wallets against ~1.78M earlier in the year and a conversion ratio of 0.12% of
                Telegram MAU — real growth, but monthly active addresses had already tripled from 1.4M to 4.5M across 2026
                before the wallet shipped, so almost none of it is cleanly attributable to the launch.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One real structural event did happen.
                </Word> On September 28 the old custodial Wallet rebranded to Walt and repositioned to trading and
                investing, while Gram Wallet took the everyday-payments slot — Walt moved behind search. That's the
                default-placement clearing you defined as the actual test. It completed four weeks after the "couple of
                weeks" promise, which is a modest slip worth noting.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On subversion — the Russian-language community caught exactly the thing you'd expect.
                </Word> ForkLog's read: the Gram Wallet release coincided with the adoption of Russia's new cryptocurrency
                law, and wallet users will maintain independence from regulators, likely preferring unofficial exchange
                channels to withdraw funds rather than voluntarily coming under tax control. That law creates an asymmetry —
                a sanctions-evasion tool for large business, tightening limits, taxes and control for ordinary citizens. And
                the wallet ships with no KYC requirement. So the collision is real and was noticed, in Russian, by the
                people it's aimed at.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    But two counter-facts land hard, and one hits your thesis directly.
                </Word>
            </Paragraph>
            <Paragraph>
                The Bank of Russia has a working surveillance system linking wallet addresses to bank accounts, social media
                pages, and Telegram channels, and blacklisted 2,600 wallets. They're building the attribution layer against
                exactly this, and it's operational now.
            </Paragraph>
            <Paragraph>
                More important: Tether froze nearly $550M in Iran-linked USDT this year, and has helped freeze more than
                $4.9B total, with a Senate report on September 28 finding 84% of sanctioned Iranian wallets transacted
                primarily in USDT. We identified non-custodial USDT as the practical killer feature — money in via Telegram,
                spend anywhere, never convert. <Word>
                    <Bold />
                    That leg is freezable.
                </Word> Self-custody protects you from a custodian, not from an issuer who can blacklist your address. GRAM
                has no issuer and can't be frozen; USDT can. The freedom property belongs to the volatile asset, not the
                usable one — and that tension is now being enforced in real time.
            </Paragraph>
            <Paragraph>
                Net: a month in, you have a default-placed rail, no published usage, correctly-noticed subversive potential
                in the Russian community, and adversaries closing the stablecoin seam faster than the ecosystem is filling
                the wallet.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-01T18:42:05.106684Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, I need you to do better research. I’m sure there are some communities and some use cases that are using
                this now and I’m pretty sure you’ve told me in another thread that there are. I don’t necessarily think that
                bragging would be public because this is a subversive technology.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-01T18:43:11.546133Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right that I searched for announcements rather than usage, and that's the wrong place to look for
                something nobody advertises. Let me go after the actual corridors.
            </Paragraph>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                You were right — I was looking at payments adoption when the live GRAM economy is somewhere else entirely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The real economy is gifts and collectibles, and it's not small.
                </Word> DefiLlama ranks Fragment the #1 NFT marketplace by fees, roughly 9× OpenSea as of August 2026, with
                ~436M Gram (≈$936.6M) paid to Fragment all-time. The gift economy itself hit ~$292M cumulative trading
                volume, ~$128M collection market cap, 541,000+ wallets and ~9M gifts across 2M+ users — and those are
                November 2025 figures that predate the crafting mechanic. Every crypto-native Telegram payment routes
                through Fragment and settles in Gram. A single rare gift, Plush Pepe, floors around 5,000 Gram (~$15,000).
            </Paragraph>
            <Paragraph>
                And Gram Wallet is specifically the <Word>
                    <Emphasis />
                    self-custody destination
                </Word> for that economy: gifts live inside Telegram until you move them on-chain — send a collectible to
                your Gram Wallet and it becomes an NFT you fully own. That's the actual function people are using it for
                right now. Not remittances. Taking possession of assets Telegram would otherwise hold for you.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The subversive corridor is bigger than I showed you, and it's actively shopping for exactly what GRAM is.
                </Word> Telegram-based "guarantee" marketplaces — Huione, Xinbi, Tudou — have moved $35B+ in USDT, with
                Xinbi alone at $24.2B and the second-largest illicit marketplace ever. Tether froze $39.27M of Xinbi's USDT
                on September 8. Here's the part that matters to you: Elliptic's Tom Robinson reports general concern among
                these marketplaces about using USDT and the risk of wallet freezes, with discussions of unfreezable
                alternatives such as USDD. The largest crypto economy running on Telegram is, this month, searching for a
                rail that can't be frozen. GRAM has no issuer and cannot be frozen. That's Bitcoin's dark-web
                product-market-fit story setting up to repeat, with the asset already native to the platform they're on.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And the Russian demand driver is in the complaint record, not the press.
                </Word> The old custodial Telegram Wallet sits at 2.1–2.5 stars across Russian review sites, with the
                recurring complaint being frozen funds and blocked withdrawals — "Заблокировали 1200 USDT," accounts locked
                with no recourse, mandatory KYC. The standalone Gram Wallet app sits at 4.7 stars across 876 reviews,
                updated September 27. Russians have <Word>
                    <Emphasis />
                    direct personal experience
                </Word> of the custodial wallet seizing their money. The migration motive is pre-existing and documented in
                angry reviews rather than announcements — which is exactly where you'd expect to find it.
            </Paragraph>
            <Paragraph>
                One more piece: a mini app called Gift Trade lets users buy and sell NFT gifts <Word>
                    <Bold />
                    for rubles
                </Word> inside Telegram. That's a working ruble on-ramp into GRAM-settled assets, in the market where the
                official rails are closing.
            </Paragraph>
            <Paragraph>
                The honest gap remains that none of this is <Word>
                    <Emphasis />
                    payments
                </Word> yet — it's collectibles, speculation, and self-custody of Telegram-native assets. But it's a real
                GRAM-denominated economy with hundreds of millions in volume, a documented flight-from-freezing motive among
                both ordinary Russian users and the largest illicit marketplaces on the platform, and a wallet that just
                became the default place to hold it all.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-01T18:46:56.957914Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interesting. And there’s no payment story at all? Nothing in the mini app ecosystem where people are maybe
                using it for payments in someway.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-01T18:47:35.827893Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                There is one, but it's smaller than the infrastructure noise suggests, and it's denominated in dollars
                rather than GRAM.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's actually built and running.
                </Word> TON Pay launched in February — a wallet-agnostic SDK letting Mini App developers accept Toncoin and
                USDT in one checkout flow, sub-second, fees under $0.01. AEON partnered with TON and Tether so users connect
                a TON wallet in a mini app and spend TON or USDT at merchants, with a 20-million-merchant target focused on
                markets where Telegram dominates. So the merchant-acceptance layer exists. What doesn't exist anywhere I can
                find is published volume through it — no transaction counts, no merchant counts actually live, no GMV.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The one hard number that matters: TON is ~1% of the payments market.
                </Word> Tether's supply distribution as of September 15 puts Tron at ~51% of USDT supply ($92.7B),
                explicitly "the dominant USDT chain for payments and remittances, especially across Southeast Asia and Latin
                America." TON sits in the tail group — Ton, Aptos, Avalanche, Kaia, Celo together account for roughly 1% of
                supply — with the note that <Word>
                    <Bold />
                    Ton serves Telegram remittances
                </Word>. TON's stablecoin footprint is about $1.28B against Tron's ~$88B.
            </Paragraph>
            <Paragraph>
                So the payment corridor is real and <Word>
                    <Emphasis />
                    recognized as a distinct use case
                </Word>, but Tron already won the emerging-market USDT settlement war. TON is a niche inside it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The growth signal is genuine though.
                </Word> USDT on TON grew significantly in Q2 2026, explicitly attributed to Telegram's integration of USDT
                payments across its user base. And the custodial Wallet has 150M+ registered users with USDT support. That's
                a large installed base of people already holding dollars inside Telegram — which is the thing Gram Wallet is
                now making non-custodial.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The strategic read, which I think is the actual answer to your question.
                </Word> TON cannot beat Tron on fees or speed — Tron is already cheap and fast and has the liquidity. The
                only thing TON has that Tron structurally cannot replicate is that <Word>
                    <Bold />
                    the wallet is in the chat where the counterparty already is
                </Word>. On Tron you need an address. On Telegram you need a person you're already talking to. That's the
                social-graph advantage, and it's untested — because until August 31 the in-chat wallet was custodial, KYC'd,
                and had a documented habit of freezing people's funds.
            </Paragraph>
            <Paragraph>
                So the honest state: the payments rail is built, the dollar base is there, the remittance use case is
                identified by Tether itself, and the distribution advantage has never actually been switched on. The month
                since the wallet shipped is the first time it has been — and nobody has published a number from it yet.
            </Paragraph>
        </Message>
    </Chapter>
);
