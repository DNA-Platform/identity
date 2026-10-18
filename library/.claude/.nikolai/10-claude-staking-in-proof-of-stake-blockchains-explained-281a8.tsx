import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[30 January 2026](2026-01-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
