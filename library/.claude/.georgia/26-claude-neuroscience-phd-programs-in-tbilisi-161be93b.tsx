import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--neuroscience-phd-programs-in-tbilisi--161be93b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Neuroscience PhD programs in Tbilisi ]]( claude--Neuroscience PhD programs in Tbilisi--161be93b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
