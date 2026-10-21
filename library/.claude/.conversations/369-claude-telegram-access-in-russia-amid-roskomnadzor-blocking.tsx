import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.cover.tsx';
import TheSynopsis from './claude--telegram-access-in-russia-amid-roskomnadzor-blocking--e0c39081/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram access in Russia amid Roskomnadzor blocking ]]( claude--Telegram access in Russia amid Roskomnadzor blocking--e0c39081 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 51 exchanges: <Means>$[[ Telegram access in Russia amid Roskomnadzor blocking ]]( claude--Telegram access in Russia amid Roskomnadzor blocking--e0c39081 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
