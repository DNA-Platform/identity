import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.cover.tsx';
import TheSynopsis from './claude--gastric-microbiome-in-humans-and-cats--3d3b3d93/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[24 April 2026](2026-04-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Gastric microbiome in humans and cats ]]( claude--Gastric microbiome in humans and cats--3d3b3d93 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
