import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--escrow-contract-for-travel-ban-removal--78f11e19/.cover.tsx';
import TheSynopsis from '../.conversations/claude--escrow-contract-for-travel-ban-removal--78f11e19/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 August 2026: <Means>$[[ Escrow contract for travel ban removal ]]( claude--Escrow contract for travel ban removal--78f11e19 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
