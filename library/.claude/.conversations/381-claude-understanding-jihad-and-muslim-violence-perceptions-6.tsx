import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.cover.tsx';
import TheSynopsis from './claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[30 August 2026](2026-08-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding jihad and Muslim violence perceptions ]]( claude--Understanding jihad and Muslim violence perceptions--6fe8ad2a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Understanding jihad and Muslim violence perceptions ]]( claude--Understanding jihad and Muslim violence perceptions--6fe8ad2a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
