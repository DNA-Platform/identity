import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 August 2026: <Means>$[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
