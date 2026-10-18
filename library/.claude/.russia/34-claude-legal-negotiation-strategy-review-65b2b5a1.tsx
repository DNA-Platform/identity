import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-negotiation-strategy-review--65b2b5a1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 April 2026: <Means>$[[ Legal negotiation strategy review ]]( claude--Legal negotiation strategy review--65b2b5a1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
