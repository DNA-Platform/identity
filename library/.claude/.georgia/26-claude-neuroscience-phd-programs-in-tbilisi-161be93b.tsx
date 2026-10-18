import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
