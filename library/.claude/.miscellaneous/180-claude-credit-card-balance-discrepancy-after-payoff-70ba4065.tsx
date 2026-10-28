import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.cover.tsx';
import TheSynopsis from '../.conversations/claude--credit-card-balance-discrepancy-after-payoff--70ba4065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[27 August 2026](2026-08-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 August 2026: <Means>$[[ Credit card balance discrepancy after payoff ]]( claude--Credit card balance discrepancy after payoff--70ba4065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
