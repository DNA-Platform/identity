import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--collatz-via-godel--35a0e705/.cover.tsx';
import TheSynopsis from '../.conversations/claude--collatz-via-godel--35a0e705/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
