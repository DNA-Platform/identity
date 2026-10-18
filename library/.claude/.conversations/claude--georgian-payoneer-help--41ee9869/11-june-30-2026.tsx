import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[30 June 2026](2026-06-30)</Date>
        </Dated>
        <Title>[[ 30 June 2026 ]]</Title>
        <Message
            at="2026-06-30T06:45:57.319781Z"
        >
            <Origin>019f1746-fd41-78c0-bd34-972df8f7712e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, почему Payoneer не принимает этот мой документ с такой формулировкой на этапе прикрепления фото? как
                он может понимать, то это или нет?
            </Paragraph>
            <Attachment>Uploaded “1782801942569_image.png”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “photo_2026-06-30_10-43-54.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-30T06:46:39.294862Z"
        >
            <Origin>019f1746-fd41-789f-b262-c5963ef86584</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Ана, понимаю фрустрацию, но давай разберём трезво. Payoneer написал: «<Word>
                    <Bold />
                    It looks like you uploaded the wrong document
                </Word>» - «похоже, вы загрузили не тот документ». Ключевое слово - «<Word>
                    <Bold />
                    похоже
                </Word>». Это почти наверняка <Word>
                    <Bold />
                    автоматический отказ ещё до человека
                </Word>, и вот как он «понимает».
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Как это работает технически:
                </Word> на этом шаге документ сначала смотрит <Word>
                    <Bold />
                    не человек, а автоматический классификатор
                </Word> (распознавание изображений). Он пытается определить тип документа по его виду и тексту. И вот где он
                спотыкается на твоей справке:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Это не похоже на «statement» в их шаблоне.
                    </Word> Помнишь их образец (MetroBank)? Там сверху - название и адрес банка, дата периода «01.11–30.11»,
                    блок транзакций. Это классический формат <Word>
                        <Bold />
                        выписки
                    </Word>. А у тебя - <Word>
                        <Bold />
                        certificate / справка
                    </Word> с таблицей счетов и нулевыми балансами. Для глаза человека это явно банковский документ, а для
                    автоклассификатора форма непривычная - он не находит признаков «statement» и помечает «wrong document».
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Нулевые балансы.
                    </Word> Алгоритм может цепляться за то, что нет ни одной транзакции и баланс 0.00 - и трактовать это как
                    «пустой/нерелевантный документ», хотя мы знаем, что для нового счёта это нормально.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Качество фото.
                    </Word> Снимок чуть смазан, под наклоном, печать перекрывает подпись. Если OCR не смог уверенно считать
                    имя/IBAN/название банка - это ещё одна причина авто-отказа.
                </Line>
            </Paragraph>
            <Paragraph>
                То есть проблема <Word>
                    <Bold />
                    не в том, что документ неправильный
                </Word> - он правильный, мы это проверяли. Проблема в том, что <Word>
                    <Bold />
                    автомат не распознал его как нужный тип
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Что я советую, по порядку:
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Сначала проверь History (это важно!).
                </Word> В прошлый раз во вкладке History у тебя «Bank Statement» стоял <Word>
                    <Bold />
                    Approved
                </Word>. То есть этот же документ уже <Word>
                    <Bold />
                    был принят человеком
                </Word>. Возможно, сейчас отбился именно автомат на повторной загрузке, а реально требование уже закрыто.
                Зайди в Verification Center → History и посмотри: «Bank Statement» всё ещё Approved? Если да - <Word>
                    <Bold />
                    возможно, грузить вообще не нужно
                </Word>, пункт висит из-за рассинхрона.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Если грузить надо - сделай нормальный скан, не фото.
                </Word> Это, скорее всего, решит проблему с распознаванием:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    идеально - <Word>
                        <Bold />
                        PDF-скан
                    </Word> (через приложение типа сканера на телефоне), а не фотография;
                </Line>
                <Line>ровно, при хорошем свете, весь лист в кадре, без наклона и теней;</Line>
                <Line>
                    следи, чтобы <Word>
                        <Bold />
                        печать не перекрывала текст
                    </Word> имени/IBAN.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Если справка снова отобьётся - запроси у Credo именно «account statement» (выписку), а не «certificate».
                </Word> Раз автомат ищет формат выписки, дай ему выписку: тот же бизнес-счёт, за последний месяц, с шапкой
                (имя, IBAN, банк) и строкой операций (даже если она «no transactions» - но в формате выписки). Это будет
                ближе к их шаблону, и автомат распознает. Персональный банкир в Credo сделает и такой документ.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Не загружай одно и то же фото повторно.
                </Word> Если автомат уже отбил этот файл, второй раз тот же файл он отобьёт так же. Меняй либо формат
                (чистый PDF-скан), либо тип документа (выписка вместо справки).
            </Paragraph>
            <Paragraph>
                Коротко: документ верный, но автоклассификатор Payoneer не узнал в нём «выписку» - из-за формата справки,
                нулевых балансов и качества фото. <Word>
                    <Bold />
                    Сначала проверь History
                </Word> (может, уже Approved и грузить не надо). Если надо - дай <Word>
                    <Bold />
                    чистый PDF-скан
                </Word>, а лучше <Word>
                    <Bold />
                    выписку (statement)
                </Word> из Credo в их привычном формате.
            </Paragraph>
            <Paragraph>
                Покажи мне, что сейчас в History по строке Bank Statement - от этого зависит, грузить вообще или нет.
            </Paragraph>
        </Message>
    </Chapter>
);
