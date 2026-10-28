import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.cover.tsx';
import TheSynopsis from './claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
