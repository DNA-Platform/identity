import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.cover.tsx';
import TheSynopsis from '../.conversations/understanding-perpetual-leverage-and-liquidation-risks-on-to/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding perpetual leverage and liquidation risks on TON ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 April 2026: <Means>$[[ Understanding perpetual leverage and liquidation risks on TON ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
