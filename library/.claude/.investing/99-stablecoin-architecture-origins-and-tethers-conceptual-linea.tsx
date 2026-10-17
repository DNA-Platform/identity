import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.cover.tsx';
import TheSynopsis from '../.conversations/stablecoin-architecture-origins-and-tethers-conceptual-linea/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Stablecoin architecture origins and Tether's conceptual lineage ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 August 2026: <Means>$[[ Stablecoin architecture origins and Tether's conceptual lineage ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
