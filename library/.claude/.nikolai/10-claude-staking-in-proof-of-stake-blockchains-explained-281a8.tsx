import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
