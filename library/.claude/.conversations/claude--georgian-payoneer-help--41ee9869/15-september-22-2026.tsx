import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[22 September 2026](2026-09-22)</Date>
        </Dated>
        <Title>[[ 22 September 2026 ]]</Title>
        <Message
            at="2026-09-22T07:03:29.636079Z"
        >
            <Origin>01a0c7ed-546b-7de0-b720-35e94c120127</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Хочу вывести доллары, но у меня есть и евро нужно сконвертировать? помнишь, как?</Paragraph>
            <Attachment>Uploaded “1790060594483_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-09-22T07:03:48.221184Z"
        >
            <Origin>01a0c7ed-546b-78b2-9e46-e4868b36b326</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, Ана, помню - тот же приём, что мы делали с фунтами. Логика та же: сначала собрать всё в доллары внутри
                Payoneer (дёшево, ~0.5%), потом вывести одним куском.
            </Paragraph>
            <Paragraph>Смотрю твой баланс:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        202.95 USD
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        200.00 EUR
                    </Word>
                </Line>
                <Line>Всего система оценивает в 432.22 USD</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Да, сконвертируй EUR → USD внутри Payoneer, прежде чем выводить.
                </Word> Причина та же, что была с фунтами: если выводить евро напрямую на долларовый счёт Credo, Payoneer
                вшивает в курс дорогую комиссию конвертации (до 2%). А внутренняя конвертация между твоими балансами - всего
                ~0.5%. Ты на фунтах так выиграла ~6 долларов.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Шаги (как в прошлый раз):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Withdraw and convert → плитка «Convert currencies».
                    </Word>
                </Line>
                <Line>
                    Направление: <Word>
                        <Bold />
                        из EUR → в USD.
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Важно, помнишь свою же ошибку с полями:
                    </Word> заполняй <Word>
                        <Bold />
                        верхнее
                    </Word> поле «Amount to convert» - впиши <Word>
                        <Bold />
                        200 EUR
                    </Word> (или нажми синюю ссылку-максимум «200.00 EUR»). Нижнее (USD) оставь пустым, пусть посчитается
                    само. Так сконвертируется весь баланс без огрызка.
                </Line>
                <Line>Посмотри Fee (должна быть ~0.5%, около 1 EUR) и итог в USD.</Line>
            </Paragraph>
            <Paragraph>
                По текущему курсу (1 EUR ≈ 1.1416 USD) из 200 EUR выйдет примерно <Word>
                    <Bold />
                    ~226 USD
                </Word> после комиссии 0.5%. Тогда на USD-балансе станет: 202.95 + ~226 = <Word>
                    <Bold />
                    ~429 USD
                </Word>.
            </Paragraph>
            <Paragraph>
                И приятный бонус: <Word>
                    <Bold />
                    ~429 USD - это выше порога 375
                </Word>, значит вывод пойдёт под 4%, а не под фикс 15 как высокий процент. То есть собрав всё в доллары, ты
                заодно перешагиваешь порог - выводить будет эффективнее.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как в прошлый раз - не подтверждай конвертацию вслепую:
                </Word> дойди до экрана с посчитанной Fee и итогом, пришли мне скрин, я сверю курс и комиссию перед тем, как
                жать. Курс сейчас плавает (на скрине видно, EUR/USD скакал последнюю неделю), так что глянем цифру живьём.
            </Paragraph>
            <Paragraph>
                Открывай Convert currencies, ставь EUR → USD, вбей 200 в верхнее поле - и покажи, что посчитает 😊
            </Paragraph>
        </Message>
        <Message
            at="2026-09-22T07:06:11.812575Z"
        >
            <Origin>01a0c7ef-e36b-7439-aaeb-d6b073c4cbb0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>вот</Paragraph>
            <Attachment>Uploaded “1790060781080_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-09-22T07:06:21.117137Z"
        >
            <Origin>01a0c7ef-e36b-73a3-aa54-84a803a5da6d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Всё верно, Ана - можешь подтверждать. Сверяю цифры, всё чисто:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Amount to convert: 200 EUR
                    </Word> (весь баланс, без огрызка) ✓
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fee: 1.00 EUR (0.50%)
                    </Word> - та самая дешёвая внутренняя комиссия ✓
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Amount after fee: 199.00 EUR
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Курс: 1 EUR = 1.14147 USD
                    </Word> - совпадает с рыночным на твоём же экране (там было 1.141569), разница копеечная ✓
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        К получению: 227.15 USD
                    </Word> ✓
                </Line>
            </Paragraph>
            <Paragraph>
                Курс честный, комиссия минимальная (всего 1 евро). Ровно то, что нужно. Жми <Word>
                    <Bold />
                    Next / подтвердить
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что дальше:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Подтверди → 227.15 USD упадут на USD-баланс (пишут «в течение минут»).</Line>
                <Line>
                    На USD-балансе станет: 202.95 + 227.15 = <Word>
                        <Bold />
                        ~430.10 USD
                    </Word>.
                </Line>
                <Line>
                    Теперь выводи <Word>
                        <Bold />
                        всё одним выводом USD → USD
                    </Word> на Credo.
                </Line>
            </Paragraph>
            <Paragraph>
                И приятное: <Word>
                    <Bold />
                    ~430 USD выше порога 375
                </Word>, значит вывод пойдёт под <Word>
                    <Bold />
                    4%
                </Word> (~17 комиссии), а не под фикс 15 как завышенный процент. Собрав евро в доллары, ты и на конвертации
                сэкономила, и через порог перешагнула.
            </Paragraph>
            <Paragraph>
                Подтверждай конвертацию, дождись, пока доллары появятся на балансе, и настраивай вывод всей суммы одним
                куском. Как сконвертируется - покажи баланс, гляну перед финальным выводом 😊
            </Paragraph>
        </Message>
    </Chapter>
);
