import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--telegram-situation-in-russia-unfolding--9d7069cb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Telegram situation in Russia unfolding ]]( claude--Telegram situation in Russia unfolding--9d7069cb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
