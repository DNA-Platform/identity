import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--cooking-at-high-altitude--648ff084/.cover.tsx';
import TheSynopsis from './claude--cooking-at-high-altitude--648ff084/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[26 November 2024](2024-11-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cooking at High Altitude ]]( claude--Cooking at High Altitude--648ff084 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Cooking at High Altitude ]]( claude--Cooking at High Altitude--648ff084 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
