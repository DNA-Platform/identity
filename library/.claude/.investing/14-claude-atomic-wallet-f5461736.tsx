import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--atomic-wallet--f5461736/.cover.tsx';
import TheSynopsis from '../.conversations/claude--atomic-wallet--f5461736/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Atomic Wallet ]]( claude--Atomic Wallet--f5461736 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 January 2026: <Means>$[[ Atomic Wallet ]]( claude--Atomic Wallet--f5461736 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
