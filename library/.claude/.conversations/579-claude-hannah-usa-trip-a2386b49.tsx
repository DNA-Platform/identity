import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--hannah-usa-trip--a2386b49/.cover.tsx';
import TheSynopsis from './claude--hannah-usa-trip--a2386b49/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[13 May 2026](2026-05-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hannah USA trip ]]( claude--Hannah USA trip--a2386b49 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 246 exchanges: <Means>$[[ Hannah USA trip ]]( claude--Hannah USA trip--a2386b49 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
