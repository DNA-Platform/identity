import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 July 2026: <Means>$[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
