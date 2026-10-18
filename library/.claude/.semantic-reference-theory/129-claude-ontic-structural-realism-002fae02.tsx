import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ontic-structural-realism--002fae02/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ontic-structural-realism--002fae02/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--002fae02 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 June 2026: <Means>$[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--002fae02 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
