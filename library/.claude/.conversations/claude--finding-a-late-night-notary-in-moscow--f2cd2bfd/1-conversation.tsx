import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-11T12:40:51.784128Z"
        >
            <Origin>019bad12-d71f-75fc-bbb7-b9d4fa2cd4e6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                If Ana gets to Moscow at 3:00 pm tomorrow, will she be able to find a notary that works late to help her
                execute some actions? If so, how should she coordinate with them? How does she find them and how does she
                reach out to make a meeting or whatever?
            </Paragraph>
        </Message>
        <Message
            at="2026-01-11T12:41:14.853640Z"
        >
            <Origin>019bad12-d71f-75fc-bbb7-b9d5a999f116</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used user time v0</Action>
            <Action>Searched the web for “Moscow notary working hours evening late 2025”</Action>
            <Action>Searched the web for “нотариус Москва работает вечером до 20 21 часов”</Action>
            <Paragraph>
                Good news! There are notaries in Moscow that work late hours. One well-reviewed office works weekdays from
                10:00 to 21:00 and weekends from 10:00 to 20:00. So if Ana arrives at 3pm tomorrow (Monday), she'll have
                until 9pm to get things done, which gives her a solid 6-hour window.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Best Option: Notary Chernigov Igor Olegovich
                </Word>
            </Paragraph>
            <Paragraph>
                Location: Страстной бульвар, д.7, этаж 2 (Strastoy Bulvar, building 7, 2nd floor) — near metro stations
                Pushkinskaya/Chekhovskaya, central Moscow.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How to coordinate:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Phone ahead
                    </Word>: Call +7 (495) 767-12-77 or +7 (495) 609-00-08 — they also accept questions via messenger
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Book online
                    </Word>: They have online booking available on their website (rosnotarius.ru), or she can just walk in
                    without an appointment
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bonus features
                    </Word>: There's a translation bureau on-site, which is convenient if any documents need certified
                    translation. They can also do apostille.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What she should prepare ahead of time:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Call today or first thing tomorrow to describe what specific actions she needs (доверенность, заявление,
                    etc.)
                </Line>
                <Line>Confirm which documents to bring — Russian internal passport is essential</Line>
                <Line>
                    Ask about payment methods (though reviews mention reasonable rates and they seem to work with both
                    individuals and legal entities)
                </Line>
            </Paragraph>
            <Paragraph>
                Reviews note that queues move quickly and they work "до последнего клиента" (until the last client), so even
                arriving at 3pm should give her plenty of cushion.
            </Paragraph>
            <Paragraph>
                Would it help if I drafted a short message in Russian that she could send via WhatsApp/Telegram to that
                number to explain what she needs and book a time slot?
            </Paragraph>
        </Message>
    </Chapter>
);
