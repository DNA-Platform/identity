import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.cover.tsx';
import TheSynopsis from '../.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
