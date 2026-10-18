import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--debunking-the-mysterious-creature-video--99dac918/.cover.tsx';
import TheSynopsis from './claude--debunking-the-mysterious-creature-video--99dac918/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[6 April 2026](2026-04-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Debunking the mysterious creature video ]]( claude--Debunking the mysterious creature video--99dac918 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Debunking the mysterious creature video ]]( claude--Debunking the mysterious creature video--99dac918 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
