import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.cover.tsx';
import TheSynopsis from './claude--weight-bearing-progression-after-calcaneal-osteotomy--91950b31/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[25 January 2026](2026-01-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Weight-bearing progression after calcaneal osteotomy ]]( claude--Weight-bearing progression after calcaneal osteotomy--91950b31 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Weight-bearing progression after calcaneal osteotomy ]]( claude--Weight-bearing progression after calcaneal osteotomy--91950b31 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
