import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.cover.tsx';
import TheSynopsis from './claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[26 February 2026](2026-02-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Normal body temperature and fever thresholds in children ]]( claude--Normal body temperature and fever thresholds in children--0f928900 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Normal body temperature and fever thresholds in children ]]( claude--Normal body temperature and fever thresholds in children--0f928900 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
