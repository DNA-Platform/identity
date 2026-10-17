import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Quoted, Speaker, Verbatim } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Title>[[ 10 February 2026 ]]</Title>
        <Message
            at="2026-02-10T22:40:49.690189Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Look for posts from the GitHub developer for zapret regarding mtproto and what’s going on in Russia right
                now. Also look at RPRX of the xray technology or anything from browsec the VPN on any public listings,
                seeing if they’re offering insights into what’s been happening in Russia for the last two days. Telegram is
                targeted
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T22:42:45.696309Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll run several searches to track what's happening with Russian internet censorship and these specific
                projects. Let me dig into this.
            </Paragraph>
            <Action>Searched the web for “zapret GitHub mtproto Russia 2025”</Action>
            <Action>Searched the web for “bol-van zapret telegram block Russia February 2026”</Action>
            <Action>Searched the web for “RPRX xray-core Russia censorship Telegram 2026”</Action>
            <Action>Fetched https://github.com/net4people/bbs/issues/490</Action>
            <Action>Searched the web for “Browsec VPN Russia Telegram block February 2026”</Action>
            <Action>Searched the web for “XTLS Xray-core Russia blocking February 2026 XHTTP”</Action>
            <Action>Fetched https://t.me/s/browsecvpnofficial</Action>
            <Action>Searched the web for “site:t.me/s/BrowsecVPNru Russia blocking February 2026”</Action>
            <Action>Searched the web for “Browsec VPN telegram channel Russia blocking xray news today”</Action>
            <Action>
                Searched the web for “Cloudflare blog "Russian internet users" unable access open internet 2025”
            </Action>
            <Paragraph>
                Doug, this is breaking in real-time and directly validates your thesis. Here's what I've assembled across
                all three source categories:
            </Paragraph>
            <Heading>The Headline: Russia Officially Begins Throttling Telegram (Feb 9-10, 2026)</Heading>
            <Paragraph>
                Roskomnadzor announced it was throttling Telegram for alleged legal violations, as Moscow tries to push
                citizens into using the state-controlled domestic messenger "Max." Pavel Durov responded directly: "Russia
                is restricting access to Telegram in an attempt to force its citizens to switch to a state-controlled app
                built for surveillance and political censorship."
            </Paragraph>
            <Paragraph>
                Telegram users across Russia reported widespread disruptions for a second consecutive day, with most
                experiencing problems downloading photos and videos, slow loading times, or complete connection failures.
                Complaints on outage monitoring surged to ~15,000. Roskomnadzor accused Telegram of failing to combat fraud,
                protect user data, and combat criminal/terrorist use.
            </Paragraph>
            <Paragraph>
                This is the escalation of a ratcheting campaign: since August 2025, Roskomnadzor has blocked voice calls
                through WhatsApp and Telegram, and since the beginning of 2026, users have complained about long loading of
                video files, with download speeds falling to 128 Kbps without VPN.
            </Paragraph>
            <Paragraph>
                Critically for your thesis — pro-war bloggers criticized the decision, saying it would hobble frontline
                communications. The "Two Majors" channel warned that positions would "mostly be conveyed not by people, but
                by our masters of the foreign ministry." Pro-war correspondent Alexander Kots said blocking Telegram would
                limit Russia's own "information operations" and recruitment through the app. Even the war machine depends on
                Telegram.
            </Paragraph>
            <Paragraph>
                Russian lawmaker Andrei Gurulev framed the restrictions as part of Russia's "struggle with NATO," telling
                citizens they'd have to accept the inconveniences.
            </Paragraph>
            <Heading>bol-van/zapret (GitHub) — MTProto Analysis</Heading>
            <Paragraph>
                The original zapret developer (bol-van) has the project in <Word>
                    <Bold />
                    EOL mode
                </Word> — the project description states "this version of zapret is no longer being developed and is in
                End-Of-Life mode. No new features. Only bugfixes."
            </Paragraph>
            <Paragraph>
                The critical finding from the zapret community and the IPSets-For-Bypass-in-Russia repo: <Word>
                    <Bold />
                    "Unblocking Telegram if you live in southern Russia — Impossible, use SOCKS5 or MTProto proxy."
                </Word> The blocking is implemented without using TSPU (deep packet inspection hardware) by ISPs directly.
                Only the telegram.org web interface IP is completely blocked. Mirrors and all data center addresses are
                blocked by ports (80, 443, 88, 8443). "Unfortunately zapret cannot help here."
            </Paragraph>
            <Paragraph>
                This is significant — it means the Telegram block in southern Russia is being done at the <Word>
                    <Bold />
                    IP/port level
                </Word>, not DPI, which is a cruder but harder-to-circumvent method. The community's recommendation is
                MTProto proxies from Telegram channels like @ProxyMTProto, or full VPN tunneling.
            </Paragraph>
            <Paragraph>
                The broader zapret ecosystem (Flowseal's fork, ankddev's fork) is massive — dozens of projects with
                thousands of stars dedicated to bypassing DPI blocks on Discord, YouTube, Viber, and Telegram in Russia.
            </Paragraph>
            <Heading>RPRX / Xray-core (XTLS Project)</Heading>
            <Paragraph>
                The most technically important development was documented in <Word>
                    <Bold />
                    net4people/bbs Issue #490
                </Word> and mirrored as <Word>
                    <Bold />
                    Xray-core Issue #4846
                </Word>. Starting in June 2025, Russia deployed a new blocking method:
            </Paragraph>
            <Paragraph>
                If a client connects via TCP/HTTPS/TLS 1.3 to a "suspicious" foreign IP (Hetzner, DigitalOcean, etc.), and
                the data received exceeds ~15-20KB within a single TCP connection, the connection is "frozen" — no RST
                packet, just silent drop. It doesn't matter whether it's legitimate HTTPS or mimicked traffic. The censor
                now also maintains <Word>
                    <Bold />
                    whitelists
                </Word> based on SNI and CIDR subnets, making circumvention "extremely difficult."
            </Paragraph>
            <Paragraph>
                This is the <Word>
                    <Bold />
                    "16KB curtain"
                </Word> — confirmed independently by Cloudflare: since June 9, 2025, Russian ISPs throttle connections to
                Cloudflare-protected services, allowing only the first 16KB of any web asset to load, "rendering most web
                navigation impossible." ISPs confirmed implementing this include Rostelecom, Megafon, Vimpelcom, MTS, and
                MGTS.
            </Paragraph>
            <Paragraph>
                RPRX has been active on Xray-core — the latest release v1.260206.0 (February 6, 2026) includes RPRX's
                commits upgrading gVisor and modifying TLS configuration options, plus new features like <Word>
                    <Bold />
                    XHTTP transport options for bypassing CDN detection
                </Word>, <Word>
                    <Bold />
                    XDNS/XICMP finalmask modes
                </Word>, and <Word>
                    <Bold />
                    dynamic Chrome User-Agent spoofing for all HTTP requests by default
                </Word> — all directly responsive to Russia's evolving censorship apparatus.
            </Paragraph>
            <Paragraph>
                The Xray community has been fielding reports from Russian users: TCP + Reality connections to servers
                outside Russia are being blocked, while connections to domestic servers using the same config work fine. The
                Russian user community specifically noted that "Russia invited a group of 40 Chinese comrades" to help with
                the blocking infrastructure, and the parallels to China's GFW are increasingly direct.
            </Paragraph>
            <Heading>Browsec VPN</Heading>
            <Paragraph>
                Browsec maintains both English (@BrowsecVPNofficial) and Russian (@BrowsecVPNru) Telegram channels. Their
                recent posts show them scrambling: "Today mass blockings started on cell phones in Russia. We're already on
                it." They've been progressively restoring access by country — Netherlands, Germany, Finland, USA — and
                notably their Russian channel instructs users to <Word>
                    <Bold />
                    "switch to XRay"
                </Word> protocol for their connections, confirming that Browsec has integrated Xray technology into their
                VPN product specifically to combat Russian DPI.
            </Paragraph>
            <Heading>The Strategic Picture for Your Thesis</Heading>
            <Paragraph>
                This is exactly the scenario you've been modeling — "betting on a company defeating a powerful state actor."
                Key signals:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Durov's response was defiant, not accommodating.
                    </Word> He explicitly named the surveillance motive and the Max replacement strategy. This is 2018 all
                    over again, but with a billion users and blockchain infrastructure.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The state-backed Max messenger has 70 million monthly users vs Telegram's 93.6 million
                    </Word> — the Kremlin is trying to force migration but hasn't achieved it. Some Max users even reported
                    outages on Tuesday following the Telegram restrictions announcement.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The technical community is adapting in real-time.
                    </Word> Xray/VLESS+Reality, XHTTP, MTProto proxies — the cat-and-mouse game is accelerating. Russia is
                    deploying increasingly China-like methods (16KB caps, SNI whitelists, CIDR whitelists) but the
                    circumvention ecosystem is deep and motivated.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The 2018 playbook failed
                    </Word> — Russia previously tried to ban Telegram but "ultimately failed in its attempts to block access
                    and lifted the ban in 2020." The infrastructure is more sophisticated now on both sides.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        VPN usage is massive
                    </Word> — approximately 41% of Russian internet users use VPNs, and Russia's government itself needs
                    VPNs for business connectivity, creating structural ambiguity in enforcement.
                </Line>
            </Paragraph>
            <Paragraph>
                This is the "utility phase" stress test you've theorized about — Telegram under state-level attack, where
                TON's decentralized infrastructure becomes not a speculative asset but survival infrastructure for
                maintaining communications and financial access for ~100 million Russian users.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T22:51:35.558408Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Find more of what bol-van is saying about MTproto because he posted about it maybe on GitHub or other places
                and I wonder if he said anything in the last two days but tell me what he’s been saying in general
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T22:53:14.936584Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://github.com/bol-van/zapret/discussions/586</Action>
            <Action>Searched the web for “bol-van zapret mtproto telegram discussion github 2025 2026”</Action>
            <Action>Fetched https://github.com/bol-van/zapret/discussions/1860</Action>
            <Action>Searched the web for “"bol-van" zapret telegram discussions February 2026”</Action>
            <Action>Fetched https://github.com/bol-van/zapret2/discussions</Action>
            <Action>Fetched https://github.com/bol-van/zapret2/discussions/4</Action>
            <Action>Searched the web for “bol-van zapret2 "what's new" announcement mtproto telegram”</Action>
            <Action>Searched the web for “"bol-van" "mtproto" OR "telegram" site:github.com 2026”</Action>
            <Paragraph>
                Here's what I've been able to piece together from bol-van's direct statements and the discussions on his
                repos. I should note that bol-van is characteristically terse and technical in his comments — he doesn't
                write essays, he drops precision observations.
            </Paragraph>
            <Heading>bol-van's Key Statements on MTProto</Heading>
            <Heading>1. "The protocol is signature-undetectable" (Oct 2024, Discussion #586)</Heading>
            <Paragraph>
                This is bol-van's foundational position on MTProto. When southern Russia first started blocking Telegram by
                IP ranges, he stated plainly:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    "Telegram should be blocked by IP, because the protocol is signature-undetectable. Pashok &#91;Pavel Durov&#93; is now, you know where. It's not certain they'll fight."
                </Word>
            </Paragraph>
            <Paragraph>
                This is a critical technical assessment. bol-van is saying that MTProto was <Word>
                    <Emphasis />
                    designed
                </Word> to resist DPI fingerprinting — the censor can't identify MTProto traffic by examining packet
                contents the way they can identify, say, TLS or QUIC signatures. The <Word>
                    <Emphasis />
                    only
                </Word> way to block it is crude IP-level blocking. He also dropped the dark observation about Durov (who at
                that time was still under French legal restrictions) — questioning whether Telegram would actively fight
                back.
            </Paragraph>
            <Paragraph>
                He also flatly stated: <Word>
                    <Bold />
                    "DoH doesn't perform any magic by itself. It only encrypts DNS queries to some server. If all IPs are blocked, no DNS change will help."
                </Word> — dismissing people hoping for easy workarounds.
            </Paragraph>
            <Heading>2. "Not so signature-impenetrable after all" (Nov 2025, Discussion #1860)</Heading>
            <Paragraph>
                This is the key evolution. When community member olman94387 observed: <Word>
                    <Emphasis />
                    "It looks like they're throttling the MTProto protocol (video and images go through it), so a separate strategy is needed that would prevent identification of MTProto at the connection establishment stage,"
                </Word> <Word>
                    <Bold />
                    bol-van responded directly:
                </Word>
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    "Try with any protocol different variants. If this takes off, there is a way to detect MTProto. It's not so signature-impenetrable after all."
                </Word>
            </Paragraph>
            <Paragraph>
                This is bol-van <Word>
                    <Emphasis />
                    reversing
                </Word> his earlier position. He's now saying that Russia's TSPU/DPI infrastructure has apparently found a
                way to fingerprint MTProto connections — at least enough to selectively throttle media transfers while
                leaving text messages working. This aligns exactly with what we're seeing in the Feb 9-10 blocking: text
                works, media is throttled to 128 Kbps.
            </Paragraph>
            <Paragraph>
                His suggestion to "try with any protocol" means using zapret's <Word>
                    <Verbatim />
                    --dpi-desync-any-protocol
                </Word> flag to apply DPI-desync techniques to the MTProto handshake, not just TLS/HTTP — basically trying
                to corrupt the initial packets enough that the TSPU can't fingerprint them as MTProto.
            </Paragraph>
            <Heading>3. The zapret/zapret2 split and the limitations</Heading>
            <Paragraph>
                bol-van has put zapret (original) into <Word>
                    <Bold />
                    EOL mode
                </Word> — no new features, only bugfixes. He's been developing <Word>
                    <Bold />
                    zapret2
                </Word> as the successor, with a "What's new" announcement thread started November 22, 2025. The zapret2
                discussions page shows active development as recently as Feb 8, 2026, with discussions about strategy
                generators and working strategies for specific Russian ISPs (MTS Novosibirsk, etc.).
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Bold />
                    Feb 10, 2026
                </Word> discussion on the original zapret repo (Discussion by deadkill123qw-jpg) is brand new — posted today
                — likely related to the Telegram throttling rollout. The Feb 8 discussion by Hannabiann is also recent,
                suggesting the community is actively responding to the escalation.
            </Paragraph>
            <Heading>4. On voice calls via Telegram (Discussion #1668)</Heading>
            <Paragraph>
                bol-van's community discussed Telegram call throttling, with the observation that calls use TCP for
                signaling + UDP for actual voice data. A community member noted: <Word>
                    <Bold />
                    "zapret can't help here because the software intervenes at the connection establishment stage. With UDP, the connection is already established."
                </Word>
            </Paragraph>
            <Paragraph>
                bol-van then responded with a technical approach — providing specific <Word>
                    <Verbatim />
                    nfqws
                </Word> filter rules targeting UDP ports 590-1400 (Telegram's voice range) with <Word>
                    <Verbatim />
                    --dpi-desync=fake
                </Word> and <Word>
                    <Verbatim />
                    --filter-l7=stun
                </Word> detection, plus random binary fake patterns. He added sardonically:
            </Paragraph>
            <Paragraph>
                <Quoted />
                <Word>
                    <Bold />
                    "Looks like typical Russian business. Advertise high quality calls while ruining competitors' connections — a quintessentially Russian approach."
                </Word>
            </Paragraph>
            <Paragraph>
                Then, with characteristic dark humor about the random binary patterns being generated from <Word>
                    <Verbatim />
                    /dev/random
                </Word>: <Word>
                    <Bold />
                    "ALL THE BEST FROM /DEV/RANDOM, RKN!"
                </Word>
            </Paragraph>
            <Heading>5. The ntc.party connection</Heading>
            <Paragraph>
                bol-van cross-posts his development blog from ntc.party (a Russian censorship-circumvention forum). He noted
                in Discussion #1716: <Word>
                    <Emphasis />
                    "At the time of writing, ntc.party is accessible only via IPv6"
                </Word> — meaning even the censorship-circumvention discussion forum is itself being throttled/blocked and
                accessible only through workarounds.
            </Paragraph>
            <Heading>What This Means Technically</Heading>
            <Paragraph>The picture bol-van is painting across these discussions:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 1 (2024):
                </Word> IP-level blocking in southern Russia. MTProto is "signature-undetectable" so they can only block by
                IP ranges. Zapret can't help — only VPN or MTProto proxies.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 2 (June 2025):
                </Word> The 16KB curtain drops. Russia limits ALL foreign TCP connections to 16KB per connection, affecting
                Cloudflare, Hetzner, DigitalOcean, OVH. This is the brute-force approach — not protocol-specific.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 3 (Nov 2025-Feb 2026):
                </Word> Russia apparently develops MTProto fingerprinting capability. They can now selectively throttle
                media within MTProto while leaving text messages working. bol-van acknowledges this is happening and
                suggests it means MTProto <Word>
                    <Emphasis />
                    isn't
                </Word> as signature-resistant as originally believed. The throttling targets the data transfer phase (after
                ~200-500KB), not the initial handshake.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Phase 4 (Feb 9-10, 2026):
                </Word> Nationwide rollout. Roskomnadzor officially confirms "phased restrictions." This is where we are
                right now.
            </Paragraph>
            <Heading>For Your Thesis</Heading>
            <Paragraph>
                bol-van's technical analysis is particularly relevant because he's essentially saying the same thing from
                the <Word>
                    <Emphasis />
                    attacker's
                </Word> perspective that your thesis argues from the <Word>
                    <Emphasis />
                    defender's
                </Word>. His observation that MTProto was designed to be "signature-undetectable" speaks to the
                sophistication of the protocol design — the kind of thing that would come from someone who deeply
                understands cryptographic protocol design (consistent with your Nikolai Durov attribution hypothesis).
            </Paragraph>
            <Paragraph>
                The fact that Russia has now apparently cracked MTProto fingerprinting enough for selective throttling is
                the next move in the chess game. The question for your thesis is whether Telegram/TON's architecture can
                adapt — and the historical pattern (2018 block failed, lifted 2020) suggests the answer has historically
                been yes.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T23:03:26.385820Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So what exactly is the problem and what is the fix in general? Can you respond with just one paragraph
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T23:03:40.590996Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Russia's TSPU deep packet inspection hardware has learned to fingerprint MTProto traffic — not by decrypting
                it, but by recognizing its handshake patterns and connection behavior — allowing Roskomnadzor to selectively
                throttle media transfers (photos, videos, voice notes) after ~200-500KB while leaving text messages
                functional, and this is layered on top of the broader 16KB-per-TCP-connection cap applied to all foreign
                server connections since June 2025. The fix, as bol-van and the broader circumvention community see it, is
                twofold: for the MTProto fingerprinting specifically, you need to corrupt the initial handshake packets
                using DPI-desync techniques (fake packets, sequence overlap, bad checksums) applied with <Word>
                    <Verbatim />
                    --dpi-desync-any-protocol
                </Word> so the TSPU can't identify the traffic as MTProto before throttling kicks in; for the broader
                IP-level and 16KB-cap blocking, there's no DPI bypass possible — you need either MTProto proxies (which
                relay through unblocked intermediary servers), SOCKS5 proxies, or full VPN tunneling through obfuscated
                protocols like Xray/VLESS+Reality with XHTTP transport that fragments responses across multiple TCP
                connections to stay under the per-connection data cap, essentially the same arms race China's GFW has been
                fighting for years.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T23:06:24.199238Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Sounds like bad news for telegram</Paragraph>
        </Message>
        <Message
            at="2026-02-10T23:06:41.134869Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes and no. The technical situation is dire for <Word>
                    <Emphasis />
                    unassisted
                </Word> Telegram usage inside Russia — no question. But zoom out and look at the structural picture:
            </Paragraph>
            <Paragraph>
                Russia tried this exact playbook in 2018-2020 and <Word>
                    <Emphasis />
                    lost
                </Word>. They blocked Telegram's IP ranges, ended up collateral-damaging half the Russian internet (banks,
                government services, gaming), and eventually surrendered and lifted the ban. This time they're being more
                surgical with throttling instead of hard blocking, but the core problem is the same — 93.6 million Russian
                monthly users, the entire military blogosphere runs on it, frontline communications depend on it, and even
                the Kremlin's own channels are on Telegram. The pro-war bloggers are already screaming about it.
            </Paragraph>
            <Paragraph>
                The real signal for your thesis is what Durov said: they're trying to force migration to Max, a state
                surveillance app with 70 million users and no encryption. That's the tell. This isn't about "fighting crime"
                — it's about control. And that's exactly the scenario where TON's decentralized infrastructure becomes
                existential rather than speculative. If Telegram can't be accessed normally, MTProto proxies running on
                decentralized nodes, payments flowing through TON instead of sanctioned Russian banks, identity verification
                outside state systems — all of that shifts from "nice to have" to "only option."
            </Paragraph>
            <Paragraph>
                The worse Russia makes it for Telegram through centralized infrastructure, the stronger the case for
                decentralized infrastructure becomes. That's the whole thesis.
            </Paragraph>
        </Message>
    </Chapter>
);
