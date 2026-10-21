import { Append, Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-01T08:58:22.323121Z"
        >
            <Origin>019e8267-e24d-73dc-a063-6415ebf8e12c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Переведи на английский:</Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-01T08:58:36.595837Z"
        >
            <Origin>019e8267-e24d-7c85-85a5-6effbba50385</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот перевод. Рекламный блок в середине я пропустила — это вставка, не часть статьи.</Paragraph>
            <Paragraph>
                Viruses and bacteria are transmitted from ticks to their victims during the bite. The saliva of these
                arachnids is a complex mixture of different molecules and contains so-called exosomes — microscopic
                extracellular "vesicles" that carry proteins and other biological signals between cells and tissues. These
                exosomal proteins help ticks attach firmly to the host's skin, feed unnoticed, and become fully engorged
                without triggering an immune response — even numbing the bite site.
            </Paragraph>
            <Paragraph>
                The authors of a new study published in <Word>
                    <Emphasis />
                    The EMBO Journal
                </Word> identified a new glycine-rich exosomal protein, GRP, which ticks secrete in their saliva while
                feeding. It turned out to play a key role in the transmission of pathogens from the parasite to its host. A
                team from the University of Tennessee (USA) studied the molecular mechanisms of this process and the
                protein's potential as a possible target for vaccines that block viral transmission.
            </Paragraph>
            <Paragraph>
                The researchers found that production of this protein increases as the tick feeds and engorges itself with
                blood. This facilitates the transfer of the pathogen from parasite to host.
            </Paragraph>
            <Paragraph>
                "Switching off" the gene responsible for producing this protein caused the ticks to feed worse, engorge
                poorly, lose weight, and shrink in size. In addition, both the viral load and the ability to transmit the
                virus to a healthy recipient dropped significantly. The scientists thus concluded that the exosomal protein
                GRP plays a dual role — it aids the tick in gorging on blood and in transmitting the pathogen, acting as a
                kind of intermediary in viral transmission. These findings have opened new possibilities for the prevention
                and control of tick-borne infections.
            </Paragraph>
            <Paragraph>
                In the lab, the scientists created a purified artificial variant of the protein, GST-GRP, and administered
                it as a vaccine to laboratory mice. After tick nymphs — previously infected with lymphocytic
                choriomeningitis virus — fed on the blood of the immunized mice for 48 hours, they shrank sharply in size
                and lost weight, and their viral load also fell substantially.
            </Paragraph>
            <Paragraph>
                This study showed that exosomes could become an effective target for developing vaccines against tick-borne
                infections. Instead of acting on the virus itself, the vaccine would target a molecule in the tick,
                preventing the parasite from feeding successfully and disrupting the pathogen transmission mechanism. By
                interrupting this process at an early stage, the scientists hope to halt the infection before it reaches the
                host.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-01T10:05:03.544797Z"
        >
            <Origin>019e82a4-f1ab-7fe8-8fc9-99094d91f916</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                КЛод, переведи мне все это на русский мне важно понять, кто кому и сколько отправил и куда
            </Paragraph>
            <Attachment>Uploaded “1780308297326_image.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-01T10:05:16.490618Z"
        >
            <Origin>019e82a4-f1ab-7cd8-8c36-11342ac1241d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Вот перевод платёжного поручения от Credo Bank:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Платёжное поручение (Payment Order)
                </Word>
            </Paragraph>
            <Paragraph>Дата операции: 2026-06-01 14:01:00 Напечатано: 2026-06-01 14:02:08</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Отправитель:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Имя: Анастасия Красавина</Line>
                <Line>Номер счёта: GE04CD0360000068550777</Line>
                <Line>Банк: АО «Кредо Банк» (JSC Credo Bank)</Line>
                <Line>Код банка: JSCRGE22</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Получатель:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Имя: ExpatHub Legal and Tax LLC</Line>
                <Line>Номер счёта: GE24BG0000000538406056</Line>
                <Line>Банк: АО «Банк Грузии» (Bank of Georgia)</Line>
                <Line>Код банка: BAGAGE22</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Детали:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Сумма: <Word>
                        <Bold />
                        1 168,20 GEL
                    </Word> (грузинских лари)
                </Line>
                <Line>Назначение платежа: LT14337-843</Line>
            </Paragraph>
            <Paragraph>
                Если коротко: <Word>
                    <Bold />
                    Анастасия Красавина
                </Word> со своего счёта в Credo Bank отправила <Word>
                    <Bold />
                    1 168,20 лари
                </Word> компании <Word>
                    <Bold />
                    ExpatHub Legal and Tax LLC
                </Word> на их счёт в Банке Грузии. В назначении платежа указан номер — LT14337-843, похоже на номер
                счёта-фактуры или договора (LT, скорее всего, инвойс на юридические/налоговые услуги, судя по названию
                получателя — «Legal and Tax»).
            </Paragraph>
            <Paragraph>
                Перевод прошёл успешно — статус «ამობეჭდილია» означает «распечатано» (то есть документ сформирован как
                подтверждение операции).
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
