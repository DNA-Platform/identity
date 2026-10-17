import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--atomic-wallet--f5461736/.cover.tsx';
import TheSynopsis from './claude--atomic-wallet--f5461736/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Atomic Wallet ]]( claude--Atomic Wallet--f5461736 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Atomic Wallet ]]( claude--Atomic Wallet--f5461736 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
