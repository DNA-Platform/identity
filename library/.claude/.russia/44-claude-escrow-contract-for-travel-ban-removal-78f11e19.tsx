import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--escrow-contract-for-travel-ban-removal--78f11e19/.cover.tsx';
import TheSynopsis from '../.conversations/claude--escrow-contract-for-travel-ban-removal--78f11e19/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[20 August 2026](2026-08-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
