import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[30 August 2026](2026-08-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding jihad and Muslim violence perceptions ]]( claude--Understanding jihad and Muslim violence perceptions--6fe8ad2a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 August 2026: <Means>$[[ Understanding jihad and Muslim violence perceptions ]]( claude--Understanding jihad and Muslim violence perceptions--6fe8ad2a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
