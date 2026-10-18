import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--borderline-personality-disorder-symptoms--58aa30f6/.cover.tsx';
import TheSynopsis from './claude--borderline-personality-disorder-symptoms--58aa30f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
