import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--temporary-rental-sites-in-tbilisi--bdc57530/.cover.tsx';
import TheSynopsis from '../.conversations/claude--temporary-rental-sites-in-tbilisi--bdc57530/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Temporary rental sites in Tbilisi ]]( claude--Temporary rental sites in Tbilisi--bdc57530 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
