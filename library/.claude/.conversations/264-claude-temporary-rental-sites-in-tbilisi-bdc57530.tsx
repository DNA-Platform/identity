import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--temporary-rental-sites-in-tbilisi--bdc57530/.cover.tsx';
import TheSynopsis from './claude--temporary-rental-sites-in-tbilisi--bdc57530/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
