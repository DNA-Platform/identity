import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[17 April 2026](2026-04-17)</Date>
        </Dated>
        <Title>[[ 17 April 2026 ]]</Title>
        <Message
            at="2026-04-17T09:22:51.429276Z"
        >
            <Origin>019d9ac0-caec-70bb-98fa-e661c7467b9d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Here’s an article from Medusa English:</Paragraph>
            <Paragraph>Report: Telegram works without a VPN for some users in Russia, but reason is unknown</Paragraph>
            <Paragraph>3:12 am, April 17, 2026 Source: iStories</Paragraph>
            <Paragraph>
                Telegram users in Russia began reporting on the evening of April 16 that the blocked messenger had been
                working without a VPN for several hours, writing in channel comment sections and group chats, the
                independent Russian investigative outlet iStories reported. The reason is unknown.
            </Paragraph>
            <Paragraph>
                Among those who noted this was Ksenia Boletskaya, Yandex’s director of industry relations, who wrote:
                “Strange, but Telegram is working for me right now without a VPN — it’s even loading video.”
            </Paragraph>
            <Paragraph>
                The Telegram channel Bbbreaking reported, citing its subscribers, that Telegram had started working for them
                without a proxy or VPN connection.
            </Paragraph>
            <Paragraph>
                Telegram was working without a VPN or proxy for 6 percent of users, a Meduza poll showed, while more than 60
                percent of respondents said the messenger was working only with a VPN or proxy.
            </Paragraph>
            <Paragraph>
                The international research project OONI recorded that on April 16, the messenger was accessible in 11
                percent of cases, comparable to figures from the previous four days.
            </Paragraph>
            <Paragraph>
                Roskomnadzor blocked Telegram in Russia in March. Before that, the agency had spent several months
                restricting access to Russia’s most popular messenger. Against that backdrop, the authorities stepped up
                their crackdown on VPNs.
            </Paragraph>
            <Paragraph>—-</Paragraph>
            <Paragraph>
                Can you find anything about what telegram has done to potentially get around the extreme tactics that
                roskomnadzor has used like wire packet sniffing? Has bol-van said anything on github? How about any people
                in charge of the major VPN like browsec? Has Telegram said that they’ve made any changes suddenly? Anything
                on the TON foundation github pages? I was especially surprised to hear that video worked for some users.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-17T09:24:46.012405Z"
        >
            <Origin>019d9ac0-caec-7b8d-ac17-6eb825877ef8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Telegram Russia working without VPN April 16 2026 technical reason”</Action>
            <Action>Searched the web for “bol-van zapret github Telegram Russia April 2026 TSPU bypass”</Action>
            <Action>Searched the web for “Telegram new IP ranges Russia April 2026 Cloudflare routing change”</Action>
            <Action>Searched the web for “ntc.party Telegram April 16 2026 Russia access restored”</Action>
            <Action>
                Searched the web for “Durov Telegram protocol update anti-censorship April 2026 MTProto technical details”
            </Action>
            <Action>
                Searched the web for “"April 16" OR "April 17" 2026 Telegram Russia TSPU Roskomnadzor failure outage”
            </Action>
            <Action>Searched the web for “iStories Telegram April 16 Russia VPN working video loading”</Action>
            <Action>Searched the web for “OONI Telegram Russia accessibility April 2026 data TSPU”</Action>
            <Action>Searched the web for “TON blockchain proxy storage Telegram censorship circumvention 2026”</Action>
            <Paragraph>
                No clear single cause has surfaced yet — the honest answer from the circumvention community and the
                monitoring projects is that this looks more like a localized TSPU artifact than a breakthrough. But there
                are several threads worth pulling on, in rough order of what I think is likely.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What Telegram has done recently
                </Word>
            </Paragraph>
            <Paragraph>
                Durov announced on April 11 that Telegram upgraded its anti-censorship protocol and urged Russian users to
                update immediately. In his announcement, Durov urged all Russian users to update their apps immediately to
                maintain a stable connection. The surge in blocking triggered an immediate response from Telegram's
                engineering team, which deployed the upgraded anti-censorship protocol within a day of the blackout. No
                technical details were published. Reading between the lines (and from an open iOS client issue filed April
                4), Pavel Durov stated that tens of millions of users continue using Telegram through VPNs, and that
                Telegram will keep adapting its traffic to make it harder to block. However, adapting TLS fingerprints alone
                is not enough. So the upgrade is almost certainly TLS-fingerprint randomization / obfuscated MTProto-layer
                tweaks, not a routing or infrastructure change. This is consistent with the partial, patchy, ~6–11%
                accessibility pattern — a fingerprint that doesn't match the current TSPU signature only helps until TSPU is
                retuned.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The bol-van / zapret picture is unambiguous and cuts against easy optimism
                </Word>
            </Paragraph>
            <Paragraph>
                Active discussions on zapret2 over the last week are flatly pessimistic. The refrain from the maintainers
                and knowledgeable contributors: Telegram is now being blocked primarily <Word>
                    <Bold />
                    by IP range
                </Word>, not by DPI signature, so DPI desync (zapret's core trick) does nothing. The advice in the April
                threads is "use VPN or proxy." One contributor specifically notes that when there's no proxy, Telegram runs
                MTProto over TCP straight to Telegram's own /22 subnets (91.108.x, 149.154.160/20, etc.) — and those subnets
                are what's being null-routed at TSPU. bol-van himself hasn't posted a victory lap; the February 10 "Zapret
                telegram" thread where users complained about media not loading was answered with "L2 speed shaping, zapret
                won't help."
            </Paragraph>
            <Paragraph>So zapret-style DPI fooling is not what let Boletskaya load video.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The most likely explanation — TSPU is not monolithic
                </Word>
            </Paragraph>
            <Paragraph>
                The Russian cyber lawyer Sarkis Darbinyan gave the clearest technical framing I've seen. When Telegram
                "improves," "Telegram runs on its own MTProto protocol, which the authorities have learned to detect quite
                successfully. Once its traffic is identified by signature, the TSPU system begins dropping every second or
                third data packet, which is felt as slowing and the inability to use some functions. In this context,
                accessibility means that TSPU is letting through somewhat more incoming and outgoing messenger packets."
            </Paragraph>
            <Paragraph>Two specific reasons TSPU would suddenly pass more packets:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Capacity saturation.
                    </Word> Zona.media reported a telecoms source saying current TSPU infrastructure does not always cope
                    with the volume of traffic, meaning that blocked resources can occasionally become accessible. Evening
                    hours on a Thursday would be exactly when this pressure peaks.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Providers routing around TSPU.
                    </Word> Mediazona discovered in March that magistrates' courts in Moscow and St Petersburg had started
                    handing down convictions against internet providers for allowing traffic to bypass TSPU — meaning some
                    ISPs actively do this. A provider that briefly lets a customer segment's traffic skip TSPU will present
                    exactly as "Telegram works without VPN, video loads," because media throttling is applied at TSPU. The
                    6% figure from Meduza's poll and the 11% from OONI are consistent with a subset of ASes / provider
                    segments, not a nationwide change.
                </Line>
            </Paragraph>
            <Paragraph>
                That your contact Boletskaya could load video is the most telling detail. Video inside MTProto is the packet
                class TSPU targets most aggressively — if video works, her traffic almost certainly isn't passing TSPU at
                that moment, or TSPU isn't matching her session to the MTProto signature. Either way, this is an
                infrastructure-side effect, not a Telegram-side one.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    VPN providers
                </Word>
            </Paragraph>
            <Paragraph>
                Nothing from Browsec specifically in the last 24 hours that I can find. The broader VPN-provider picture
                from the last week is defensive: Amnezia, Windscribe, and NymVPN have told TechRadar their products still
                work but are actively issuing new configs; Cloudflare WARP has been blocked in Russia since the March
                Cloudflare-subnet sweep; the April 15 deadline for the 20+ major Russian platforms to curb VPN users just
                hit, so the ecosystem is focused on VPN survival, not on narrating what happened to Telegram packets.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TON Foundation GitHub / TON Proxy
                </Word>
            </Paragraph>
            <Paragraph>
                No evidence TON Proxy or TON Sites are involved in any of this. Those remain architectural features —
                Telegram's censorship-circumvention updates are happening in the messenger client itself (MTProto transport
                layer), not through TON's decentralized proxy mesh. If TON Proxy were ever switched on as the default
                client-side transport in hostile regions, that would be a genuinely different event from what we're seeing.
                I'd watch for it — it would be the strongest possible validation of your "steward-architect" thesis — but
                April 16 doesn't look like that moment. It looks like a ~6% TSPU hiccup that Meduza wrote up because
                Boletskaya commented.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One thing worth monitoring over the next 48 hours
                </Word>
            </Paragraph>
            <Paragraph>
                If OONI's number stays in the 6–11% band but media-loading reports persist, that's a capacity/routing
                artifact. If the number climbs meaningfully and correlates with users on the latest app version, then the
                April 11 protocol update may actually be doing something on the DPI-signature side — in which case expect
                TSPU to retune within a week and close the gap again, as happened with VLESS in late 2025.
            </Paragraph>
        </Message>
    </Chapter>
);
