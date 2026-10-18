import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--konsul-prime--12d855b8/.cover.tsx';
import TheSynopsis from './claude--konsul-prime--12d855b8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Konsul Prime ]]( claude--Konsul Prime--12d855b8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 172 exchanges: <Means>$[[ Konsul Prime ]]( claude--Konsul Prime--12d855b8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
