import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 March 2026: <Means>$[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
