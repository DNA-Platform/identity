import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--varenicline-availability-in-tbilisi-georgia--60454157/.cover.tsx';
import TheSynopsis from './claude--varenicline-availability-in-tbilisi-georgia--60454157/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[30 July 2026](2026-07-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
