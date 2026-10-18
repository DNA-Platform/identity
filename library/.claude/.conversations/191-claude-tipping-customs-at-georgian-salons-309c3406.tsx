import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--tipping-customs-at-georgian-salons--309c3406/.cover.tsx';
import TheSynopsis from './claude--tipping-customs-at-georgian-salons--309c3406/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Tipping customs at Georgian salons ]]( claude--Tipping customs at Georgian salons--309c3406 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
