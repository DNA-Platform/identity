import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-13T16:53:56.692986Z"
        >
            <Origin>019c57ec-7005-78f2-934a-ce248554c9e8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are some great channels in english for following news on telegram both american and russian
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T16:54:37.759331Z"
        >
            <Origin>019c57ec-7006-7115-9986-760de8f8cb36</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “best English language Telegram channels news 2025”</Action>
            <Action>Searched the web for “best Telegram channels Russian news English language geopolitics 2025”</Action>
            <Action>
                Fetched https://thefix.media/2022/04/04/top-english-language-telegram-channels-about-war-in-ukraine/
            </Action>
            <Paragraph>
                Here's a solid rundown, Doug. I'd break these into a few categories depending on what angle you want:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    General / Breaking News (US-oriented)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Insider Paper
                    </Word> — fast, snappy breaking news with a global scope. One of the more popular English-language news
                    channels on Telegram.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Disclose.tv
                    </Word> (~357k subscribers) — covers global events with both mainstream and alternative angles. Good for
                    spotting trends early.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The New York Times
                    </Word> — their Telegram channel pushes out the same investigative journalism you'd expect.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Geopolitics &amp; Conflict
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Intel Slava Z
                    </Word> (~396k subscribers) — specializes in geopolitics, conflicts, and international news aggregation.
                    Heavily focused on Ukraine-Russia and Middle East. Worth noting this leans pro-Russian in its framing,
                    so calibrate accordingly.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rybar
                    </Word> (English version: @ryaboreng) — the most important source of conflict information for analysts
                    and media, publishing detailed reports and highly accurate front-line maps. Originally focused on Middle
                    East military analysis, exploded during the Ukraine war. Pro-Russian but tries to maintain analytical
                    credibility — CNN, Bloomberg, and the Institute for the Study of War regularly cite its data.
                    Fascinating from an OSINT perspective.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        BRICS News
                    </Word> — tracks emerging economies, international trade, and the shifting global order. Relevant if
                    you're following the multipolar dynamics.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian Government / Official
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Kremlin News
                    </Word> (@news_kremlin_eng) — the official English-language Kremlin channel. Straight from the source,
                    which is useful for reading the official narrative unfiltered and comparing it to other accounts.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Independent Russian / Opposition
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Astra
                    </Word> — an independent journalist-run channel focusing on delivering accurate information on events in
                    Russia. The Kremlin considers them enemies of the state, which is arguably a quality signal. The gap
                    between an Astra report and an official Kremlin narrative is almost always an excellent measure of how
                    much the state narrative differs from reality. Primarily Russian-language but Telegram's built-in
                    translate function handles it well.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The Bell
                    </Word> (thebell.io) — independent Russian business/politics journalism with an English edition. They
                    did the major investigation unmasking who runs Rybar.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Meduza
                    </Word> — Russian independent media operating from Latvia, publishes extensively in English.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    OSINT / Intelligence
                </Word>
            </Paragraph>
            <Paragraph>
                Several OSINT channels aggregate satellite imagery, flight tracking, military convoy movements, and verified
                visuals. These tend to be more niche but are gold for understanding what's actually happening on the ground
                versus what's being reported.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pro tip
                </Word>: Telegram's built-in translation (long-press any message → Translate) is surprisingly good, so don't
                limit yourself to English-only channels. Some of the most interesting Russian channels like Rybar's main
                Russian feed or Colonel Cassad have much richer content in the original Russian, and the auto-translate
                gives you a decent read.
            </Paragraph>
            <Paragraph>
                The real value of Telegram for this kind of information diet is reading across the spectrum — official
                Kremlin, pro-Russian milbloggers, independent Russian journalists, Western OSINT — and triangulating. No
                single channel gives you the full picture, but the delta between them is where the signal lives.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T16:57:08.347850Z"
        >
            <Origin>019c57ef-5ec1-7ba3-956c-53b9ff91a70f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I think you need to tell me what to put into search the New York Times doesn’t show up on channels
            </Paragraph>
            <Paragraph>Pro tip back at ya, Translate only works on desktop at least for an American account</Paragraph>
        </Message>
        <Message
            at="2026-02-13T16:57:50.011145Z"
        >
            <Origin>019c57ef-5ec1-791f-bb0d-3e5845393ec9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Good call on both counts — let me get you the actual handles.</Paragraph>
            <Action>Searched the web for “Telegram channel username handle @nytimes @insiderpaper @disclosetv”</Action>
            <Action>
                Searched the web for “telegram handle Intel Slava Z Insider Paper Meduza English BRICS News Rybar English”
            </Action>
            <Action>Searched the web for “telegram @insiderpaper @medaboreng @ryaboreng @aaboreng channel username”</Action>
            <Action>
                Searched the web for “telegram Meduza English channel handle Rybar English channel BRICS News channel”
            </Action>
            <Action>
                Searched the web for “telegram @medaboreng @meduzalive English channel BRICS News telegram handle”
            </Action>
            <Action>Searched the web for “Meduza English telegram channel @medaboreng @meduzalive”</Action>
            <Paragraph>
                Fair point on the translate — I stand corrected. Here's the actual handles you can paste into Telegram
                search:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    General / Breaking News
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @nytimes
                    </Word> — New York Times (it does exist, just doesn't surface easily in search)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @insiderpaper
                    </Word> — Insider Paper, fast breaking news
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @disclosetv
                    </Word> — Disclose.tv, global events + alternative angles
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Geopolitics / Conflict (pro-Russian lean)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @intelslava
                    </Word> — Intel Slava Z, the big one for conflict aggregation
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @rybar_in_english
                    </Word> — Rybar's official English channel (launched late 2025). The main Russian channel is just <Word>
                        <Verbatim />
                        @rybar
                    </Word> if you want the source feed
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @BRICSNews
                    </Word> — emerging economies, multipolar geopolitics
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian Government / Official
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @news_kremlin_eng
                    </Word> — official Kremlin English-language channel, straight from the source
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Independent Russian / Opposition (English)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @meduza_en
                    </Word> — Meduza's English channel (small but high quality, ~800 subscribers). Their main Russian
                    channel <Word>
                        <Verbatim />
                        @meduzalive
                    </Word> is massive (~1.17M) and much more active
                </Line>
                <Line>
                    The Bell doesn't have a dedicated Telegram channel for English but their website thebell.io has an
                    English edition
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Pro tip back at ya
                </Word> (the correct kind this time): if you type <Word>
                    <Verbatim />
                    t.me/channelname
                </Word> into any browser it'll open the channel directly in Telegram, which is way more reliable than the
                in-app search. So <Word>
                    <Verbatim />
                    t.me/rybar_in_english
                </Word> will get you there instantly without fighting Telegram's search algorithm.
            </Paragraph>
            <Paragraph>
                The caveat on all the geopolitics channels — Intel Slava, Rybar, BRICS News — is that they range from "leans
                Russian" to "funded by Russian intelligence services" (Intel Slava's own description literally says that at
                one point). Useful for understanding Russian perspectives and getting fast battlefield updates, but you want
                to cross-reference rather than take at face value.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T17:00:49.119159Z"
        >
            <Origin>019c57f2-b4f3-773a-a0be-bebdafe3d6ca</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Attachment>Uploaded “IMG_2921.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-02-13T17:01:06.912180Z"
        >
            <Origin>019c57f2-b4f3-74a5-b344-7c7e9384b5bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yeah, you searched <Word>
                    <Verbatim />
                    @newyorktimes
                </Word> — try just <Word>
                    <Verbatim />
                    @nytimes
                </Word> instead. That's the handle that came up in my search (t.me/nytimes).
            </Paragraph>
            <Paragraph>
                That said, looking at what you're seeing — all those knockoffs with a few hundred to a few thousand
                subscribers — I'll be honest: NYT's Telegram presence may not be worth your time even if the @nytimes
                channel exists. The major American legacy outlets never really invested in Telegram the way they did
                Twitter/X. Telegram's news ecosystem is dominated by independent aggregators and non-Western sources, which
                is kind of the whole point of using it.
            </Paragraph>
            <Paragraph>
                If you want solid US/Western news on Telegram, you're better off with the channels that are actually native
                to the platform — <Word>
                    <Verbatim />
                    @insiderpaper
                </Word> and <Word>
                    <Verbatim />
                    @disclosetv
                </Word> will cover the same stories NYT does, just faster and without a paywall. The value-add of Telegram
                isn't getting the same sources you already have access to through a different pipe — it's getting the
                sources you <Word>
                    <Emphasis />
                    can't
                </Word> easily get elsewhere, which is where the Russian and geopolitics channels really shine.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T17:04:18.251223Z"
        >
            <Origin>019c57f5-ed87-7cf5-9c14-b99761021b22</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What are some of the most subscribed most important telegram channels</Paragraph>
        </Message>
        <Message
            at="2026-02-13T17:04:43.802830Z"
        >
            <Origin>019c57f5-ed87-725a-966b-7a0cec486316</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “most subscribed telegram channels worldwide 2025 2026”</Action>
            <Paragraph>
                Honestly, the answer is a little anticlimactic. The biggest channels by raw subscriber count are almost
                entirely crypto/gaming projects:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The giants (tens of millions)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @hamster_kombat
                    </Word> — ~43M subscribers. A blockchain game. This is literally the #1 channel on all of Telegram.
                </Line>
                <Line>Tapswap, Blum, Notcoin — all crypto/airdrop channels in the 7-30M range</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Telegram's own channels
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        @TelegramTips
                    </Word> — ~11M, the biggest "real" channel
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @telegram
                    </Word> — ~6M, official announcements
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        @TelegramPremium
                    </Word> — ~7M
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Russian-language news (where the real action is)
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Прямой Эфир (Pryamoy Efir) — ~4.6M, news blog</Line>
                <Line>Топор Live — ~4.8M, private news channel</Line>
                <Line>Ramzan Kadyrov's personal channel — ~2.6M</Line>
                <Line>Rybar (main Russian feed) — ~1.4M</Line>
            </Paragraph>
            <Paragraph>
                The pattern is pretty telling: Telegram's biggest channels are either crypto gambling, Telegram's own
                meta-channels, or Russian-language news/politics. English-language news channels are comparatively tiny —
                Intel Slava at ~396K, Disclose.tv at ~357K, Tucker Carlson at ~249K. Even the NYT channel you couldn't find
                is modest.
            </Paragraph>
            <Paragraph>
                This maps to the adoption numbers: 45% of India uses Telegram, 38% of Brazil, but only 9% of the US and 10%
                of the UK. Telegram just isn't where Americans go for news — it's where Russians, Indians, Brazilians, and
                crypto people go. Which is exactly why it's interesting if you want perspectives outside the Western media
                bubble.
            </Paragraph>
            <Paragraph>
                The username <Word>
                    <Verbatim />
                    @news
                </Word>, incidentally, sold for $5.8 million in Toncoin on Telegram's Fragment auction platform — just the
                handle itself. The domain name game has nothing on Telegram namespace speculation.
            </Paragraph>
        </Message>
    </Chapter>
);
