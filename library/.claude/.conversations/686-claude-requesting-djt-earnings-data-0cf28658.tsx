import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--requesting-djt-earnings-data--0cf28658/.cover.tsx';
import TheSynopsis from './claude--requesting-djt-earnings-data--0cf28658/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[7 November 2024](2024-11-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Requesting DJT Earnings Data ]]( claude--Requesting DJT Earnings Data--0cf28658 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Requesting DJT Earnings Data ]]( claude--Requesting DJT Earnings Data--0cf28658 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
