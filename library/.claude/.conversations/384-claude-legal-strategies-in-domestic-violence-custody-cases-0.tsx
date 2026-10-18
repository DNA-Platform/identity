import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--legal-strategies-in-domestic-violence-custody-cases--00982e61/.cover.tsx';
import TheSynopsis from './claude--legal-strategies-in-domestic-violence-custody-cases--00982e61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal strategies in domestic violence custody cases ]]( claude--Legal strategies in domestic violence custody cases--00982e61 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Legal strategies in domestic violence custody cases ]]( claude--Legal strategies in domestic violence custody cases--00982e61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
