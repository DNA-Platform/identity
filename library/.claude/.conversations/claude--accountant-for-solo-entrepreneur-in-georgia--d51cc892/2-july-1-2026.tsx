import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 July 2026](2026-07-01)</Date>
        </Dated>
        <Title>[[ 1 July 2026 ]]</Title>
        <Message
            at="2026-07-01T06:16:03.591874Z"
        >
            <Origin>019f1c51-feca-75b4-89d3-b3197c01509c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, я собираюсь рассылать этот текст в англоязычные фирмы: Hello! I'd like to use your service for an
                Individual Entrepreneur with Small Business status (1%) in Georgia. My profile:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Activity: illustration and cartography (graphic/digital design).</Line>
                <Line>Foreign clients only (Fiverr, a US laboratory, stock platforms).</Line>
                <Line>Income comes in via Payoneer to a Credo business account.</Line>
                <Line>The IE is recently registered and Small Business status is already granted.</Line>
            </Paragraph>
            <Paragraph>A few questions before I sign up:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the exact monthly price for an IE on Small Business 1% (no VAT registration, no employees)?
                </Line>
                <Line>Does your service handle reverse-charge VAT on purchases of services from non-residents?</Line>
                <Line>Do you file zero (nil) declarations automatically for months with no income?</Line>
                <Line>
                    In your estimate, which month is my first declaration and what is the filing deadline? (status granted
                    in June)
                </Line>
                <Line>
                    Do you file the declaration on my behalf, or does the service only calculate the tax and prepare the
                    form for me to submit?
                </Line>
            </Paragraph>
            <Paragraph>Thank you!</Paragraph>
            <Paragraph>скажи, он точно отражает мой запрос о том, что мне нужны услуши бухгалтера?</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:24.210217Z"
        >
            <Origin>019f1c51-feca-721a-b89f-ada434d0521a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Почти да, но есть одно слабое место: сам запрос «I'd like to use your service» не говорит прямо, что тебе
                нужно именно <Word>
                    <Bold />
                    ежемесячное бухгалтерское сопровождение
                </Word>. Эти фирмы делают много всего - регистрацию ИП, юр. адрес, ВНЖ, бухгалтерию. Из твоего текста
                понятно только по вопросам ниже, а первая фраза может быть прочитана как «помогите зарегистрировать/получить
                статус». Регистрация у тебя уже сделана, так что стоит это сразу отсечь.
            </Paragraph>
            <Paragraph>
                Достаточно поправить первую строку - остальное отражает запрос корректно. Вот версия с уточнённым началом:
            </Paragraph>
            <Paragraph>
                Hello! I'm looking for <Word>
                    <Bold />
                    ongoing monthly accounting / bookkeeping
                </Word> for an Individual Entrepreneur with Small Business status (1%) in Georgia - i.e. monthly tax
                declaration filing and compliance. My IE is <Word>
                    <Bold />
                    already registered and Small Business status is already granted
                </Word>, so I don't need registration help, only the monthly accounting service.
            </Paragraph>
            <Paragraph>My profile:</Paragraph>
            <Paragraph>
                <List />
                <Line>Activity: illustration and cartography (graphic/digital design).</Line>
                <Line>Foreign clients only (Fiverr, a US laboratory, stock platforms).</Line>
                <Line>Income comes in via Payoneer to a Credo business account.</Line>
            </Paragraph>
            <Paragraph>A few questions before I sign up:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    What is the exact monthly price for ongoing accounting for an IE on Small Business 1% (no VAT
                    registration, no employees)?
                </Line>
                <Line>Does your service handle reverse-charge VAT on purchases of services from non-residents?</Line>
                <Line>Do you file zero (nil) declarations for months with no income?</Line>
                <Line>
                    In your estimate, which month is my first declaration and what is the filing deadline? (status granted
                    in June)
                </Line>
                <Line>
                    Do you file the declaration on my behalf, or does the service only calculate the tax and prepare the
                    form for me to submit?
                </Line>
            </Paragraph>
            <Paragraph>Thank you!</Paragraph>
            <Paragraph>
                Что изменилось: первая фраза теперь прямо говорит «мне нужна ежемесячная бухгалтерия», и убрано лишнее
                упоминание регистрации из середины (перенёс его в начало как «регистрация не нужна»). Смысл вопросов не
                тронул - они у тебя составлены правильно и как раз показывают, разбирается ли фирма в твоём профиле.
            </Paragraph>
            <Paragraph>
                Если хочешь, могу сделать этот текст кнопкой-сообщением, чтобы удобно было копировать по фирмам.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:45.814256Z"
        >
            <Origin>019f1c52-a401-7c05-8589-8fcee5504a03</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>сделай снова копируемый текст бокс с поправками и темой письма</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:16:56.888168Z"
        >
            <Origin>019f1c52-a401-7b73-9eef-ff0f965f7cf0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used message compose v1</Action>
            <Paragraph>
                Готово - тема письма и текст с поправками выше, можно копировать и рассылать по англоязычным фирмам
                (Polaris, Bookkeeping.ge, Andersen, PB Services, Georgia Assistant, Tbilisi Expat).
            </Paragraph>
            <Paragraph>
                Тема: «Monthly accounting for IE (Small Business 1%) - already registered» - сразу отсекает тех, кто мог бы
                предложить регистрацию, и говорит, что тебе нужна именно ежемесячная бухгалтерия.
            </Paragraph>
            <Paragraph>Как соберёшь ответы - скидывай, добавлю в трекер.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:27:40.960132Z"
        >
            <Origin>019f1c5c-a407-74de-b03c-6778ba3e5e42</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                info@polarisfinance.ge - отправила пиьсом Ester georgia - отправила почту info@pbservices.ge почта
                georgia-assistant.ge телеграм Tbilisi Expat (tbilisi-expat.com) whatsapp
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:28:53.231816Z"
        >
            <Origin>019f1c5c-a407-7b59-9611-115dbde52d7e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Обновляю трекер: перевожу эти пять в статус «Ждём ответа» и добавляю три новые строки (PB Services, Georgia
                Assistant, Tbilisi Expat) с каналами, куда ты написала.
            </Paragraph>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Read /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Обновил. Теперь в трекере:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ответили (2):
                </Word> Espero, Relocup/Lotman.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ждём ответа (8):
                </Word> Expertos, MyReloc, Sharkyyy, Polaris Finance, PB Services, Georgia Assistant, Tbilisi Expat, Ester
                Georgia - у каждой в заметках указан канал, куда ты написала (письмо / Telegram / WhatsApp).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Не писали (2):
                </Word> Andersen Georgia, Bookkeeping.ge - оставил как запас, если захочешь расширить.
            </Paragraph>
            <Paragraph>
                Одно техническое: эта версия обновлённая, поэтому она подгрузит свежий список заново. Если ты вручную что-то
                правила в прошлом варианте, те правки сюда не перенесутся - но раз ты передавала данные мне, а не
                редактировала сама, потерь быть не должно. Дальше можешь либо вписывать ответы прямо в ячейки, либо
                скидывать мне - как удобнее.
            </Paragraph>
            <Paragraph>Итого разослано в 10 фирм. Как начнут отвечать - обновим.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:29:29.629354Z"
        >
            <Origin>019f1c5e-4ccd-71e2-9239-c8280de043e4</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Good afternoon! The cost of accounting services includes: accounting support for individual entrepreneurs,
                filing tax returns, calculating taxes due, obtaining statements, etc. Cost: 150 GEL per month.это ответ от
                georgia-assistant.ge
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:30:08.957914Z"
        >
            <Origin>019f1c5e-4ccd-79fe-a437-1ff22559bd21</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Записал в трекер. Обновляю Georgia Assistant на «Ответили».</Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово - Georgia Assistant теперь «Ответили», 150 лари/мес.</Paragraph>
            <Paragraph>
                Что стоит заметить: они назвали цену и общий состав услуг (сопровождение, подача деклараций, расчёт налога,
                выписки), но <Word>
                    <Bold />
                    не ответили ни на один из трёх ключевых вопросов
                </Word> - обратный НДС, нулевые декларации, срок первой декларации. Пометил это в заметках. Если Georgia
                Assistant для тебя реальный кандидат, стоит написать им уточняющий вопрос именно про обратный НДС - это тот
                же фильтр, что и для остальных.
            </Paragraph>
            <Paragraph>По цене расклад пока такой (ответившие):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Espero - $50/мес (~135 лари), год выходит ~$37,5/мес - самый выгодный по деньгам, но обратный НДС не
                    подтвердил.
                </Line>
                <Line>Relocup/Lotman - $30-40/мес - самый дешёвый, но ответ по обратному НДС уклончивый.</Line>
                <Line>Georgia Assistant - 150 лари/мес - дороже двух предыдущих, вопросы не раскрыты.</Line>
                <Line>Polaris - 150 лари/мес по сайту, ждём подтверждения.</Line>
            </Paragraph>
            <Paragraph>Все дешевле ExpatHub (200). Как придут остальные ответы - продолжим заполнять.</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:39:07.030799Z"
        >
            <Origin>019f1c67-1b88-74e4-ba04-700989e1624a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Hello Anastasia,</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Our service fee will be 250 GEL monthly - or we can agree on an annual fee.</Line>
                <Line>⁠Yes.</Line>
                <Line>⁠Yes.</Line>
                <Line>⁠15th of July</Line>
                <Line>
                    ⁠We will do it on your behalf by ourselves. You just provide the income information, expenses paid for
                    foreign services.
                </Line>
            </Paragraph>
            <Paragraph>Это от Tbilisi Expat</Paragraph>
        </Message>
        <Message
            at="2026-07-01T06:39:41.741701Z"
        >
            <Origin>019f1c67-1b88-7d3a-8053-30f639533925</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Записываю. Tbilisi Expat дал самый содержательный ответ по сути, но самый дорогой по цене.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Готово. Tbilisi Expat - «Ответили».</Paragraph>
            <Paragraph>
                Тут интересный расклад. По <Word>
                    <Bold />
                    качеству ответа они пока лучшие
                </Word>: единственные, кто чётко сказал «да» на обратный НДС и вдобавок в пункте 5 сами упомянули «расходы
                на иностранные услуги» - это прямой признак, что они реально понимают reverse-charge, а не просто кивнули.
                Плюс подают декларацию сами за тебя, от тебя только цифры.
            </Paragraph>
            <Paragraph>
                Но <Word>
                    <Bold />
                    по цене они самые дорогие - 250 лари/мес
                </Word>, это даже выше ExpatHub (200), от которого ты как раз уходила. Годовой тариф «по договорённости»,
                так что если они тебе понравятся, есть смысл спросить конкретную годовую цену - возможно, выйдет ближе к
                рынку.
            </Paragraph>
            <Paragraph>Как это выглядит сейчас в сравнении ответивших:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Relocup/Lotman
                    </Word> - ~$30-40/мес - дёшево, но обратный НДС не подтвердили (уклончиво).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Espero
                    </Word> - $50/мес (~135 лари), год ~$37,5/мес - выгодно, но обратный НДС не уточнили.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgia Assistant
                    </Word> - 150 лари/мес - вопросы не раскрыли.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi Expat
                    </Word> - 250 лари/мес - ответ лучший, цена высшая.
                </Line>
            </Paragraph>
            <Paragraph>
                Вырисовывается классический компромисс цена/качество. Пока никто не занял «золотую середину» - недорого И с
                подтверждённым обратным НДС. Возможно, её закроют те, кто ещё не ответил (Expertos, Polaris, PB Services,
                Sharkyyy, MyReloc, Ester). Дождёмся их - и будет видно, стоит ли переплачивать за Tbilisi Expat или кто-то
                из середняков подтвердит обратный НДС за меньшие деньги.
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T09:11:22.029406Z"
        >
            <Origin>019f1cf2-8094-714d-8f25-3b57b43b8b61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                вот ответ от Polaris Finance Hello Ana, Glad you contacted us, and thanks for laying everything out so
                clearly — it makes answering easy. The short version: yes, we can take care of all of this for you. Here are
                your answers in order: 1. Monthly price. For ongoing monthly accounting for an Individual Entrepreneur our
                fee is 150 GEL per month. 2. Reverse-charge VAT on services from non-residents. Yes — this is part of the
                compliance we handle, we manage the calculation and filing for you. 3. Nil declarations. Yes. For any month
                with no income, we file the zero declaration on time so your compliance stays clean. 4. First declaration
                and deadline. Once we onboard you, your accountant will confirm the exact first-period timing against your
                registration date and incurring transactions. 5. Who files. We file the declaration on your behalf — you
                don't submit anything yourself. We calculate the tax, prepare the declaration, and file it through the
                Revenue Service portal for you each month. With us you'll have a dedicated accountant handling this monthly,
                so you can focus on your work rather than deadlines. If you'd like to move ahead, just reply and we'll set
                up a short onboarding call and share the contract. Thanks again for reaching out. Best regards, Nini
            </Paragraph>
        </Message>
        <Message
            at="2026-07-01T09:12:01.583765Z"
        >
            <Origin>019f1cf2-8094-7497-b85d-c6004a608d60</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Отличный ответ - и, по-моему, первый, кто занял ту самую «золотую середину». Обновляю Polaris.
            </Paragraph>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Edited /mnt/user-data/outputs/accountant-tracker.html</Action>
            <Action>Presented files</Action>
            <Paragraph>Записал. Polaris Finance - «Ответили», и это сильный кандидат.</Paragraph>
            <Paragraph>
                Почему он выделяется: <Word>
                    <Bold />
                    150 лари/мес и при этом подтверждённый обратный НДС
                </Word> - они прямо написали, что сами считают и подают reverse-charge, подают нулевые вовремя, всё делают
                за тебя через портал Revenue Service, дают выделенного бухгалтера. Ответ по-английски, конкретный, без воды.
                Это ровно та середина, которой не хватало: недорого И понимают твой профиль.
            </Paragraph>
            <Paragraph>Обновлённое сравнение ответивших:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Relocup/Lotman
                    </Word> - ~$30-40/мес - дёшево, обратный НДС уклончиво (не подтвердили).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Espero
                    </Word> - $50/мес (~135), год ~$37,5/мес - выгодно, обратный НДС не уточнили.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Georgia Assistant
                    </Word> - 150 лари/мес - вопросы не раскрыли.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Polaris Finance
                    </Word> - 150 лари/мес - обратный НДС подтверждён, подают сами, англ. ✅
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Tbilisi Expat
                    </Word> - 250 лари/мес - тоже подтвердили обратный НДС, но заметно дороже.
                </Line>
            </Paragraph>
            <Paragraph>
                Как это читается: <Word>
                    <Bold />
                    Polaris и Tbilisi Expat
                </Word> - единственные, кто внятно закрыл вопрос про обратный НДС, и Polaris при этом на 100 лари дешевле.
                Так что на данный момент Polaris - лидер.
            </Paragraph>
            <Paragraph>
                Единственное, что стоит сделать перед решением: у <Word>
                    <Bold />
                    Espero
                </Word> годовой тариф выходит совсем дёшево (~$37,5/мес), и если они тоже ведут обратный НДС, это могло бы
                обойти Polaris по цене. Их ответ этот пункт не покрыл. Хочешь - составлю короткий уточняющий вопрос для
                Espero (и заодно для Lotman) именно про reverse-charge, чтобы сравнить честно, прежде чем выбирать. Ещё не
                ответили: Expertos, MyReloc, Sharkyyy, PB Services, Ester.
            </Paragraph>
        </Message>
    </Chapter>
);
