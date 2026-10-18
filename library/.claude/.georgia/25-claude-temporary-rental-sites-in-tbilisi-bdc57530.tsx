import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--temporary-rental-sites-in-tbilisi--bdc57530/.cover.tsx';
import TheSynopsis from '../.conversations/claude--temporary-rental-sites-in-tbilisi--bdc57530/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
