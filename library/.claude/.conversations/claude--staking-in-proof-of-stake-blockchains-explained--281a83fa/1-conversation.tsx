import { Bold, Chapter, Date, Emphasis, Heading, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 January 2026](2026-01-30)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-30T10:02:04.599722Z"
        >
            <Origin>019c0e5a-6a0b-78a6-8881-89e5b419755d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you explain what staking means in a proof by stake blockchain network in simple terms? And then provide
                some very, very introductory articles in Russian? Maybe the wikipedia article in russian will do
            </Paragraph>
        </Message>
        <Message
            at="2026-01-30T10:02:22.250932Z"
        >
            <Origin>019c0e5a-6a0b-7c16-9201-9379fcd7a8f6</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Staking in Proof-of-Stake Networks</Heading>
            <Paragraph>
                In a proof-of-stake (PoS) blockchain, <Word>
                    <Bold />
                    staking
                </Word> is essentially putting up your cryptocurrency as collateral to help validate transactions and secure
                the network.
            </Paragraph>
            <Paragraph>Here's the basic idea:</Paragraph>
            <Paragraph>
                Instead of miners competing to solve complex math puzzles (like in Bitcoin's proof-of-work), PoS networks
                select validators based on how much cryptocurrency they've "staked" — meaning locked up as a kind of
                security deposit. The more you stake, the more likely you are to be chosen to validate the next block of
                transactions.
            </Paragraph>
            <Paragraph>
                If you validate honestly, you earn rewards (more cryptocurrency). If you try to cheat or validate fraudulent
                transactions, you lose some or all of your staked coins — this penalty is called "slashing."
            </Paragraph>
            <Paragraph>
                Think of it like a security deposit on an apartment: you put money down to show you'll behave responsibly,
                and you get it back (plus rewards) if you do.
            </Paragraph>
            <Paragraph>Now let me find some introductory Russian-language resources for you:</Paragraph>
            <Action>Searched the web for “стейкинг криптовалюта proof of stake Wikipedia”</Action>
            <Heading>Russian-Language Resources</Heading>
            <Paragraph>Here are some very introductory articles in Russian:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Wikipedia (Русская Википедия)
                </Word> <Word>
                    <Bold />
                    «Доказательство доли владения»
                </Word> https://ru.wikipedia.org/wiki/Доказательство<Word>
                    <Emphasis />
                    доли
                </Word>владения
            </Paragraph>
            <Paragraph>
                This is the Russian Wikipedia article on Proof-of-Stake — a good neutral starting point that covers the
                basics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Forklog (popular Russian crypto publication)
                </Word> <Word>
                    <Bold />
                    «Алгоритм Proof-of-Stake (PoS): что это и как работает»
                </Word> https://forklog.com/cryptorium/chto-takoe-proof-of-stake-pos
            </Paragraph>
            <Paragraph>Very beginner-friendly, explains the concept clearly with good structure.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    «Что такое стейкинг криптовалюты и как на нем заработать?»
                </Word> https://forklog.com/cryptorium/chto-takoe-stejking
            </Paragraph>
            <Paragraph>
                Focuses specifically on staking (rather than PoS generally) — practical and straightforward.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. BeInCrypto Russia
                </Word> <Word>
                    <Bold />
                    «Что такое PoS в криптовалюте: Proof-of-Stake для чайников»
                </Word> https://ru.beincrypto.com/learn/chto-takoe-pos/
            </Paragraph>
            <Paragraph>The title literally says "for dummies" — explicitly aimed at beginners.</Paragraph>
            <Paragraph>
                The Wikipedia article is probably the most neutral starting point, while Forklog tends to be accessible and
                well-written for newcomers.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-30T10:04:00.259801Z"
        >
            <Origin>019c0e5c-2d2b-75fb-9b4f-b726e9dae6ef</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you translate your last response to Russian? I’m leaving the links obviously so that they can be cooked.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-30T10:04:14.363351Z"
        >
            <Origin>019c0e5c-2d2b-73ad-94de-d1bfc64b5853</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Стейкинг в сетях Proof-of-Stake</Heading>
            <Paragraph>
                В блокчейне с алгоритмом proof-of-stake (PoS) <Word>
                    <Bold />
                    стейкинг
                </Word> — это, по сути, внесение вашей криптовалюты в качестве залога для участия в валидации транзакций и
                обеспечения безопасности сети.
            </Paragraph>
            <Paragraph>Основная идея такова:</Paragraph>
            <Paragraph>
                Вместо того чтобы майнеры соревновались в решении сложных математических задач (как в proof-of-work у
                Биткоина), сети PoS выбирают валидаторов на основе того, сколько криптовалюты они «застейкали» — то есть
                заблокировали в качестве залога. Чем больше вы застейкали, тем выше вероятность, что именно вас выберут для
                валидации следующего блока транзакций.
            </Paragraph>
            <Paragraph>
                Если вы валидируете честно — получаете награду (дополнительную криптовалюту). Если пытаетесь мошенничать или
                подтверждаете поддельные транзакции — теряете часть или весь свой залог. Этот штраф называется «слэшинг».
            </Paragraph>
            <Paragraph>
                Представьте это как залог за аренду квартиры: вы вносите деньги, чтобы показать, что будете вести себя
                ответственно, и получаете их обратно (плюс награду), если всё делаете правильно.
            </Paragraph>
            <Heading>Ресурсы на русском языке</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Википедия
                </Word> <Word>
                    <Bold />
                    «Доказательство доли владения»
                </Word> https://ru.wikipedia.org/wiki/Доказательство<Word>
                    <Emphasis />
                    доли
                </Word>владения
            </Paragraph>
            <Paragraph>
                Статья в русской Википедии о Proof-of-Stake — хорошая нейтральная отправная точка, охватывающая основы.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Forklog (популярное русскоязычное криптоиздание)
                </Word> <Word>
                    <Bold />
                    «Алгоритм Proof-of-Stake (PoS): что это и как работает»
                </Word> https://forklog.com/cryptorium/chto-takoe-proof-of-stake-pos
            </Paragraph>
            <Paragraph>Очень доступно для начинающих, понятно объясняет концепцию с хорошей структурой.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    «Что такое стейкинг криптовалюты и как на нем заработать?»
                </Word> https://forklog.com/cryptorium/chto-takoe-stejking
            </Paragraph>
            <Paragraph>Сфокусировано именно на стейкинге (а не на PoS в целом) — практично и просто.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. BeInCrypto Россия
                </Word> <Word>
                    <Bold />
                    «Что такое PoS в криптовалюте: Proof-of-Stake для чайников»
                </Word> https://ru.beincrypto.com/learn/chto-takoe-pos/
            </Paragraph>
            <Paragraph>В названии прямо сказано «для чайников» — явно рассчитано на новичков.</Paragraph>
            <Paragraph>
                Статья в Википедии — наиболее нейтральная отправная точка, а Forklog обычно пишет доступно и качественно для
                начинающих.
            </Paragraph>
        </Message>
    </Chapter>
);
