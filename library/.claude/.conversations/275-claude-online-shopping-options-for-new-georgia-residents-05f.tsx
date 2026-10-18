import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--online-shopping-options-for-new-georgia-residents--05f502ea/.cover.tsx';
import TheSynopsis from './claude--online-shopping-options-for-new-georgia-residents--05f502ea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[5 March 2026](2026-03-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Online shopping options for new Georgia residents ]]( claude--Online shopping options for new Georgia residents--05f502ea )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Online shopping options for new Georgia residents ]]( claude--Online shopping options for new Georgia residents--05f502ea )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
