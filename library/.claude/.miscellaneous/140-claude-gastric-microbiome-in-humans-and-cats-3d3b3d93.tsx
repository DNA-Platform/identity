import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.cover.tsx';
import TheSynopsis from '../.conversations/claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 24 April 2026: <Means>$[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
