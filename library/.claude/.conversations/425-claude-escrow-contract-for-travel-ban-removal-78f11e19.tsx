import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--escrow-contract-for-travel-ban-removal--78f11e19/.cover.tsx';
import TheSynopsis from './claude--escrow-contract-for-travel-ban-removal--78f11e19/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
