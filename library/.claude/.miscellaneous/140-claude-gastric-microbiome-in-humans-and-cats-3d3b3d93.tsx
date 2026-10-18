import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.cover.tsx';
import TheSynopsis from '../.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 April 2026: <Means>$[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
