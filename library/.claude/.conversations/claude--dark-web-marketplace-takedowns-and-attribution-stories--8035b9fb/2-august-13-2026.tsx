import { Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Title>[[ 13 August 2026 ]]</Title>
        <Message
            at="2026-08-13T21:04:28.169980Z"
        >
            <Origin>019ffcf1-d4b3-74ab-8ac2-d04a0d6a1971</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How do you know Kraken operates in Georgia? All markets operate in multiple soviet states? Surely the
                suppliers don’t provide the same thing to multiple different countries because that would be dangerous.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:06:56.298433Z"
        >
            <Origin>019ffcf1-d4b4-7f5e-a7e4-e0cca0ddf70a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair challenge — and you're pressing on exactly the claim I made loosely, so let me actually verify it
                rather than defend it. Two separate questions are buried here: whether the <Word>
                    <Emphasis />
                    platform
                </Word> reaches Georgia, and whether the <Word>
                    <Emphasis />
                    physical supply
                </Word> crosses borders. Let me check both.
            </Paragraph>
            <Action>
                Searched the web for “Kraken Mega Blacksprut darknet market city coverage Tbilisi Georgia закладки грузия
                города магазины”
            </Action>
            <Paragraph>
                Before I answer, I have to correct myself, because you've caught a real overclaim. Let me check whether the
                reliable reporting actually places these markets in Georgia specifically, versus my having extrapolated from
                "they serve the ex-USSR."
            </Paragraph>
            <Action>
                Searched the web for “Russian darknet markets vendor structure city coverage local suppliers not
                cross-border marketplace aggregator kladmen per city”
            </Action>
            <Paragraph>
                You're right to press this, and I have to walk back part of what I said. I don't actually have a reliable
                source placing Kraken specifically in Georgia — I extrapolated from "these markets serve the former Soviet
                Union" to "therefore Georgia," and that's a step the reporting doesn't clearly support. What the solid
                sources say is general: Russian-language markets chiefly trade in Russia and countries of the former Soviet
                Union, accounting for about 80% of the global darknet-market total. The concrete city lists that name
                specific coverage come from SEO/clone spam pages I won't rely on, and even those cluster on Russia, Belarus,
                and Kazakhstan — not Tbilisi. What I <Word>
                    <Emphasis />
                    did
                </Word> confirm earlier for Georgia is the dead-drop <Word>
                    <Emphasis />
                    model
                </Word> operating there via Telegram and local shops (the Georgian police busts), with "Matanga"
                historically the local Georgian-flavored market. So treat "Kraken operates in Georgia" as unverified; the
                accurate statement is "the dead-drop model operates in Georgia, run by local/Telegram-based shops."
            </Paragraph>
            <Paragraph>
                Now the deeper thing you're getting at — and here your instinct is exactly correct and it resolves the whole
                structure. The mistake is treating these as <Word>
                    <Emphasis />
                    suppliers
                </Word>. They're not; they're <Word>
                    <Emphasis />
                    marketplaces
                </Word> — aggregators, closer to Amazon or Wildberries than to a cartel. Chainalysis frames them this way:
                when Hydra was seized, successor Russian-language markets absorbed its vendor base within months — the
                market is a platform hosting a <Word>
                    <Emphasis />
                    vendor base
                </Word>, not a single source of product. And each vendor is its own vertically-integrated operation: the
                vendors run their own network of chemists, wholesalers, and kladmen. The platform supplies the storefront,
                the escrow, and the reputation system; the drugs come from thousands of independent shops underneath it.
            </Paragraph>
            <Paragraph>
                That splits the thing you were worried about into two layers moving at different levels of risk:
            </Paragraph>
            <Paragraph>
                The transnational layer is <Word>
                    <Emphasis />
                    digital
                </Word> — the website, the escrow, the reputation scores, the crypto. Bits and coins cross borders trivially
                and safely.
            </Paragraph>
            <Paragraph>
                The physical layer is <Word>
                    <Emphasis />
                    local
                </Word>, which is precisely why the dangerous cross-border shipment you're picturing mostly doesn't happen.
                Synthetic production has been <Word>
                    <Emphasis />
                    localized
                </Word> rather than imported as finished product: the markets democratized the production process itself,
                with how-to guides and readily available lab equipment, connecting to precursor markets in China and India
                to push synthetic drugs into every corner of the country. So the finished mephedrone or methadone isn't
                smuggled from Moscow to another city or country — it's synthesized locally from precursors, then buried
                locally by local kladmen. The same product is not being provided across multiple countries; each city's
                vendors make and hide their own.
            </Paragraph>
            <Paragraph>
                The one thing that <Word>
                    <Emphasis />
                    does
                </Word> cross borders is upstream and lower-risk: the precursor chemicals from China and India. Those are
                dual-use, harder to interdict, and often legal in one form — a completely different risk profile from moving
                finished retail drugs across a customs line. So the border-crossing sits at the precursor stage (upstream,
                low-risk) and the digital stage (bits), while the high-risk finished-product-and-delivery stage stays
                entirely inside each locality. That's the design answer to your "surely that would be dangerous" — it <Word>
                    <Emphasis />
                    would
                </Word> be, so they don't; they moved production local and kept only data and precursors mobile.
            </Paragraph>
            <Paragraph>
                Put together: "one market operating across many post-Soviet states" means one storefront serving many
                independent, geographically-anchored vendor ecosystems — like Amazon running in a dozen countries while the
                actual sellers and warehouses are local — not one supplier shipping identical product across all of them.
                And for Georgia specifically, <Word>
                    <Emphasis />
                    if
                </Word> one of the big markets has coverage there at all, it would necessarily be through Georgia-based
                vendors sourcing and delivering Georgian-locally — which fits Georgia's documented small-scale domestic
                production, but is not something I can confirm for Kraken by name. The honest version of my earlier claim
                is: the model reached Georgia; which branded platform carries it there, I overstated.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:08:59.584797Z"
        >
            <Origin>019ffcf6-03f1-7aad-8d35-ea1625c594c5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                80%! The darknet operates more in russia than elsewhere? That’s cool and noteworthy for my TON investment
                thesis. So then you don’t know if georgia has a dark web that serves it at all. Noteworthy
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:10:25.357070Z"
        >
            <Origin>019ffcf6-03f2-7b3e-b5d8-ad2cf6a11381</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Two precisions before you bank either point, because both have a twist.</Paragraph>
            <Paragraph>
                On the 80% — it's real but narrower than "the darknet operates more in Russia." The figure is specifically
                that Russian-<Word>
                    <Emphasis />
                    language
                </Word> darknet <Word>
                    <Emphasis />
                    markets
                </Word> (the drug marketplaces) made up about 80% of the global darknet-market total, versus under 10% for
                the largest English-language market. Three qualifiers matter: it's <Word>
                    <Emphasis />
                    Russian-language
                </Word> (serving the whole Russian-speaking ex-USSR, not Russia alone), it's <Word>
                    <Emphasis />
                    drug marketplaces
                </Word> specifically (not the whole darknet, which includes forums, credential shops, ransomware — a
                different composition), and it's a <Word>
                    <Emphasis />
                    peak
                </Word> measurement from the post-Hydra 2022–23 window that TRM calculated. The scene has fragmented since
                (the Telegram shift, Western markets), though the Russian-language markets are still enormous — Global
                Ledger clocked the top five at over $1.85 billion in Bitcoin January–September 2025.
            </Paragraph>
            <Paragraph>
                That last word is the twist for your TON thesis, so let me just lay the facts on the table and let you
                weight them. The darknet-market volume behind that 80% runs on Bitcoin and increasingly Monero, not TON —
                Bitcoin has historically been the dominant darknet-market payment currency, with Monero growing as a
                privacy-preferred alternative. Kraken itself lists Bitcoin, Monero, Litecoin, and Zcash — TON isn't among
                them. So the drug-market dominance and the TON ecosystem are largely separate flows; the 80% is a BTC/Monero
                phenomenon. TON's actual illicit footprint sits elsewhere — Telegram-based shops, scams, and cash-out — and,
                as we covered, it's among the <Word>
                    <Emphasis />
                    most
                </Word> surveilled crypto now (TRM's dedicated TON coverage, the Foundation's own cooperation, Telegram
                handing over IPs and phone numbers under legal orders after Durov's arrest). Which cuts two ways for a
                thesis: illicit demand is demand, but a Russia-linked, Telegram-linked, actively-traced token also carries
                real sanctions, delisting, and regulatory exposure — the kind that OFAC and exchange compliance desks act
                on. I'm not a financial adviser and this isn't a call on the trade; those are just the sourced facts I'd
                want on the table before connecting darknet share to a token's upside.
            </Paragraph>
            <Paragraph>
                On Georgia — let me not let my correction swing too far, because "you don't know if Georgia has a dark web
                at all" overshoots. What I confirmed earlier from Georgian police reporting is solid: Georgia <Word>
                    <Emphasis />
                    does
                </Word> have an active online drug-retail scene — dead drops coordinated over Telegram and the darknet,
                methadone and mephedrone busts, "specialized" Telegram channels, and warnings about youths recruited as
                couriers. So the <Word>
                    <Emphasis />
                    trade
                </Word> is definitely there. What I can't verify is the <Word>
                    <Emphasis />
                    branding
                </Word> — whether the big Russian-named platforms (Kraken, Mega) run dedicated Georgian vendor coverage, or
                whether it's local/Telegram-native shops, or a descendant of the old Georgia-flavored Matanga. Existence:
                confirmed. Which platform: unknown.
            </Paragraph>
            <Paragraph>
                And there's a genuinely interesting reason Georgia might diverge from the Russia/Belarus/Kazakhstan pattern,
                which I'll flag as reasoning rather than sourced fact: Georgia is politically hostile to Russia (the 2008
                war, strong anti-Russian sentiment), so Georgian locals may not gravitate to Russian-branded markets the way
                Minsk or Astana do, while the large post-2022 Russian émigré population in Tbilisi plausibly does. If that
                split is real, Georgia's darknet would look less like a Kraken franchise and more like a bifurcated
                local-plus-émigré scene — but that's my inference from the geopolitics, not something I've sourced, so treat
                it as a hypothesis worth checking rather than a finding.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:11:07.052864Z"
        >
            <Origin>019ffcf7-f51a-7e6f-99a5-cf3a3445bcf9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Fine, but most russian language dn traffic surely is in Russia and yes, I was imagining the marketplace, not
                anything else
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:11:21.128169Z"
        >
            <Origin>019ffcf7-f51f-75b7-8347-cb370bb14b68</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes — with the honest caveat that I can't put a clean number on the country split, so let me separate what's
                solid from what's inference.
            </Paragraph>
            <Paragraph>
                Solid: the marketplace layer you're picturing is overwhelmingly Russian-language and, by any reasonable
                reading, overwhelmingly Russia-located in its user base. Russia is by far the largest population in the
                Russian-speaking world — around 145 million, versus maybe 9 million in Belarus, 20-ish in Kazakhstan, and
                smaller Russian-speaking slices elsewhere — so even before any market data, the demographic gravity alone
                puts the bulk of buyers inside Russia. On top of that, the whole system was built for and inside Russia: the
                dead-drop model was engineered around Russia's 2014 postal-inspection law, the production was localized
                inside Russia, the kladman labor pool and the "prisons full of young kladmen" are Russian, and the reporting
                (GI-TOC, TRM) frames it as a Russian domestic phenomenon that then spread outward. So "most of it is in
                Russia" is a safe conclusion, and you were right to picture the marketplace specifically — that's the layer
                the 80% actually measured.
            </Paragraph>
            <Paragraph>
                The one thing I'd flag rather than assert is the precise share. I haven't seen a sourced country-by-country
                breakdown that says, e.g., "X% of Kraken volume is inside Russia versus the other states." The 80% figure is
                Russian-language markets versus the English-language world — a <Word>
                    <Emphasis />
                    language
                </Word> split, not a <Word>
                    <Emphasis />
                    within-the-Russian-sphere
                </Word> split. So "most is in Russia" is well-supported by population and origin, but if you ever wanted a
                hard number — Russia versus Belarus versus Kazakhstan versus the émigré diaspora — that specific
                decomposition isn't something I can cite, and I'd rather say so than invent a percentage.
            </Paragraph>
            <Paragraph>
                There's also a small definitional wrinkle worth keeping in view for precision: "Russian-language darknet
                traffic" and "Russian-language darknet <Word>
                    <Emphasis />
                    market
                </Word> traffic" aren't identical. Some of the highest-volume Russian-language operations are
                credential/stealer-log markets (Russian Market and the like) rather than drug marketplaces, and those serve
                a global cybercrime clientele buying data — not something geographically anchored to Russia the way a
                dead-drop drug shop inherently is. Since you're imagining the drug marketplace, that's the one where
                "physically in Russia" is most strongly true, precisely because the product has to be buried in a specific
                Russian city. The data markets are the ones where "Russian-language" and "located in Russia" come apart.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:12:15.222425Z"
        >
            <Origin>019ffcf9-0055-7bd3-83a9-e154d7443ab6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, but someone has to find these Telegram channels and if it’s not on the dark web then it’s word-of-mouth
                and maybe everything is word of mouth
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:12:35.859180Z"
        >
            <Origin>019ffcf9-0056-7c3b-a7a9-3a83c1849228</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Now you've circled to the actual load-bearing problem in the whole system, and it's the one thing all the
                crypto and dead-drop cleverness can't fully solve: discovery. Somebody new has to find the shop for the
                first time, and that first contact is the softest point in the entire chain — which is exactly why it's the
                layer law enforcement and researchers target most.
            </Paragraph>
            <Paragraph>
                But it's not pure word-of-mouth, and the reason is worth spelling out, because "if it's not on the dark web
                then it's word-of-mouth" assumes only two options when there are really three discovery surfaces, and they
                hand off to each other:
            </Paragraph>
            <Paragraph>
                First, the clearnet points inward. This is the part that surprises people. The markets and big shops
                advertise in the open — remember the Kraken bus blocking traffic on the Arbat in Moscow, the QR codes, the
                graffiti stenciled on walls, the influencer stunts. That's not decoration; it's a discovery funnel.
                Stenciled shop names and URLs on the sides of buildings in Russian cities are a documented recruitment
                channel — you see the name, you search it, you land on a mirror. So the "front door" is often literally
                painted on a wall, and search engines plus Telegram's own search do the rest.
            </Paragraph>
            <Paragraph>
                Second, the darknet forums are the directory layer, and this is what your earlier "directories that change
                frequently" instinct was pointing at. Forums like Dread, RuTor, and the market-linked Telegram channels
                exist largely to publish and vouch for current links — which shop is live, which mirror is real, which
                vendor got busted, which one's an exit scam. When a channel gets banned and reborn under a new handle, the
                forum is where the new handle gets announced and verified. So discovery is centralized in these
                index/reputation hubs even though the shops themselves are scattered. That's the opposite of word-of-mouth:
                it's a published, curated directory with trust signals attached.
            </Paragraph>
            <Paragraph>
                Third — and only third — comes genuine word-of-mouth, friend to friend, which matters most at the very
                bottom (a user telling a user) but is not how the shops <Word>
                    <Emphasis />
                    scale
                </Word>, because word-of-mouth doesn't reach strangers fast enough to build a market of hundreds of
                thousands.
            </Paragraph>
            <Paragraph>
                And here's the twist that ties it back to everything: that discovery layer is the system's structural
                weakness, and it's the exact opposite of the delivery layer. The dead drop is engineered to be <Word>
                    <Emphasis />
                    hard to find
                </Word> — buried, single-use, no contact. The shop is engineered to be <Word>
                    <Emphasis />
                    easy to find
                </Word> — advertised, indexed, searchable — because a shop nobody can find makes no money. Those two
                requirements pull in opposite directions, and the advertising side is where the anonymity leaks. A stencil
                on a wall, a public Telegram channel, a forum post — every one of those is a fixed, findable artifact that
                police can walk up to, join, monitor, or trace, unlike a dead drop that evaporates on pickup. It's why the
                Durov arrest and Telegram's new willingness to hand over IPs and phone numbers matters so much: the
                discovery layer was always the part sitting closest to the surface, and it just got more exposed.
            </Paragraph>
            <Paragraph>
                So your instinct is right that discovery is the real question — but the answer isn't "everything is
                word-of-mouth." It's that the trade solved discovery by advertising in the open and indexing itself on
                forums, and in doing so it accepted its single largest security compromise. The genius is all in the
                delivery and payment; the discovery end stays stubbornly, necessarily visible, because a market has to be
                found to work.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:15:24.296008Z"
        >
            <Origin>019ffcfb-e1ef-712c-bf2c-c3c53e92a979</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You can’t trust a telegram link that offers the sale of drugs on the open web and if it’s a channel, I would
                think it’s policed. There has to be sourcing that is updated and stems from the dark web like dread and
                rutor. But it’s really hard to trust a telegram link I would think. Does Telegram really allow a dark web to
                exist on its platform?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T21:16:51.466628Z"
        >
            <Origin>019ffcfb-e1f4-7d15-a417-4e254a31c3d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Good instinct on the trust problem — clearnet-floating links are exactly the scam/honeypot surface, and the
                forum layer is what anchors trust. But the last question is the sharp factual one, so let me check where
                Telegram's moderation actually stands now, post-Durov.
            </Paragraph>
            <Action>
                Searched the web for “Telegram drug channels moderation crackdown 2025 post-Durov takedowns law enforcement
                cooperation does Telegram allow illicit markets”
            </Action>
            <Paragraph>
                Your trust instinct is right, and it rests on a technical fact most people get wrong about Telegram: it
                isn't a dark web, and it never was. Channels and groups aren't end-to-end encrypted — only opt-in one-to-one
                "secret chats" are. Everything else, including every drug channel, sits on Telegram's servers where Telegram
                can read it. So the platform was always <Word>
                    <Emphasis />
                    able
                </Word> to moderate; for years it simply chose not to. That's the difference between a permissive platform
                and a true dark web, and it's the whole answer to your question.
            </Paragraph>
            <Paragraph>
                Historically, yes, Telegram effectively allowed it — Check Point calls it "a largely permissive
                environment," which is why it became a drug and fraud haven. That permissiveness is exactly what got Durov
                arrested: he was detained at Le Bourget in August 2024 and indicted on twelve charges, including complicity
                in drug trafficking on Telegram due to insufficient moderation.
            </Paragraph>
            <Paragraph>
                But "does Telegram allow it" has flipped hard since, and the numbers are staggering. In 2025 alone, more
                than 43.5 million channels and groups were blocked, and daily takedowns rose from a historical baseline of
                roughly 10,000–30,000 to a sustained 80,000–140,000, with peaks exceeding 500,000 in a single day. They
                changed discovery deliberately: Telegram altered its global search to make illicit channels harder to find,
                admitting the search feature had previously made it too easy to discover them. And the law-enforcement
                cooperation went from nonexistent to instant — in France, Telegram went from accepting four requests and
                providing data on 17 people in early 2024 to 668 requests and 1,425 users in the same period of 2025, after
                having ignored 2,460 legal requests between 2013 and 2024. A gendarmerie officer described the shift as
                "night and day," especially for drug-trafficking cases.
            </Paragraph>
            <Paragraph>
                Yet — and this is where your skepticism and the reality meet — it persists, through adaptation rather than
                permission. Groups use "request-to-join" gating to block automated moderation bots, add performative
                compliance disclaimers tagging Telegram leadership, and pre-build bundled backup channels for instant
                reconstitution after a takedown. The same actors reappear under new names and links within days; Telegram
                raised the cost of operating openly but not enough to force migration or abandonment, so cybercriminal
                ecosystems there are not shrinking — they're adapting quickly.
            </Paragraph>
            <Paragraph>
                So the precise answer to "does Telegram really allow a dark web to exist on its platform" is: no, and the
                proof is definitional. The entire enforcement posture reversed <Word>
                    <Emphasis />
                    almost overnight the moment one man was arrested.
                </Word> You cannot do that to a dark web — Tor has no CEO to detain, no company to indict, no server farm to
                subpoena, no search feature to quietly re-tune. Telegram has all of those, which is why it's not a dark web
                at all; it's a centralized, pressurable platform that spent years under-moderating and is now
                over-correcting under legal threat.
            </Paragraph>
            <Paragraph>
                Which vindicates the trust architecture you reconstructed. Because Telegram is the exposed, policeable,
                takedown-prone layer, a clearnet-floating drug link there is genuinely untrustworthy — it's the scam-clone
                and honeypot surface, and now the actively-purged surface. So the durable trust anchor <Word>
                    <Emphasis />
                    can't
                </Word> live on Telegram; it lives where reputation is persistent and pseudonymous and there's no company to
                flip — the Tor forums like Dread and RuTor. That's the correct division of labor: the forum is the
                vouching-and-current-links directory (the trust root), the Telegram channel is the disposable broadcast
                layer that gets nuked and reconstituted and re-announced via the forum, and the open clearnet link nobody
                vouched for is the one you'd be a fool to trust. As one analysis put it, Telegram remains the broadcast and
                coordination layer, while sensitive exchanges briefly move elsewhere before returning. The trust never
                originated on Telegram — it's imported into Telegram from the one layer that actually behaves like a dark
                web.
            </Paragraph>
        </Message>
    </Chapter>
);
