import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[26 April 2026](2026-04-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 April 2026: <Means>$[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
