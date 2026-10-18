import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--varenicline-availability-in-tbilisi-georgia--60454157/.cover.tsx';
import TheSynopsis from '../.conversations/claude--varenicline-availability-in-tbilisi-georgia--60454157/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 July 2026: <Means>$[[ Varenicline availability in Tbilisi Georgia ]]( claude--Varenicline availability in Tbilisi Georgia--60454157 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
