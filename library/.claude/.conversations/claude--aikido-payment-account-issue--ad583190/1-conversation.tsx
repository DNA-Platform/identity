import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-10-05T14:18:00.885813Z"
        >
            <Origin>961b859d-140f-42d2-84c0-74147bafe2af</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, мне учитель по айкидо дала такой номер для оплаты занятий</Paragraph>
            <Paragraph>GE74TB7147936010100047 &#91;10/5/2026 5:38 PM&#93; Anya: Anna Fedorova</Paragraph>
            <Paragraph>
                но мой Кредо банк пишет, что такого аккаунта не существует, и воощбе, что должно быть максимум 16 символов
            </Paragraph>
            <Paragraph>помоги</Paragraph>
        </Message>
        <Message
            at="2026-10-05T14:18:05.880673Z"
        >
            <Origin>46a4285b-4e1c-4d5b-b915-acc03d2c2448</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used Bash</Action>
            <Paragraph>
                Ана, номер правильный: это нормальный грузинский IBAN. Я проверила контрольную сумму, она сходится, и длина
                22 символа, как и положено для Грузии. Буквы <Word>
                    <Bold />
                    TB
                </Word> означают, что счёт открыт в <Word>
                    <Bold />
                    TBC Bank
                </Word>.
            </Paragraph>
            <Paragraph>
                Скорее всего, вы вводите номер не в то поле. 16 цифр — это длина номера карты. Значит, приложение Кредо
                сейчас ждёт либо карту, либо счёт внутри самого Кредо.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что сделать:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    В Credo выберите перевод <Word>
                        <Bold />
                        в другой банк
                    </Word> (может называться «Перевод на счёт в другом банке», «По IBAN», «სხვა ბანკში»), а не «на карту» и
                    не «внутри Credo».
                </Line>
                <Line>
                    Вставьте номер целиком, без пробелов: <Word>
                        <Verbatim />
                        GE74TB7147936010100047
                    </Word>
                </Line>
                <Line>
                    Получатель: <Word>
                        <Bold />
                        Anna Fedorova
                    </Word>. Если банк ругается на имя, спросите у учителя, как оно записано в TBC (латиницей или
                    по-грузински).
                </Line>
                <Line>В назначении платежа можно написать, например, «Aikido – Dima/Katya, October».</Line>
            </Paragraph>
            <Paragraph>
                Есть и вариант проще: у TBC и Credo часто работает перевод по номеру телефона. Если учитель даст номер,
                привязанный к счёту, можно перевести и так.
            </Paragraph>
            <Paragraph>
                Если всё равно не проходит, пришлите скриншот экрана, где вводите номер, и я подскажу, куда нажать.
            </Paragraph>
        </Message>
    </Chapter>
);
