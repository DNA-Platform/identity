import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--design-session-overview--5f8495c1/.cover.tsx';
import TheSynopsis from './claude--design-session-overview--5f8495c1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[15 October 2025](2025-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Design session overview ]]( claude--Design session overview--5f8495c1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 156 exchanges: <Means>$[[ Design session overview ]]( claude--Design session overview--5f8495c1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
