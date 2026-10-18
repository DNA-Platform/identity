import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.cover.tsx';
import TheSynopsis from '../.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Normal body temperature and fever thresholds in children ]]( claude--Normal body temperature and fever thresholds in children--0f928900 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 February 2026: <Means>$[[ Normal body temperature and fever thresholds in children ]]( claude--Normal body temperature and fever thresholds in children--0f928900 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
