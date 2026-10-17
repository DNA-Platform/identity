import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Title>[[ 27 August 2026 ]]</Title>
        <Message
            at="2026-08-27T19:33:28.789762Z"
        >
            <Origin>01a044b7-bb16-7f90-b3f1-a00db97f9e37</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do a search on the various channels that we’ve been monitoring to look for updates because I’m not seeing
                any, but I wanna know if there’s any movement
            </Paragraph>
        </Message>
        <Message
            at="2026-08-27T19:34:18.988234Z"
        >
            <Origin>01a044b7-bb16-703d-a6a4-f7924f96d64a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Telegram Gram Wallet native launch update August 2026”</Action>
            <Paragraph>
                Nothing new — that's the honest read. Everything returning is still the July 21 announcement being recycled
                through fresh aggregator posts; the dates on the "newest" pieces are just re-timestamps of the same content.
                No native ship, no beta sighting, no client update, no fresh Pavel post. Let me check the two channels that
                would actually show movement — the Telegram client betas and TON's own activity — before concluding it's
                genuinely quiet.
            </Paragraph>
            <Action>
                Ran echo "=== Telegram Android (DrKLO) latest tags/commits ===" curl -sL
                "https://github.com/DrKLO/Telegram/commits/master.atom" -H "User-Agent: Mozilla/5.0" | grep -E
                "&lt;updated&gt;|&lt;title&gt;" | head -12 echo "" echo "=== wallet strings check on current master ==="
                curl -sL
                "https://raw.githubusercontent.com/DrKLO/Telegram/master/TMessagesProj/src/main/res/values/strings.xml" -H
                "User-Agent: Mozilla/5.0" | grep -icE "wallet|gram|toncoin|non-custodial" echo "(count of wallet/gram/ton
                matches in Android strings)"
            </Action>
            <Paragraph>
                That count jumped. Two weeks ago the Android client had <Word>
                    <Bold />
                    2
                </Word> wallet-related strings — legacy toasts. It now returns <Word>
                    <Bold />
                    638
                </Word> matches for wallet/gram/ton. The repo was pushed to yesterday (Aug 25). That's not noise; that's a
                change of state. Let me look at what's actually in there before I overstate it — 638 could include
                TON-network plumbing that isn't the native wallet.
            </Paragraph>
            <Action>
                Ran curl -sL
                "https://raw.githubusercontent.com/DrKLO/Telegram/master/TMessagesProj/src/main/res/values/strings.xml" -H
                "User-Agent: Mozilla/5.0" &gt; /tmp/s.xml echo "=== total lines matching, with the actual string NAMES
                (keys) ===" grep -oE
                'name="&#91;^"&#93;*(&#91;Ww&#93;allet|&#91;Gg&#93;ram|&#91;Tt&#93;oncoin|&#91;Nn&#93;onCustodial|&#91;Ss&#93;eed&#91;Pp&#93;hrase|&#91;Cc&#93;rypto)&#91;^"&#93;*"'
                /tmp/s.xml | sort -u | head -80 echo "" echo "=== count by theme ===" echo -n "Wallet: "; grep -c
                'name="&#91;^"&#93;*&#91;Ww&#93;allet' /tmp/s.xml echo -n "Gram: "; grep -c
                'name="&#91;^"&#93;*&#91;Gg&#93;ram' /tmp/s.xml echo -n "Seed/phrase: "; grep -ciE 'seed|phrase|mnemonic'
                /tmp/s.xml echo -n "Non-custodial: "; grep -ciE 'custod' /tmp/s.xml
            </Action>
            <Paragraph>
                I need to correct that immediately — the 638 was a false alarm and I almost handed you a fake signal. The
                matches are overwhelmingly <Word>
                    <Bold />
                    "Program"
                </Word> (Affiliate<Word>
                    <Bold />
                    Program
                </Word>, etc.) catching my "gram" substring, plus "Tele<Word>
                    <Bold />
                    gram
                </Word>" itself. That's a grep error, not wallet code. The real counts: Wallet strings = <Word>
                    <Bold />
                    1
                </Word> (still just the legacy one), non-custodial = <Word>
                    <Bold />
                    0
                </Word>, and the "165 Gram" is almost entirely "Program"/"Telegram" false positives. Let me verify the
                seed-phrase hits, since 11 is the only genuinely new-looking number and seed phrases are the one thing a
                native wallet would introduce.
            </Paragraph>
            <Action>
                Ran echo "=== actual seed/phrase/mnemonic lines ===" grep -iE 'seed|mnemonic' /tmp/s.xml | grep -ivE
                'seedling' | head -20 echo "" echo "=== genuine wallet lines (full) ===" grep -iE 'wallet' /tmp/s.xml | head
                -20 echo "" echo "=== any 'Gram' that is NOT Program/Telegram/gramm ===" grep -oE
                'name="&#91;^"&#93;+"&#91;^&gt;&#93;*&gt;&#91;^&lt;&#93;*' /tmp/s.xml | grep -iE 'gram' | grep -ivE
                'program|telegram|instagram|grammar|kilogram|diagram|anagram' | head -20
            </Action>
            <Paragraph>
                Confirmed — that was my error, and the real answer is the opposite of what the count suggested. The Telegram
                Android client on master still has exactly the <Word>
                    <Bold />
                    same two legacy strings
                </Word> it had two weeks ago: the "wallet address copied" toast and the Fragment NFT-export text. The
                "seed/phrase" hits were "CLOSE EDITOR" matching "seed" nowhere real, and every "Gram" was Program/Telegram.
                <Word>
                    <Bold />
                    There is still zero native Gram Wallet code in the shipped client.
                </Word> I'm glad I checked rather than reporting 638 — that would have been a fabricated catalyst.
            </Paragraph>
            <Paragraph>So the honest state of the board, across everything we watch:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Gram Wallet / native rollout:
                </Word> No movement. All "August 2026" headlines are aggregators recycling the July 21 announcement; the
                client source shows nothing. The standalone app exists, the native embed hasn't shipped. The window is now
                tight — with Android on ~monthly majors and "summer" ending ~Sept 22, the live candidate remains <Word>
                    <Bold />
                    12.11, mid-September
                </Word>, and the fact that late-August (12.10 territory) has come and gone <Word>
                    <Emphasis />
                    without
                </Word> wallet code in master is mild evidence for the later window, exactly as the earlier analysis
                predicted. The tripwire is unchanged: wallet strings appearing in a client beta is the one-to-three-week
                leading indicator, and they have not appeared.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    MTONGA:
                </Word> Still no Step 5 posted. The seven-step framing is being repeated by coverage, but Pavel's channel
                hasn't advanced it. Your forward test stays open and unresolved.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    .gram TLD:
                </Word> One genuine dated development — the ICANN application window <Word>
                    <Bold />
                    closed August 12
                </Word>, and cleared strings publish <Word>
                    <Bold />
                    mid-October
                </Word>. That's on the years-scale track we already filed it under (operational not before 2027), so it's
                confirmation of timeline, not a catalyst.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    TON technicals:
                </Word> Catchain 2.0 (the 6x block-rate / sub-second finality upgrade) is confirmed live as of April —
                that's the speed layer under the wallet, already in place. Network activity figures (≈396 validators, ~1.9M
                monthly active wallets, ~3.3M daily transactions) are steady, not inflected.
            </Paragraph>
            <Paragraph>
                Net: it's genuinely quiet, and your read that you're "not seeing any updates" is correct — there's no hidden
                movement I can surface in the client code or the channels. The one thing I'd flag is that
                quiet-in-late-August is <Word>
                    <Emphasis />
                    consistent
                </Word> with the mid-September 12.11 thesis rather than against it: no beta wallet code yet means the ship,
                if it comes on schedule, is still ahead, and the beta sighting would precede it. If you want, next time we
                look, the single highest-value check is the Telegram <Word>
                    <Bold />
                    beta
                </Word> channels (TestFlight / beta APK) rather than master — beta is where the wallet strings would surface
                first, days-to-weeks before stable.
            </Paragraph>
        </Message>
    </Chapter>
);
