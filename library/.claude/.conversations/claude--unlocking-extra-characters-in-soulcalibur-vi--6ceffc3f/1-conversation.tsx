import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 April 2026](2026-04-09)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-09T16:32:38.044823Z"
        >
            <Origin>019d7317-4b49-7d0c-a8e7-d3af368d1fa0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In Seoul caliber six, what do we need to do to get the extra players that we can use then in verse mode?
                Tell us in both English and Russian with simple language. Versions it just helped by beating the game in
                arcade mode.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-09T16:32:56.104946Z"
        >
            <Origin>019d7317-4b49-78a6-b1c2-e05fe0e22194</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “SoulCalibur VI unlock characters arcade mode versus”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    English:
                </Word>
            </Paragraph>
            <Paragraph>
                In <Word>
                    <Bold />
                    SoulCalibur VI
                </Word>, almost all base characters are available from the start in Versus mode. The one character you
                unlock by playing through the story is <Word>
                    <Bold />
                    Inferno
                </Word> — beat the main story in <Word>
                    <Bold />
                    Soul Chronicle
                </Word> mode to get him.
            </Paragraph>
            <Paragraph>
                Beating Arcade mode doesn't unlock new characters, but beating it on <Word>
                    <Bold />
                    Very Hard
                </Word> unlocks <Word>
                    <Bold />
                    Legendary difficulty
                </Word> for Arcade and Versus modes.
            </Paragraph>
            <Paragraph>
                The other extra characters (like Hilde, Haohmaru, 2B, etc.) are <Word>
                    <Bold />
                    DLC
                </Word> — you have to buy them separately or as a Season Pass.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    По-русски:
                </Word>
            </Paragraph>
            <Paragraph>
                В <Word>
                    <Bold />
                    SoulCalibur VI
                </Word> почти все базовые персонажи доступны сразу в режиме Versus. Единственный персонаж, которого нужно
                разблокировать — это <Word>
                    <Bold />
                    Инферно
                </Word>. Чтобы его получить, нужно пройти основной сюжет в режиме <Word>
                    <Bold />
                    Soul Chronicle
                </Word>.
            </Paragraph>
            <Paragraph>
                Прохождение Arcade mode не открывает новых персонажей, но если пройти его на сложности <Word>
                    <Bold />
                    Very Hard
                </Word>, откроется уровень сложности <Word>
                    <Bold />
                    Legendary
                </Word> для Arcade и Versus.
            </Paragraph>
            <Paragraph>
                Остальные дополнительные персонажи (Хильда, Хаомару, 2B и другие) — это <Word>
                    <Bold />
                    DLC
                </Word>, их нужно покупать отдельно или в составе Season Pass.
            </Paragraph>
        </Message>
    </Chapter>
);
