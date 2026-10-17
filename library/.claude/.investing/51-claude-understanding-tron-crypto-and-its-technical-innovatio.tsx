import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-tron-crypto-and-its-technical-innovations--c48524e1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 March 2026: <Means>$[[ Understanding TRON crypto and its technical innovations ]]( claude--Understanding TRON crypto and its technical innovations--c48524e1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
