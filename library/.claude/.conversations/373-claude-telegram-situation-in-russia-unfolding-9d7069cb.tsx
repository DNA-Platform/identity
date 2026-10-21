import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-situation-in-russia-unfolding--9d7069cb/.cover.tsx';
import TheSynopsis from './claude--telegram-situation-in-russia-unfolding--9d7069cb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 61 exchanges: <Means>$[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
