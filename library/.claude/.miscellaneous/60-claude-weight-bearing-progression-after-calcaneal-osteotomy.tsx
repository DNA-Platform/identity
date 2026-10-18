import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.cover.tsx';
import TheSynopsis from '../.conversations/claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Weight-bearing progression after calcaneal osteotomy ]]( claude--Weight-bearing progression after calcaneal osteotomy--91950b31 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 January 2026: <Means>$[[ Weight-bearing progression after calcaneal osteotomy ]]( claude--Weight-bearing progression after calcaneal osteotomy--91950b31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
