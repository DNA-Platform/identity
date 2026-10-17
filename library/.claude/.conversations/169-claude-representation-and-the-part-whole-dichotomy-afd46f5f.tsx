import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--representation-and-the-part-whole-dichotomy--afd46f5f/.cover.tsx';
import TheSynopsis from './claude--representation-and-the-part-whole-dichotomy--afd46f5f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[14 June 2026](2026-06-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Representation &amp; the Part - Whole Dichotomy ]]( claude--Representation &amp; the Part - Whole Dichotomy--afd46f5f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ Representation &amp; the Part - Whole Dichotomy ]]( claude--Representation &amp; the Part - Whole Dichotomy--afd46f5f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
