import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--varenicline-availability-in-tbilisi-georgia--60454157/.cover.tsx';
import TheSynopsis from '../.conversations/claude--varenicline-availability-in-tbilisi-georgia--60454157/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[29 July 2026](2026-07-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 July 2026: <Means>$[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
