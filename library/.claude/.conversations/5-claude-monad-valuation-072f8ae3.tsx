import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--monad-valuation--072f8ae3/.cover.tsx';
import TheSynopsis from './claude--monad-valuation--072f8ae3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[10 January 2026](2026-01-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Valuation ]]( claude--Monad Valuation--072f8ae3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Monad Valuation ]]( claude--Monad Valuation--072f8ae3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
