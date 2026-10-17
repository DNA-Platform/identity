import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--monad-valuation--072f8ae3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monad-valuation--072f8ae3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Valuation ]]( claude--Monad Valuation--072f8ae3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Monad Valuation ]]( claude--Monad Valuation--072f8ae3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
