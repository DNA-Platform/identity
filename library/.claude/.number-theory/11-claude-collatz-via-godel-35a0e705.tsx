import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--collatz-via-godel--35a0e705/.cover.tsx';
import TheSynopsis from '../.conversations/claude--collatz-via-godel--35a0e705/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 June 2026: <Means>$[[ Collatz via Godel ]]( claude--Collatz via Godel--35a0e705 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
