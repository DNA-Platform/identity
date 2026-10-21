import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-01T09:27:03.738041Z"
        >
            <Origin>019ca8b9-1b15-7d51-93e6-762cb4e3c7c3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ana is trying to have groceries delivered to her grandmother in Russia but she doesn’t have access to
                finances there as they are paywalled. Are there people to find on telegram who ypu can pay in USDT or TON,
                and who will do some on the group chore? Maybe with an escrow system in place
            </Paragraph>
        </Message>
        <Message
            at="2026-03-01T09:27:48.972980Z"
        >
            <Origin>019ca8b9-1b15-772f-a570-ab23bf2f5c24</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, this is actually a well-established pattern in the Russian emigrant community. Let me search for what's
                currently available.
            </Paragraph>
            <Action>Searched the web for “telegram бот оплата услуг в России USDT криптовалюта”</Action>
            <Action>
                Searched the web for “telegram помощник поручения оплата криптой USDT доставка продуктов Россия”
            </Action>
            <Paragraph>
                Good question — this is a very common problem for Russians abroad who are cut off from the Russian financial
                system. There are several practical approaches, ranging from simple to more involved:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Simplest option: Send rubles directly to grandma's card via P2P
                </Word>
            </Paragraph>
            <Paragraph>
                The easiest path is probably to skip the middleman errand-runner entirely. Telegram's built-in <Word>
                    <Bold />
                    @wallet
                </Word> bot has a P2P marketplace where Ana can sell USDT and have the buyer send rubles directly to
                grandma's Sberbank/Tinkoff card via SBP (Система быстрых платежей). The @wallet bot acts as escrow — USDT is
                held until the ruble transfer is confirmed. Then grandma can order from Sbermarket, Yandex Lavka, Samokat,
                etc. herself. This is probably the lowest-risk, lowest-friction approach if grandma is comfortable ordering
                delivery online (or if someone can walk her through it).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Crypto-to-SBP payment bots
                </Word>
            </Paragraph>
            <Paragraph>
                Services like <Word>
                    <Bold />
                    @CryptoBot
                </Word> and <Word>
                    <Bold />
                    PGON Wallet
                </Word> now allow you to pay Russian QR codes (SBP) directly from USDT. So if Ana could get into a grocery
                delivery app account, she could potentially scan the payment QR and pay from crypto. The conversion happens
                automatically at ~3% commission. The catch is you need to be able to generate the QR on the Russian end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    P2P errand/task approach
                </Word>
            </Paragraph>
            <Paragraph>
                For the actual "pay someone in crypto to do an errand" model, the P2P exchange bots with built-in escrow
                include <Word>
                    <Bold />
                    Sky Crypto Bot
                </Word>, <Word>
                    <Bold />
                    Bitpapa Bot
                </Word>, and <Word>
                    <Bold />
                    xRocket
                </Word> — all operate in Telegram with escrow systems for USDT/TON trades. These are primarily exchange
                platforms, but the underlying principle (crypto held in escrow until service confirmed) is the same
                mechanism you'd use with an individual.
            </Paragraph>
            <Paragraph>
                For finding actual errand-runners, the emigrant community Telegram groups (чаты релокантов) often have
                people offering exactly this kind of service — they'll accept USDT and handle domestic errands. You'd want
                to look in groups for Russian emigrants from Georgia specifically, since those communities have the highest
                density of people who understand this exact pain point and have trusted contacts still in Russia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Practical recommendation
                </Word>
            </Paragraph>
            <Paragraph>
                I'd actually steer toward option 1 unless grandma can't use a phone for delivery apps. The P2P market in
                @wallet is well-established, the escrow is built-in, and it cuts out the need to trust a stranger with both
                money and the errand. Ana sells USDT → buyer sends rubles to grandma's card → grandma orders her own
                groceries. The whole thing takes about 15-20 minutes and costs roughly the P2P spread (usually 1-3%).
            </Paragraph>
            <Paragraph>
                If grandma isn't tech-savvy enough for delivery apps, then the errand-runner approach via emigrant community
                groups + @wallet or @CryptoBot escrow for payment is the way to go. Just make sure any arrangement uses the
                bot's escrow rather than direct transfer — release payment only after delivery confirmation (photo of
                groceries at the door, etc.).
            </Paragraph>
            <Paragraph>
                Want me to look into specific emigrant community groups that might have these services organized?
            </Paragraph>
        </Message>
    </Chapter>
);
