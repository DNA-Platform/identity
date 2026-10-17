import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.cover.tsx';
import TheSynopsis from './claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[4 August 2026](2026-08-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stablecoin architecture origins and Tether's conceptual lineage ]]( claude--Stablecoin architecture origins and Tether's conceptual lineage--fea3a58f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Stablecoin architecture origins and Tether's conceptual lineage ]]( claude--Stablecoin architecture origins and Tether's conceptual lineage--fea3a58f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
