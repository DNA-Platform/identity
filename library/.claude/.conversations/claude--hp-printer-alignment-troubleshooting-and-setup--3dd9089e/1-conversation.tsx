import { Bold, Chapter, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-05T10:39:43.178301Z"
        >
            <Origin>019d5d3a-afeb-7275-94ee-41b07a91d741</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, we have to try to set up this printer. Please research the official documents from HP.. We’re going to
                have to troubleshoot a kind of difficult issue. It seems to have gotten stuck on some sort of alignment
                where we scan a piece of paper. Also, it would be good to set up my computer to be able to print from it so
                look up what I need to do on my computer to be able to do that and let’s start troubleshooting.
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-05T10:40:26.992691Z"
        >
            <Origin>019d5d3a-afeb-73a3-b1c3-dc3b78b8ca93</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “HP Smart Tank 582 printer alignment setup troubleshoot site:support.hp.com”
            </Action>
            <Action>Fetched https://support.hp.com/us-en/document/ish_4512646-4000669-16</Action>
            <Action>Fetched https://support.hp.com/sg-en/document/ish_2040903-1789466-16</Action>
            <Action>Searched the web for “HP Smart Tank 582 stuck on alignment scan page fix”</Action>
            <Action>Searched the web for “HP Smart Tank 582 setup computer Windows Mac driver install HP Smart app”</Action>
            <Paragraph>Good, I have enough to work with. Here's the full picture:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Setting up your computer first
                </Word>
            </Paragraph>
            <Paragraph>
                The easiest path is the <Word>
                    <Bold />
                    HP Smart app
                </Word> — it handles drivers, Wi-Fi setup, and gives you access to alignment tools all in one place.
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Windows
                    </Word>: Install from the <Word>
                        <Reference>https://apps.microsoft.com/detail/9wzdncrfhwlh</Reference>
                        Microsoft Store
                    </Word> or search "HP Smart" there
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mac
                    </Word>: Install from the <Word>
                        <Reference>https://apps.apple.com/us/app/hp-smart-for-desktop/id1474276998</Reference>
                        Mac App Store
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                Don't connect a USB cable until the installer specifically prompts you to — if you're going wireless, make
                sure the printer is on your Wi-Fi network first. The 582 supports Wi-Fi, so you'll likely be connecting
                wirelessly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The alignment issue
                </Word>
            </Paragraph>
            <Paragraph>
                The alignment process on first setup works like this: the printer prints a page, you place it face-down on
                the scanner glass, and the printer scans it to calibrate. If it's stuck, here's the sequence to try:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1 — Make sure the page is placed correctly.
                </Word> Lift the scanner lid, place the alignment page print-side down on the scanner glass, and position it
                according to the engraved guides around the glass. This is the most common reason it gets stuck — the page
                is slightly off.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2 — Power cycle.
                </Word> With the printer turned on, disconnect the power cord from the printer, unplug from the wall, wait
                60 seconds, reconnect to a wall outlet, and turn on. HP specifically recommends plugging directly into a
                wall outlet, not a power strip.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3 — Paper quality.
                </Word> Try using a fresh stack of plain white paper — older paper can cause alignment failures due to
                slight warping or moisture absorption.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 4 — Clean the scanner glass.
                </Word> Dust or smudges on the scanner glass can interfere with alignment page detection — clean it
                thoroughly and retry.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 5 — If it keeps looping
                </Word>, you can cancel and re-trigger alignment manually: open the HP Smart app, go to Printer Settings →
                Tools / Advanced Settings → Align Printhead, and print the page fresh from there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What to tell me next
                </Word>
            </Paragraph>
            <Paragraph>A few things would help narrow this down fast:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Is the printer printing the alignment page and then failing when it tries to scan it — or is it not even
                    printing the page?
                </Line>
                <Line>What does the printer's control panel display say when it's stuck?</Line>
                <Line>Are you on Windows or Mac?</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-04-05T10:42:46.683485Z"
        >
            <Origin>019d5d3d-7e39-796b-85ff-aaf63e97b389</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try to infer something about this from the docs about what state my printer is in right now with these
                particular lights
            </Paragraph>
            <Attachment>Uploaded “photo.jpeg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-05T10:43:25.982927Z"
        >
            <Origin>019d5d3d-7e39-76bb-89f5-9e1f957cc42b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>
                Searched the web for “HP Smart Tank 582 control panel display icons meaning WiFi copy button lit cyan”
            </Action>
            <Paragraph>Here's my reading of the panel state, cross-referenced with the HP documentation:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    WiFi button (solid blue)
                </Word> — when the printer is connected successfully to a Wi-Fi network, the Wi-Fi light stops blinking and
                remains solid. So you're connected to the network. Good.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The display
                </Word> — it's showing a device/computer icon plus the WiFi icon at the top, with "00" and a document icon
                at the bottom. The number counter shows the number of copies during a copy job, and the document icon
                appears when the printer is in Document Copy mode. The device icon alongside WiFi likely indicates Wi-Fi
                Direct status or network connection.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The color copy button lit cyan
                </Word> — this is the most important one for your alignment issue. During printhead alignment: open the
                scanner lid, place the printed alignment page print-side down on the scanner glass, and then press the
                blinking copy button to scan the page.
            </Paragraph>
            <Paragraph>
                So the most likely interpretation: <Word>
                    <Bold />
                    the printer has already printed the alignment page and is now waiting for you to place it on the scanner glass and press that cyan copy button to complete the scan.
                </Word> It's not frozen — it's just sitting there waiting for your input.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Action to take right now:
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Find the alignment page that printed (it should have a pattern of lines/blocks on it)</Line>
                <Line>Lift the scanner lid</Line>
                <Line>Place it face-down on the scanner glass, using the corner guides to position it correctly</Line>
                <Line>Press that glowing cyan copy button</Line>
            </Paragraph>
            <Paragraph>Does the alignment page exist somewhere, or did it never print?</Paragraph>
        </Message>
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
