import { Bold, Chapter, Date, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Title>[[ 15 October 2026 ]]</Title>
        <Message
            at="2026-10-15T08:52:22.634259Z"
        >
            <Origin>83cf503a-73e1-45bc-91bd-ce559fceb54a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Клод, у нас тут в проекте есть обсуждание работы с Доминик Harbor &amp; Bays* maps</Paragraph>
        </Message>
        <Message
            at="2026-10-15T08:52:32.195664Z"
        >
            <Origin>75ab89ce-d11b-4327-b561-99d263f68ecd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used mcp  claude ai  conversation search</Action>
            <Action>Used mcp  memory  memory read</Action>
            <Paragraph>Да, нашёл, это чат «Domi payment» от июля. Коротко, на чём там остановились:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Harbours &amp; Bays North
                    </Word>: $150, полностью оплачена двумя переводами по $75 (26 февраля и 5 марта), включая финальный
                    раунд с номерами страниц.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Остались открытыми
                    </Word> четыре позиции на общую сумму <Word>
                        <Bold />
                        $120
                    </Word>:
                </Line>
                <Paragraph>
                    <List ordered />
                    <Line>Обзорная карта «Where This Guide Takes You»: $60</Line>
                    <Line>Routes North: $30 (цену назвала ты)</Line>
                    <Line>Routes South (2025), платный раунд правок: $15</Line>
                    <Line>Harbours &amp; Bays South (2025), платный раунд правок: $15</Line>
                </Paragraph>
                <Line>
                    Финальное английское сообщение для Доми со всеми четырьмя пунктами было готово к отправке в WhatsApp.
                    Банковскую комиссию за март 2025 решили не поднимать.
                </Line>
            </Paragraph>
            <Paragraph>
                Что сейчас нужно? Например, Доми ответила или оплатила, пришёл новый заказ или правки по Harbours &amp;
                Bays, или нужно проверить, что дошло. Если есть новый экспорт переписки или скриншоты Wise, присылай, сверю.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Reference>https://claude.ai/chat/857c0398-0386-43b2-83d8-a301cc6af1b8</Reference>
                    Domi payment
                </Word>
            </Paragraph>
        </Message>
    </Chapter>
);
