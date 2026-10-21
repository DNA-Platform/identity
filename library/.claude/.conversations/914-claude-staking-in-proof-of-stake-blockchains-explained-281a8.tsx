import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.cover.tsx';
import TheSynopsis from './claude--staking-in-proof-of-stake-blockchains-explained--281a83fa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[30 January 2026](2026-01-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Staking in proof-of-stake blockchains explained ]]( claude--Staking in proof-of-stake blockchains explained--281a83fa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
