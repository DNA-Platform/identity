import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.cover.tsx';
import TheSynopsis from './claude--hiring-a-nanny-in-tbilisi-for-two-kids--bd886a96/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[11 August 2026](2026-08-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 102 exchanges: <Means>$[[ Hiring a nanny in Tbilisi for two kids ]]( claude--Hiring a nanny in Tbilisi for two kids--bd886a96 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
