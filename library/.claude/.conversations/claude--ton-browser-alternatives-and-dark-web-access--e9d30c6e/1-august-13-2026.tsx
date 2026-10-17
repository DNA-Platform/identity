import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Title>[[ 13 August 2026 ]]</Title>
        <Message
            at="2026-08-13T13:35:50.055368Z"
        >
            <Origin>019ffb57-162e-7bca-b04f-d3c7429061b0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there a reputable ton browser. Nikolai called his stack a dark wrb 2.0. Is there a browser that
                represents that? Surely dark.fail for TON isn’t visited on Telegram
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T13:36:09.138993Z"
        >
            <Origin>019ffb57-162f-7265-bc29-845bbd4af292</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “TON Sites browser TON Proxy access .ton domains”</Action>
            <Paragraph>
                Short answer: no. There is no Tor-Browser-equivalent for TON — no polished, dedicated client that packages
                the darknet layer the way Tor Browser packages onion routing. What exists is a set of access shims onto TON
                Proxy:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        MyTonWallet's browser extension
                    </Word> — supports TON Proxy directly, connecting to TON Sites without third-party services. This is the
                    most "reputable" option, and notably it's Zinchuk's product — the same engine underneath Gram Wallet.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Public HTTPS gateways
                    </Word> — ton.run or tonp.io let you browse TON Sites with no setup, but route your traffic through a
                    third party and aren't recommended for regular use. These are the antithesis of the anonymity design — a
                    clearnet peephole.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Manual proxy config
                    </Word> — pointing Chrome/Firefox at a TON entry proxy, which is the raw rldp-http-proxy mechanism from
                    Nikolai's spec.
                </Line>
            </Paragraph>
            <Paragraph>
                The architectural irony is that the anonymizer layer you'd need for the true dark-web-2.0 reading — TON
                Proxy operating in garlic-routing mode, the sec. 3.1.6 material — is specified but not what any of these
                tools actually do. The current proxy is an HTTP-to-ADNL bridge where the server IP is published to the DHT
                and simply not exposed at the HTTP layer — location-hiding for servers in a weak sense, but not multi-hop
                anonymity for clients. The eep-service architecture exists on paper; the shipped tooling is closer to an
                alternative DNS root than an I2P.
            </Paragraph>
            <Paragraph>
                And you're right about the discovery layer: there's no dark.fail equivalent because there's essentially no
                dark ecosystem to index. TON Sites in practice host wallets, casinos, and Foundation pages — the directory
                function, such as it is, lives in Telegram channels, which is itself consistent with the pattern: Telegram
                is the front-end for everything, and the anonymizer layer stays dormant plumbing until someone — presumably
                the same someone — decides to activate it.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T13:38:14.298676Z"
        >
            <Origin>019ffb59-4c71-7736-9a96-62fbdf1975e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>🐶 TONNET BROWSER v2.0.0</Paragraph>
            <Paragraph>A few changes and new features, Here what’s new:</Paragraph>
            <Paragraph>↗️ Browsing</Paragraph>
            <Paragraph>
                <List />
                <Line>Multi-chain resolver ENS &amp; SNS</Line>
                <Line>DNS lookup (ton://dns)</Line>
                <Line>TON Storage file browser</Line>
            </Paragraph>
            <Paragraph>
                💰 Wallet &amp; payments - Built-in W5 wallet (ton://wallet)
            </Paragraph>
            <Paragraph>
                <List />
                <Line>x402 micropayments via HTTP 402</Line>
                <Line>TON tip buttons</Line>
            </Paragraph>
            <Paragraph>💎 Network</Paragraph>
            <Paragraph>
                <List />
                <Line>Migrated to native adnl tunnel protocol</Line>
                <Line>Tunnel nodes auto-discovered via DHT</Line>
            </Paragraph>
            <Paragraph>
                No external security audit. The code is open-source and subject to internal reviews, but has not been
                independently verified.
            </Paragraph>
            <Paragraph>Website : tonnet.resistance.dog GitHub : tonnet-browser</Paragraph>
            <Paragraph>⬇️ Download Tonnet Browser ➖➖➖➖➖➖➖➖➖➖➖➖➖ 💬 Group Chat | 📣 @TonnetBrowser</Paragraph>
            <Paragraph>—-</Paragraph>
            <Paragraph>
                How about this? I found it on Telegram. Research it and its successors. There’s no index of something useful
                to visit on this? Do people primarily use it for fragment?
            </Paragraph>
            <Attachment>Uploaded “IMG_3706.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-08-13T13:38:49.917802Z"
        >
            <Origin>019ffb59-4c72-7799-bd1e-c1fe47324dab</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tonnet Browser resistance.dog TON sites browser”</Action>
            <Action>Searched the web for “TON sites directory list searchton index .ton sites what to visit”</Action>
            <Paragraph>
                This corrects what I told you yesterday — Tonnet Browser is much closer to the Tor-Browser analogue than
                anything I surfaced then. Worth registering what it actually is:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    It activates the dormant layer.
                </Word> It's a native desktop browser for TON that browses .ton and .t.me sites directly via P2P with 3-hop
                garlic routing, built-in TON Storage, 15-vector anti-fingerprinting, and first-party isolation — and per
                your screenshot, v2.0 migrated to a native ADNL tunnel protocol with tunnel nodes discovered via DHT,
                explicitly crediting Tor as inspiration and using adnl-tunnel as the garlic routing relay for anonymous
                browsing. So this is the first shipped client that actually implements the sec. 3.1.6 architecture —
                multi-hop garlic routing over ADNL — rather than the flat HTTP-to-ADNL bridge everything else uses. The spec
                sat dormant since 2019; a third party finally built the client on top of it. It's under active development
                too — the site now serves v2.4.0 across Windows, macOS, Linux, and an Android APK.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who's behind it matters for your frame.
                </Word> It's the Resistance Dog collective — and the Resistance Dog is Pavel's own symbol, the hooded dog
                from the 2018 VK/Telegram "Digital Resistance" era, later minted as Telegram-blessed NFTs. Formally
                independent, ideologically inner-orbit — the Zinchuk pattern again. Their toolkit is a whole
                parallel-internet stack: a decentralized GitHub alternative on TON, a bag indexer on TON Storage, ZK privacy
                pools with on-chain Groth16 proofs, COCOON inference clients, HTTP 402 micropayments, and a CLI agent that
                drives Tonnet headlessly. The x402 piece plugs payments directly into the browsing layer — the
                payment-per-request economics from the whitepaper's proxy-incentive design. Caveat from their own release
                notes, which you already saw: no external audit.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On the index question — you're right, there isn't one.
                </Word> No dark.fail equivalent exists because the content layer is still nearly empty. What passes for
                discovery: ton.run's gateway carries a site list with a we-don't-endorse-anything disclaimer, Resistance Dog
                runs a TON Storage search/discovery tool and a decentralized bag indexer, and otherwise the directory
                function lives in Telegram channels. The population of actual .ton sites remains mostly manifestos,
                ecosystem mirrors, casinos, and the Resistance tools pointing at each other — a self-referential ring,
                infrastructure awaiting inhabitants.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    And no — Fragment isn't the use case.
                </Word> Fragment is an ordinary clearnet site (fragment.com); nobody needs Tonnet to reach it. There's no
                dominant "thing people visit" through this browser yet. Its user base is a small privacy/ideology cohort,
                and its current function is closer to proof-of-existence: demonstrating that the darknet mode of the stack
                runs, before there's anything on it. Which fits your sequencing — the plumbing ships and works while the
                spotlight is elsewhere; the content and the users are the part that hasn't been switched on.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T13:43:50.484071Z"
        >
            <Origin>019ffb5e-61cb-718f-9222-dc74e2d5a89c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well someone uses it for something! Nikolai isn’t barking tech stack requirements for a replacement browser
                to telegram in russia into the dark. Look to see how noobs should get started
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T13:44:29.345827Z"
        >
            <Origin>019ffb5e-61cc-7877-915e-07974a399540</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tonnet Browser обход блокировки Telegram .t.me домены”</Action>
            <Action>Fetched https://tonnet.resistance.dog/</Action>
            <Paragraph>
                The use case just crystallized, and the timing is telling. Note the <Word>
                    <Verbatim />
                    .t.me
                </Word> support — Tonnet doesn't just open .ton sites, it runs a local TON proxy that resolves .ton and
                .t.me sites natively, connecting directly to the TON network. That means Telegram's own web content
                reachable with zero dependence on conventional DNS. And DNS is precisely where Telegram just got hit: on
                July 13, 2026, the .me registry pulled t.me entirely from the global DNS zone (serverHold status), breaking
                short links in browsers worldwide, likely over OFAC sanctions-compliance — possibly one sanctioned entity's
                channel link triggering blockage of the whole domain. Meanwhile inside Russia, Telegram has been throttled
                since late 2025, with brands migrating to the state messenger Max. So in a single month Telegram's
                addressing layer was attacked at the registry level by Western sanctions machinery <Word>
                    <Emphasis />
                    and
                </Word> degraded at the network level by Russia — and the only routing layer immune to both is the one
                specified in the 2019 whitepaper. That's your "not barking into the dark": the darknet layer's first real
                constituency is Telegram's own reachability. Also worth noting: t.me pulled July 13, wallet announcement
                July 21, Rosfinmonitoring July 29 — a dense three-week corridor.
            </Paragraph>
            <Paragraph>
                For getting started, it's genuinely noob-friendly now — much closer to Tor Browser's "download and go" than
                the old proxy-config gymnastics:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Download
                    </Word> from tonnet.resistance.dog/download or the GitHub releases page (TONresistor/Tonnet-Browser,
                    currently v2.5.0). Windows gets an installer or portable .exe; macOS a universal .dmg for Intel and
                    Apple Silicon; Linux AppImage or .deb; Android is a sideloaded APK (v1.0, with a v1.1 beta). On Mac you
                    may need <Word>
                        <Verbatim />
                        xattr -cr
                    </Word> to clear Gatekeeper since it's unsigned.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Launch — no config.
                    </Word> It connects to TON on its own; the FAQ answer to "how is this different from a gateway" is the
                    whole pitch: a gateway owner sees everything you do and can be blocked or go offline; Tonnet connects on
                    its own with nobody in the middle.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Choose your mode.
                    </Word> Direct P2P, or private: three layers of encryption through three relays, none knowing both who
                    you are and where you're going, with the route rotating every 10 minutes. Tor's circuit model, verbatim,
                    on ADNL.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        First stops:
                    </Word> the built-in start page, then <Word>
                        <Verbatim />
                        foundation.ton
                    </Word>, the resistance.dog tool ring, their TON Storage search for content discovery, and any <Word>
                        <Verbatim />
                        .t.me
                    </Word> channel — including Pavel's — resolved over TON instead of DNS.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Wallet is already in it:
                    </Word> non-custodial, with HTTP 402 payments and per-site spending limits — pay-per-request browsing
                    wired in from the start.
                </Line>
            </Paragraph>
            <Paragraph>
                Their Telegram channels (@TonnetBrowser, @ResistanceTools, @ResistanceForum) are the living documentation —
                which you're better positioned to read directly than I am to fetch. The one honest caveat is theirs, from
                your screenshot: open source, no independent audit. For reconnaissance browsing that's acceptable; I'd treat
                the built-in wallet as a toy until audited.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-13T18:59:59.232880Z"
        >
            <Origin>019ffc7f-daf5-7e27-9010-b17de169adc4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So how do we download the Windows version of this browser and play around with it?</Paragraph>
        </Message>
        <Message
            at="2026-08-13T19:00:53.363165Z"
        >
            <Origin>019ffc7f-daf6-763a-8678-a524581e1e40</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Ran curl -s -A "Mozilla/5.0" https://api.github.com/repos/TONresistor/Tonnet-Browser/releases/latest | head
                -100
            </Action>
            <Action>
                Ran sleep 30; curl -sL -A "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
                https://github.com/TONresistor/Tonnet-Browser/releases.atom | grep -E "&lt;title&gt;|&lt;updated&gt;" | head
                -20
            </Action>
            <Paragraph>
                Confirmed live via the atom feed (your header trick worked; the API rate-limited immediately as usual):
                <Word>
                    <Bold />
                    v2.5.0, released August 7 — six days ago.
                </Word> Note the cadence, too: v2.1 through v2.4 all shipped between June 20 and July 11, i.e., the
                development tempo accelerated right into the t.me/wallet corridor.
            </Paragraph>
            <Paragraph>For Windows, two paths:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Portable (recommended for playing around):
                </Word> Download <Word>
                    <Verbatim />
                    TON-Browser-Portable-2.5.0.exe
                </Word> from either tonnet.resistance.dog/download or github.com/TONresistor/Tonnet-Browser/releases. No
                installation, no registry writes — it just runs, and deleting the file removes it. Ideal for a first look.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Installer:
                </Word> <Word>
                    <Verbatim />
                    TON-Browser-Setup-2.5.0.exe
                </Word> from the same places. Or the one-liner from their site, in PowerShell:
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`irm https://github.com/TONresistor/Tonnet-Browser/releases/download/v2.5.0/TON-Browser-Setup-2.5.0.exe -OutFile TonBrowser.exe; .\\TonBrowser.exe`}
            </CodeBox>
            <Paragraph>
                Expect two friction points, both because the binary is unsigned: your browser may flag the download ("Keep"
                it), and SmartScreen will likely throw "Windows protected your PC" on first run — More info → Run anyway.
                Given no external audit, downloading from the GitHub releases page specifically (not a mirror) is the right
                hygiene, and if you want to be careful, the portable build sandboxes naturally.
            </Paragraph>
            <Paragraph>
                Once it opens: it connects to TON on launch — check the status bar for "Connected to TON Network" and the
                routing mode. Things to poke at first session:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Toggle between direct and garlic-routed (3-hop) mode in settings and feel the latency difference —
                    that's the Tor-style tradeoff live
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ton://dns
                    </Word> — the built-in DNS lookup page
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        foundation.ton
                    </Word>, then your own Fragment username as a resolution test
                </Line>
                <Line>
                    A <Word>
                        <Verbatim />
                        .t.me
                    </Word> address — Pavel's channel resolved over ADNL instead of DNS is the whole Russia thesis in one
                    address bar
                </Line>
                <Line>The TON Storage tab — try seeding/downloading a bag</Line>
            </Paragraph>
            <Paragraph>
                Everything is wiped on exit by default (Tor Browser behavior), so don't be surprised when history is gone
                next launch. And I'd leave the built-in wallet empty for now — browse with it, don't fund it.
            </Paragraph>
        </Message>
    </Chapter>
);
