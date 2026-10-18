import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--debunking-the-mysterious-creature-video--99dac918/.cover.tsx';
import TheSynopsis from '../.conversations/claude--debunking-the-mysterious-creature-video--99dac918/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Debunking the mysterious creature video ]]( claude--Debunking the mysterious creature video--99dac918 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 April 2026: <Means>$[[ Debunking the mysterious creature video ]]( claude--Debunking the mysterious creature video--99dac918 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
