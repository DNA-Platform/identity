import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.cover.tsx';
import TheSynopsis from '../.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Online shopping options for new Georgia residents ]]( claude--Online shopping options for new Georgia residents--05f502ea )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Online shopping options for new Georgia residents ]]( claude--Online shopping options for new Georgia residents--05f502ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
