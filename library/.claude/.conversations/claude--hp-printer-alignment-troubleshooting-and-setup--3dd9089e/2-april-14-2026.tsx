import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Title>[[ 14 April 2026 ]]</Title>
        <Message
            at="2026-04-14T15:07:44.957857Z"
        >
            <Origin>019d8c88-ba96-7caa-97c0-6271e65a7714</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                принтер начал печатать огромным масштабом и я вытащила листы во время его работы. после эьтого я зашла в это
                приложение и нажала отмену печати. он не хочет реагировать - печатать перестал, но задание вроде не
                отменено. я хочу печатать другое
            </Paragraph>
            <Attachment>Uploaded “1776179190844_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-14T15:07:59.152058Z"
        >
            <Origin>019d8c88-ba96-7056-8c11-e16b56d28249</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Вижу — задание застряло в очереди со статусом <Word>
                    <Bold />
                    "Printing, Error"
                </Word> и не отменяется кнопкой Cancel. Это классическая проблема с Windows Print Spooler. Вот что нужно
                сделать:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Шаг 1 — Принудительная очистка очереди:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Нажать <Word>
                        <Bold />
                        Win + R
                    </Word>, ввести <Word>
                        <Verbatim />
                        services.msc
                    </Word>, нажать Enter
                </Line>
                <Line>
                    Найти в списке <Word>
                        <Bold />
                        "Print Spooler"
                    </Word>
                </Line>
                <Line>
                    Кликнуть правой кнопкой → <Word>
                        <Bold />
                        "Stop"
                    </Word> (остановить)
                </Line>
                <Line>Не закрывать окно</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Шаг 2 — Удалить застрявший файл:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Открыть Проводник и перейти по адресу: <Word>
                        <Verbatim />
                        C:\Windows\System32\spool\PRINTERS
                    </Word>
                </Line>
                <Line>
                    Удалить <Word>
                        <Bold />
                        все файлы
                    </Word> в этой папке (саму папку не трогать)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Шаг 3 — Перезапустить Spooler:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Вернуться в <Word>
                        <Verbatim />
                        services.msc
                    </Word>
                </Line>
                <Line>
                    Снова кликнуть на <Word>
                        <Bold />
                        "Print Spooler"
                    </Word> → <Word>
                        <Bold />
                        "Start"
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Шаг 4 — Перезагрузить принтер:
                </Word>
            </Paragraph>
            <Paragraph>Выключить и включить физически (или вытащить шнур на 30 секунд).</Paragraph>
            <Paragraph>
                После этого очередь будет пустой и можно печатать новый документ. Главное — при следующей печати выбрать
                правильный масштаб/размер страницы перед отправкой задания.
            </Paragraph>
        </Message>
    </Chapter>
);
