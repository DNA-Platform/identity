import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--neuroscience-phd-programs-in-tbilisi--161be93b/.cover.tsx';
import TheSynopsis from './claude--neuroscience-phd-programs-in-tbilisi--161be93b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 41 exchanges: <Means>$[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
