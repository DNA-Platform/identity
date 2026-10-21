import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 September 2026](2026-09-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-09-09T07:59:55.944328Z"
        >
            <Origin>01a0852e-4592-705f-a01a-ba779c404a4b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Индонезией и Малайзией -я прочитала, что туда будет безвиз с РФ на каких условиях в эти страны могут
                заезжать граждане америки?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-09T08:00:21.014323Z"
        >
            <Origin>01a0852e-4592-7160-8bcb-cba5c0892ece</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Indonesia visa on arrival US citizens 2026 requirements”</Action>
            <Action>Searched the web for “Malaysia visa free US citizens 90 days MDAC 2026”</Action>
            <Paragraph>Разные условия — Малайзия для американцев гораздо щедрее.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Малайзия
                </Word>Виза не нужна: американцы въезжают без визы на срок до 90 дней — туризм, короткие деловые визиты,
                транзит. Никакой предварительной подачи.
            </Paragraph>
            <Paragraph>Что нужно:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Паспорт, действительный минимум 6 месяцев с даты въезда, обратный или транзитный билет и подтверждение
                    достаточных средств
                </Line>
                <Line>
                    MDAC (Malaysia Digital Arrival Card) — обязателен для всех американцев перед каждым въездом, бесплатно,
                    подаётся на imigresen-online.imi.gov.my/mdac/main в течение 72 часов до прилёта. Сайты, требующие денег
                    за MDAC — мошенники.
                </Line>
                <Line>90 дней действуют и на сухопутных границах — с Таиландом и Сингапуром</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Индонезия
                </Word>Виза обязательна для всех граждан США — безвиза нет. Стандартный вариант — <Word>
                    <Bold />
                    e-VOA (виза B1)
                </Word>:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Подаётся онлайн на evisa.imigrasi.go.id, обработка 3–5 рабочих дней, сбор 500 000 IDR (~$35)</Line>
                <Line>30 дней, продлевается один раз ещё на 30; однократный въезд — при выезде из страны нужна новая</Line>
                <Line>Паспорт: 6 месяцев действия и минимум две чистые страницы</Line>
                <Line>
                    Плюс обязательная цифровая карта прибытия All Indonesia — единая форма (иммиграция, таможня, здоровье),
                    введена в конце 2025
                </Line>
                <Line>Для Бали отдельный туристический сбор 150 000 IDR (~$10), оплачивается онлайн через Love Bali</Line>
            </Paragraph>
            <Paragraph>
                Один нюанс: источники расходятся, можно ли ещё получить VOA прямо на стойке в аэропорту или обязательна
                предварительная онлайн-подача. В любом случае онлайн заранее — и дешевле по нервам, и открывает
                автоматические ворота.
            </Paragraph>
            <Paragraph>
                Так что если речь про длинную зимовку — Малайзия сильно удобнее. Индонезия для американцев потолок 60 дней
                за въезд.
            </Paragraph>
        </Message>
    </Chapter>
);
