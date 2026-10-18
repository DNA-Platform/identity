import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[9 July 2026](2026-07-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 July 2026: <Means>$[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
