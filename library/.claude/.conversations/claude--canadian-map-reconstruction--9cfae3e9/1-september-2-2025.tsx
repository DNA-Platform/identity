import { Append, Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Artifact, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[2 September 2025](2025-09-02)</Date>
        </Dated>
        <Title>[[ 2 September 2025 ]]</Title>
        <Message
            at="2025-09-02T08:49:59.469136Z"
        >
            <Origin>c5c2bf1b-205c-471d-9174-fa603aca62a3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Клод, а ты можешь соединить все эти кусочки карты Канады в одну? хотя ьы примерно? чтобы я увидела всю
                картинку местности
            </Paragraph>
            <Attachment>Uploaded “solace.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “temagami.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “ishpatina.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “leg2 meteor to shining.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “mattachewangowganda.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “mattachewangowganda1.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “Ontario map.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “route 1.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “route 2.jpg”, whose content the export does not carry</Attachment>
            <Attachment>Uploaded “route 3.jpg”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-09-02T08:50:58.033327Z"
        >
            <Origin>37fec718-dfd7-48ad-b6a0-63ed427c4aa2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Да, я могу создать объединенную карту на основе всех этих кусочков! Из изображений видно, что это область в
                северной части Онтарио, включающая части округов Тимискаминг и Садбери. Позвольте мне создать составную
                карту, которая покажет общую картину местности.
            </Paragraph>
            <Artifact
                identifier="объединенная-карта-северной-онтарио.v1"
                type=".html"
                artifact="canadian_terrain_map"
                place="объединенная-карта-северной-онтарио-v1"
            >
                Made the artifact “Объединенная карта северной Онтарио”
            </Artifact>
            <Paragraph>
                Я создал объединенную карту, основанную на всех кусочках, которые вы показали. Карта показывает общую
                территорию северной Онтарио, включая:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Основные регионы:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Район Тимискаминг на севере (с озерами Lady Evelyn-Smoothwater и Smith Lake)</Line>
                <Line>Центральную лесистую зону Северного Йорстона</Line>
                <Line>Район Садбери на юге (с рекой West Montreal River и городом Matachewan)</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Ключевые водоемы:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Крупные озера: Smoothwater Lake, Mihell Lake</Line>
                <Line>Речная сеть, включая West Montreal River и Mississagi River</Line>
                <Line>Множество малых озер, характерных для Канадского щита</Line>
            </Paragraph>
            <Paragraph>
                Это примерная реконструкция на основе ваших изображений. Территория покрывает около 150x200 км типичного
                ландшафта северной Онтарио с характерными для этого региона озерами ледникового происхождения, бореальными
                лесами и скальными выходами Канадского щита.
            </Paragraph>
            <Paragraph>
                Красные точки на карте показывают примерные локации, которые были отмечены на ваших оригинальных
                изображениях.
            </Paragraph>
        </Message>
        <Append
            identifier="объединенная-карта-северной-онтарио.v1"
            type=".html"
        >
            ![[ объединенная-карта-северной-онтарио.v1.html ]]
        </Append>
        <Append
            identifier="объединенная-карта-северной-онтарио"
            type=".html"
        >
            ![[ объединенная-карта-северной-онтарио.html ]]
        </Append>
    </Chapter>
);
