import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--stablecoin-architecture-origins-and-tethers-conceptual-linea--fea3a58f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stablecoin architecture origins and Tether's conceptual lineage ]]( claude--Stablecoin architecture origins and Tether's conceptual lineage--fea3a58f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 August 2026: <Means>$[[ Stablecoin architecture origins and Tether's conceptual lineage ]]( claude--Stablecoin architecture origins and Tether's conceptual lineage--fea3a58f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
