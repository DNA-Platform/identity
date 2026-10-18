import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--wake-up-copenhagen-hotel-directions--a07786e2/.cover.tsx';
import TheSynopsis from './claude--wake-up-copenhagen-hotel-directions--a07786e2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Wake up Copenhagen hotel directions ]]( claude--Wake up Copenhagen hotel directions--a07786e2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
