import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.cover.tsx';
import TheSynopsis from '../.conversations/claude--24-7-convenience-stores-in-tbilisi--a423be66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ 24∕7 convenience stores in Tbilisi ]]( claude--24∕7 convenience stores in Tbilisi--a423be66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
