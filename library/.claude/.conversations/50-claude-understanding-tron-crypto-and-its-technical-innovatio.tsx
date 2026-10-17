import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.cover.tsx';
import TheSynopsis from './claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
