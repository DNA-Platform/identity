import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
