import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 August 2026](2026-08-11)</Date>
        </Dated>
        <Title>[[ 11 August 2026 ]]</Title>
        <Message
            at="2026-08-11T12:48:36.674360Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Lookup all news related to this rollout:
                https://coinmarketcap.com/community/articles/6a5fade44415077d12a4e33f/
            </Paragraph>
            <Paragraph>
                What’s the app integration going to be like? What might I not have heard yet? When will it hqppen? I’ll take
                speculqtion from informed analysts. Search in other languages if it might help
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T12:49:27.966826Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Fetched https://coinmarketcap.com/community/articles/6a5fade44415077d12a4e33f/</Action>
            <Action>
                Searched the web for “Gram Wallet MyTonWallet Zinchuk native Telegram integration details stages”
            </Action>
            <Action>
                Searched the web for “MyTonWallet @push chat-native transfers Telegram gifts non-custodial architecture”
            </Action>
            <Action>Searched the web for “Gram Wallet Telegram нативный кошелек интеграция когда запуск”</Action>
            <Paragraph>
                The article you linked is Yellow News' recap of the July 21 announcement; the more interesting material is
                in what MyTonWallet has published and what the Russian-language coverage adds. Here's the assembled picture,
                including a few things I suspect you haven't seen.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What the wallet actually is.
                </Word> Gram Wallet is a self-custodial wallet built on the MyTonWallet engine with exclusive
                Telegram-native features — notably Telegram 2FA, where you connect your Telegram account to confirm
                transfers and swaps right inside the messenger. The staging is clearer now: wallet.ton.org was updated with
                the Gram Wallet web service, and back in June the developers released a standalone Gram Wallet mobile app,
                which is meant to be the extended version of the wallet that gets embedded into Telegram itself. So the
                native integration already exists as a product — it's being field-tested as an app before being folded into
                the client. The Play Store listing says "created in collaboration with Telegram" and shows scope beyond the
                pure-TON framing: TON and Telegram at the center, but also Ethereum, Solana, TRON, BNB Chain, Base, Polygon,
                Arbitrum, Monad, Avalanche, and Hyperliquid — with .t.me domain linking so the wallet becomes an extension
                of your Telegram identity. (Monad support in the wallet you're waiting for, while you're trying to exit MON
                — noted.) The standalone app also ships with a built-in AI agent, which connects to the Mira/agent-payments
                thread.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The integration mechanics — this is the part you likely haven't seen.
                </Word> MyTonWallet already built and documented the chat-native transfer layer, called @push, and it reads
                like the blueprint for exactly the Venmo-in-chat mechanic you defined as the launch test. The architecture:
                non-custodial chat-native transfers where the sender signs and funds a check on-chain, and the recipient
                proves identity with a Telegram Ed25519 signature and claims the transfer without paying gas — all signing
                on the client, the backend only orchestrating messages. Two design choices matter enormously at billion-user
                scale: identity verification uses Telegram's own signatures in smart contracts, eliminating the need for a
                blockchain address before receiving funds, and gasless claiming works through prepaid gas stored in the
                contract. And if the recipient doesn't have a wallet yet, funds sit safely in a smart contract until they're
                ready to claim. That solves the cold-start problem you identified — you can send Gram to any Telegram user
                <Word>
                    <Emphasis />
                    today
                </Word>, wallet or not, from inside the chat, with fiat-denominated amounts auto-converted. The "zero-fee"
                promise Pavel made, which coverage keeps flagging as unexplained, is almost certainly this: sender-side or
                sponsor-side prepaid gas making receipt free. Native integration then means promoting this from an inline
                bot to a button in the attachment menu.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Timing.
                </Word> No date beyond "this summer" anywhere, in any language. No launch date, no country list, no
                supported-asset list published, and no detail on how it interacts with jurisdictions with hard crypto
                regulation. Northern-hemisphere summer runs to ~September 22, and the staged sequence (web live, standalone
                app live, native embed pending) suggests the remaining step is a Telegram client update — which also has to
                clear Apple review, tying back to your App Store read. My honest speculation: it ships as a client update in
                the next 4–8 weeks, possibly gated by jurisdiction at launch, and plausibly <Word>
                    <Emphasis />
                    as
                </Word> an MTONGA step announcement on Pavel's channel.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The open structural question analysts keep circling:
                </Word> TOP's existing Wallet contains both a custodial Crypto Wallet and a non-custodial DeFi Account, and
                it can't yet be determined whether Gram Wallet is a separate product or a deeper integration of that DeFi
                Account — though the MyTonWallet engine choice suggests separate build, with TOP's CEO Rogozov saying the
                two wallets will coexist for different audiences. Your prediction — TOP's DeFi wallet bridging easily to the
                native one — is consistent with everyone's positioning; TOP keeps the full-service custodial/DeFi surface,
                Telegram itself owns the default non-custodial rail.
            </Paragraph>
            <Paragraph>
                One more thing worth logging: the choice of Zinchuk/MyTonWallet as the engine, over TOP building it, is
                itself information. Pavel picked the ecosystem's independent open-source wallet builder and put
                "collaboration with Telegram" on the label — keeping the native wallet outside TOP's corporate perimeter,
                consistent with the federated-structure pattern where the pieces that matter most are held closest and least
                formally.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T13:59:57.480557Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Surprised that its outside TOP, but if native, won’t top wallet be able to interact with it? Probably, I
                wpuld guess its part of the sdk. Have analysts commented on timing?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T14:00:28.319928Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Gram Wallet TON Connect integration developers SDK mini apps”</Action>
            <Action>
                Searched the web for “Gram Wallet launch timing analysts prediction September Telegram update when”
            </Action>
            <Paragraph>
                On interop — yes, and your SDK guess is essentially the documented architecture. The connective tissue is
                TON Connect, the protocol that connects any TON wallet to web apps and Mini Apps, with a public wallet
                registry every wallet joins; alongside it sit WalletKit, an open-source SDK for both custodial and
                non-custodial wallet services integrating with TON, and the TON Pay SDK for merchant payments in Mini Apps,
                bots, and web apps, compatible with TON wallets through TON Connect. Everything already speaks the same
                protocol: Tonkeeper, TOP's DeFi Account, MyTonWallet, and the standalone Gram Wallet all register in the
                same TON Connect list, and @push explicitly works with any TON wallet. So TOP's wallet interacting with the
                native one isn't a feature anyone needs to build — it's the default state of the ecosystem. The interesting
                question is the reverse direction: whether the native wallet becomes the <Word>
                    <Emphasis />
                    default TON Connect responder
                </Word> inside Telegram — i.e., when a Mini App requests a wallet connection, the embedded Gram Wallet
                answers first. That would be the quiet, decisive move: every mini-app payment flow silently defaulting to
                the native rail, with TOP, Tonkeeper, and the rest becoming power-user options. Nothing published confirms
                that behavior yet, but it's the obvious endpoint of default placement.
            </Paragraph>
            <Paragraph>
                On timing — no analyst has a date, and the honest summary is that nobody outside Telegram knows. The
                published constraint is Durov's own: integration into every version of the app before the end of summer
                2026, with no exact date, country list, or supported-asset roster beyond GRAM disclosed, and analysts
                explicitly flagging that the rally runs on expectation rather than confirmed implementation. The open
                variables analysts are watching: global vs. staged jurisdiction rollout, whether identity verification gates
                some functions, and key-recovery mechanics for non-technical users. Two data points sharpen the inference,
                though. First, the precedent: Telegram already ran a non-custodial TON Wallet rollout to 87 million US users
                in July 2025 — so the jurisdictional playbook and the Apple-review path have been exercised once before at
                smaller scale. Second, the deadline geometry: "before end of summer" means by ~September 22, Telegram ships
                client updates roughly monthly, and there are two update windows left. Pavel's channel goes quiet before
                feature drops, not before slips — and he doesn't publicly stake "largest in human history" language against
                a season and then miss the season. My read stays: a client update in the next 4–8 weeks, announced on his
                channel, very plausibly numbered as an MTONGA step — which would make your Step 5 test and the deployment
                event the same observation.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T14:03:25.942980Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right but ypu said there was a separate app and perhaps there are business concerns to time around. No
                analyst has put together a synthesis that might predict when and why to see this happen at a particular time
                or to see it happen pegged to other events so that I can have some sense.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T14:04:00.883524Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Fair — nobody's published that synthesis, so let me build it from the pieces on the table.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The staging logic.
                </Word> The sequence they've actually run — web wallet at wallet.ton.org, then the standalone app in June,
                then the announcement in July — is a canary deployment. The standalone app exists to generate the data you
                cannot get any other way before flipping a billion-user switch: seed-phrase loss rates, support ticket load,
                swap/bridge failure modes, 2FA friction, and Apple's tolerance of the exact feature set <Word>
                    <Emphasis />
                    as a reviewed iOS app
                </Word>. That last one is the quiet masterstroke: the standalone Gram Wallet already passed App Store
                review. Apple has now approved this precise wallet, from this developer, with the "collaboration with
                Telegram" label on it. When the native embed ships, Apple can't claim surprise at the functionality — the
                compliance surface was pre-cleared in a low-stakes wrapper. So the gating condition isn't engineering; the
                engineering demonstrably exists. The gates are (a) enough weeks of standalone telemetry to trust the
                recovery/support model at scale, and (b) a clean stretch with Apple after August 4. Both point to the same
                thing: the standalone app needed roughly a quarter of seasoning, which lands you in late August–September.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The forcing function.
                </Word> Pavel publicly staked "this summer" — a self-imposed deadline of ~September 22 that he chose to
                announce <Word>
                    <Emphasis />
                    after
                </Word> the app was already live, meaning he set the clock knowing exactly how much runway the canary
                needed. He doesn't set public deadlines he plans to miss; the announcement timing itself is evidence the
                internal date was already fixed. Note also the precise wording — the rollout "begins" this summer, in two
                stages. That gives him a compliant out: ship native to a first jurisdiction tranche (the 2025 US test of 87M
                users is the rehearsed playbook) inside the deadline, expand after.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The pegs.
                </Word> Three converge on the first half of September. MTONGA's step cadence has run roughly monthly —
                takeover May, rebrand June, wallet announcement July, and August so far consumed by the Russia response — so
                the next numbered step is due, and the wallet <Word>
                    <Emphasis />
                    is
                </Word> the obvious Step 5. Telegram's client updates historically land near month-end. And the crypto
                calendar's biggest stage, TOKEN2049 Singapore, sits October 1–2 — the single best venue to declare "the
                largest wallet rollout in human history" as an accomplished fact rather than a promise, which argues for
                shipping just <Word>
                    <Emphasis />
                    before
                </Word> it, not at it. Against launching earlier: the Believers Fund's monthly unlocks mean every month has
                supply flow to absorb, so there's no clean supply window to wait for — that peg washes out.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Russia peg cuts the other way than you might expect.
                </Word> If your read is right that the designation was a pre-emptive strike against the wallet, then delay
                rewards the strike. Pavel's entire pattern — 2018 ICO, 2020 SEC, 2024 arrest — is to answer state pressure
                with shipped product. Rosfinmonitoring makes launching <Word>
                    <Emphasis />
                    sooner
                </Word> more in-character, not less.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The synthesis as a prediction:
                </Word> native rollout begins with a client update in the window <Word>
                    <Bold />
                    August 28 – September 22
                </Word>, most likely the first two weeks of September; announced on Pavel's channel, plausibly
                step-numbered; jurisdiction-tranched at launch with the US playbook re-run; victory-lapped at TOKEN2049 four
                weeks later. The tell that it's imminent: watch for the Telegram beta channels (iOS TestFlight, Android beta
                APK) — wallet code appears there one to three weeks before stable release, and beta-watcher accounts on
                Telegram/X strip every client beta within hours. That's your leading indicator, ahead of any announcement.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T14:04:46.092480Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, but since this app has been released, can’t we review progress on the app and how close it is to
                production to take a guess about when it might get integrated into Telegram proper
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T14:07:52.695056Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Gram Wallet app update version review App Store August 2026”</Action>
            <Action>Searched the web for “"Gram Wallet" отзывы приложение обновление август баги”</Action>
            <Action>
                Ran curl -s "https://api.github.com/search/repositories?q=gram+wallet+in:name&amp;per_page=10" | python3 -c
                " import json,sys d=json.load(sys.stdin) for r in d.get('items',&#91;&#93;): print(r&#91;'full_name'&#93;,
                '|', r.get('description','')&#91;:80&#93;, '| updated:', r&#91;'updated_at'&#93;, '| stars:',
                r&#91;'stargazers_count'&#93;) "
            </Action>
            <Action>
                Ran curl -s "https://api.github.com/orgs/mytonwallet/repos?per_page=30&amp;sort=pushed" | python3 -c "
                import json,sys d=json.load(sys.stdin) if isinstance(d,dict): print(d); sys.exit() for r in d:
                print(r&#91;'full_name'&#93;, '| pushed:', r&#91;'pushed_at'&#93;, '| stars:',
                r&#91;'stargazers_count'&#93;, '|', (r.get('description') or '')&#91;:70&#93;) "
            </Action>
            <Action>
                Ran sleep 20; curl -s "https://api.github.com/orgs/mytonwalletorg/repos?per_page=30&amp;sort=pushed" |
                python3 -c " import json,sys d=json.load(sys.stdin) if isinstance(d,dict): print('MSG:',d.get('message'));
                sys.exit() for r in d: print(r&#91;'full_name'&#93;, '| pushed:', r&#91;'pushed_at'&#93;, '| stars:',
                r&#91;'stargazers_count'&#93;, '|', (r.get('description') or '')&#91;:70&#93;) "
            </Action>
            <Action>
                Ran sleep 60; curl -s "https://api.github.com/repos/mytonwalletorg/mytonwallet" | python3 -c " import
                json,sys d=json.load(sys.stdin) print('MSG:' , d.get('message')) if 'full_name' in d:
                print(d&#91;'full_name'&#93;, '| pushed:', d&#91;'pushed_at'&#93;, '| stars:',
                d&#91;'stargazers_count'&#93;) print('desc:', d.get('description')) "
            </Action>
            <Action>
                Ran curl -s "https://github.com/mytonwalletorg/mytonwallet/releases" -H "User-Agent: Mozilla/5.0" | grep -oE
                '(Link--primary&#91;^&gt;&#93;*&gt;&#91;^&lt;&#93;+|datetime="&#91;^"&#93;+")' | head -40
            </Action>
            <Action>
                Ran curl -sL "https://github.com/mytonwalletorg/mytonwallet/releases.atom" -H "User-Agent: Mozilla/5.0" |
                grep -E "&lt;title&gt;|&lt;updated&gt;" | head -30
            </Action>
            <Action>
                Ran curl -sL "https://github.com/mytonwalletorg/mytonwallet/commits/master.atom" -H "User-Agent:
                Mozilla/5.0" | grep -E "&lt;title&gt;|&lt;updated&gt;" | head -50
            </Action>
            <Action>
                Ran curl -sL "https://github.com/mytonwalletorg/mytonwallet/releases.atom" -H "User-Agent: Mozilla/5.0" &gt;
                /home/claude/rel.xml python3 - &lt;&lt; 'EOF' import re t=open('/home/claude/rel.xml').read()
                entries=re.findall(r'&lt;entry&gt;.*?&lt;/entry&gt;', t, re.S) for e in entries&#91;:6&#93;:
                title=re.search(r'&lt;title&gt;(.*?)&lt;/title&gt;', e).group(1)
                upd=re.search(r'&lt;updated&gt;(.*?)&lt;/updated&gt;', e).group(1)
                content=re.search(r'&lt;content.*?&gt;(.*?)&lt;/content&gt;', e, re.S)
                body=re.sub(r'&amp;lt;&#91;^&amp;&#93;*&amp;gt;','',content.group(1))&#91;:600&#93; if content else ''
                print('===', title, upd) print(body.replace('&amp;amp;','&amp;')) print() EOF
            </Action>
            <Action>
                Ran curl -sL "https://github.com/TelegramMessenger/Telegram-iOS/commits/master.atom" -H "User-Agent:
                Mozilla/5.0" &gt; /home/claude/tg.xml python3 - &lt;&lt; 'EOF' import re
                t=open('/home/claude/tg.xml').read() entries=re.findall(r'&lt;entry&gt;.*?&lt;/entry&gt;', t, re.S)
                print(len(entries),'entries') for e in entries&#91;:20&#93;:
                upd=re.search(r'&lt;updated&gt;(.*?)&lt;/updated&gt;', e).group(1)
                title=re.search(r'&lt;title&gt;\s*(.*?)\s*&lt;/title&gt;', e, re.S) print(upd, '|', (title.group(1) if title
                else '')&#91;:80&#93;) EOF
            </Action>
            <Paragraph>
                Now we have the actual engineering telemetry. I pulled the release and commit history from the MyTonWallet
                repo (the open-source engine under Gram Wallet) and the Telegram-iOS repo. It tells a fairly legible story.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The version-scheme flip is the fork point.
                </Word> The engine ran classic semver through v4.10.9 on June 17 — then switched to calendar versioning:
                26.6.0 on June 20, right at the June 15 Gram rebrand. That's a re-productization signal: the codebase
                stopped being "MyTonWallet v4.x" and became the 2026-era Gram engine.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The July cadence reads as a hardening sprint against a deadline.
                </Word> Releases: 26.7.0 (Jul 7), 26.7.1 (Jul 15), 26.7.2 (Jul 17), 26.7.3 (Jul 22), 26.7.4 (Jul 23), 26.7.5
                (Jul 24). Note the shape: Pavel announces July 21, and the team ships three releases in three consecutive
                days immediately after. That's exactly what a codebase looks like when the announcement just made it
                load-bearing — rapid small patches converging, not feature churn. Then: <Word>
                    <Bold />
                    release silence since July 24, while commits continue
                </Word> (activity on Aug 8, 9, 10). Public patches stopped; work didn't. The standard read of that pattern
                is that development moved to branches that don't publish — which is what a private Telegram-client
                integration branch would look like. The Gram Wallet app itself ships under "Anyway Labs FZCO" (Dubai) — a
                separate corporate shell from both Telegram and TOP, so the integration code was never going to be in the
                public engine repo anyway.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Telegram-iOS side confirms by absence.
                </Word> Telegram publishes client source in batches <Word>
                    <Emphasis />
                    after
                </Word> releases; the public repo's last drop is July 17 and contains zero wallet code — all rich-text
                editor work. So the wallet integration, if in progress, is exactly where it should be: invisible until it
                ships. The repo's 3.5-week staleness also means a client release is due on ordinary cadence.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Maturity assessment:
                </Word> the engine is not "getting ready" — it's done. It carries years of MyTonWallet production history,
                the standalone app has been live since June, and the patch series converged to quiet by late July, which is
                the signature of stabilization, not struggle. There's no visible engineering blocker between here and
                integration; the remaining work is client-side UI embedding plus whatever jurisdiction gating they choose.
                That's consistent with — and slightly tightens — the earlier estimate: the engine froze late July,
                integration work went dark in August, and the natural surfacing point is the next Telegram client release.
                <Word>
                    <Bold />
                    Late August to mid-September
                </Word>, with the Telegram beta channels as the early tell. If you want a concrete tripwire: the day
                wallet-related code appears in a Telegram iOS/Android beta, you're one to three weeks from stable rollout.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T20:55:18.078630Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but you say its done but don't know why it isn't released. How do you know its done then? Or might you
                be able to find other related factors that might help us comprehend the exact release date?
            </Paragraph>
        </Message>
        <Message
            at="2026-08-11T20:56:31.461937Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You're right — "done" was an inference from one signal (patch convergence), and that pattern is also
                consistent with a team on holiday or a pivot. What I actually know: the engine stopped needing public fixes
                and the app shipped. What I don't: whether integration is blocked on something invisible. Let me hunt for
                harder evidence — beta trackers, the app's own update history, and anything from the people involved.
            </Paragraph>
            <Action>Searched the web for “Telegram beta wallet feature spotted APK August 2026”</Action>
            <Action>Fetched https://t.me/s/tgbeta</Action>
            <Action>Searched the web for “Telegram 12.9 beta features wallet Gram новые функции”</Action>
            <Action>
                Ran curl -sL "https://github.com/DrKLO/Telegram/commits/master.atom" -H "User-Agent: Mozilla/5.0" | grep -E
                "&lt;updated&gt;" | head -8 echo "---" # search Telegram Android repo for gram wallet references via code
                search UI is auth-gated; try raw strings file curl -sL
                "https://raw.githubusercontent.com/DrKLO/Telegram/master/TMessagesProj/src/main/res/values/strings.xml" -H
                "User-Agent: Mozilla/5.0" | grep -iE "gram wallet|GramWallet|non-custodial|noncustodial" | head -10 echo
                "--- total wallet mentions:" curl -sL
                "https://raw.githubusercontent.com/DrKLO/Telegram/master/TMessagesProj/src/main/res/values/strings.xml" -H
                "User-Agent: Mozilla/5.0" | grep -icE "wallet"
            </Action>
            <Action>
                Ran curl -sL
                "https://raw.githubusercontent.com/DrKLO/Telegram/master/TMessagesProj/src/main/res/values/strings.xml" -H
                "User-Agent: Mozilla/5.0" | grep -iE "wallet" echo "===" # What did the Aug 2 commit batch contain? get
                commit titles curl -sL "https://github.com/DrKLO/Telegram/commits/master.atom" -H "User-Agent: Mozilla/5.0"
                &gt; /home/claude/tga.xml python3 - &lt;&lt; 'EOF' import re t=open('/home/claude/tga.xml').read()
                entries=re.findall(r'&lt;entry&gt;.*?&lt;/entry&gt;', t, re.S) for e in entries&#91;:12&#93;:
                upd=re.search(r'&lt;updated&gt;(.*?)&lt;/updated&gt;', e).group(1)
                ti=re.search(r'&lt;title&gt;\s*(.*?)\s*&lt;/title&gt;', e, re.S) print(upd,'|',(ti.group(1) if ti else
                '')&#91;:90&#93;) EOF
            </Action>
            <Paragraph>
                Now I can answer your challenge properly — and correct myself, because I just found the decisive negative
                evidence. I pulled the official Telegram Android source (Telegram publishes client code at each release; the
                repo is current to <Word>
                    <Bold />
                    v12.9.2, pushed August 2
                </Word>) and grepped it for wallet code. Result: exactly two wallet-related strings in the entire client,
                both legacy — a "wallet address copied" toast and the Fragment gift-export text. <Word>
                    <Bold />
                    Zero Gram Wallet code exists in any shipped Telegram client through 12.9.2.
                </Word>
            </Paragraph>
            <Paragraph>
                So the honest decomposition is: the <Word>
                    <Emphasis />
                    engine
                </Word> is done — that's what the MyTonWallet patch convergence actually demonstrates, a mature codebase
                that stopped needing fixes. But the <Word>
                    <Emphasis />
                    client integration
                </Word> is not done in any release; it hasn't surfaced in shipped code at all. My "done" claim conflated the
                two. What's unknowable from outside: whether integration code is maturing in a private branch (Telegram only
                publishes source at release, so it would be invisible until the day it ships) or barely started. The July 24
                → present silence in the engine repo is consistent with either.
            </Paragraph>
            <Paragraph>
                But the client version history gives us the release lattice, and that's the real payoff. From the repo: 12.7
                in May, 12.8 in June (16th), 12.9 in July (16th, patched through Aug 2). Telegram runs a <Word>
                    <Bold />
                    monthly major-version cadence, landing mid-month
                </Word>. The wallet cannot ship in a patch release — it's a headline feature — so it ships in a major. The
                remaining majors before the September 22 "summer" deadline are <Word>
                    <Bold />
                    12.10 (~mid-August, i.e., imminent) and 12.11 (~mid-September)
                </Word>. That's the full solution space. Two candidate dates, roughly August 15–20 and September 15–20.
            </Paragraph>
            <Paragraph>
                Which one? Weak evidence favors the later: as of ten days ago the wallet wasn't in 12.9.x's code at all, the
                engine repo shows active commits <Word>
                    <Emphasis />
                    this week
                </Word> (Aug 8–10 — someone is still changing things, which you don't do to a frozen dependency), and the
                Russia news cycle plus the Apple incident both argue for letting August cool. A mid-September 12.11 also
                lands precisely "this summer," two weeks before TOKEN2049. So the synthesis, now grounded in shipped code
                rather than inference: <Word>
                    <Bold />
                    most likely Telegram 12.11, mid-September; 12.10 in the next week or two is the long-shot early case — and if 12.10 arrives without the wallet, September 15–22 becomes a near-certainty window.
                </Word> The tripwire stands: the moment 12.10 betas drop (days from now, if the cadence holds), we can grep
                its published source the same way and either confirm the long shot or lock the September window.
            </Paragraph>
        </Message>
    </Chapter>
);
