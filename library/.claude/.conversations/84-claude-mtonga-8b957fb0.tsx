import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mtonga--8b957fb0/.cover.tsx';
import TheSynopsis from './claude--mtonga--8b957fb0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[13 June 2026](2026-06-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MTONGA ]]( claude--MTONGA--8b957fb0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 116 exchanges: <Means>$[[ MTONGA ]]( claude--MTONGA--8b957fb0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
