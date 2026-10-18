import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--collatz-via-godel--35a0e705/.cover.tsx';
import TheSynopsis from './claude--collatz-via-godel--35a0e705/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
