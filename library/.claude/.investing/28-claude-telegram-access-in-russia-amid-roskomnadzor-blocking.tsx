import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram access in Russia amid Roskomnadzor blocking ]]( claude--Telegram access in Russia amid Roskomnadzor blocking--e0c39081 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Telegram access in Russia amid Roskomnadzor blocking ]]( claude--Telegram access in Russia amid Roskomnadzor blocking--e0c39081 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
