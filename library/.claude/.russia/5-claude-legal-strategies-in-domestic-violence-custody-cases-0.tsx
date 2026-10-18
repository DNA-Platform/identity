import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--legal-strategies-in-domestic-violence-custody-cases--00982e61/.cover.tsx';
import TheSynopsis from '../.conversations/claude--legal-strategies-in-domestic-violence-custody-cases--00982e61/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Legal strategies in domestic violence custody cases ]]( claude--Legal strategies in domestic violence custody cases--00982e61 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Legal strategies in domestic violence custody cases ]]( claude--Legal strategies in domestic violence custody cases--00982e61 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
