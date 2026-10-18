import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--p-equals-np-arguments-barriers-and-implications--0d254348/.cover.tsx';
import TheSynopsis from './claude--p-equals-np-arguments-barriers-and-implications--0d254348/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ P = NP: arguments, barriers, and implications ]]( claude--P = NP: arguments, barriers, and implications--0d254348 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ P = NP: arguments, barriers, and implications ]]( claude--P = NP: arguments, barriers, and implications--0d254348 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
