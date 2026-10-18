import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--legal-negotiation-strategy-review--65b2b5a1/.cover.tsx';
import TheSynopsis from './claude--legal-negotiation-strategy-review--65b2b5a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[26 April 2026](2026-04-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
