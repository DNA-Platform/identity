import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ontic-structural-realism--3b54b751/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ontic-structural-realism--3b54b751/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[15 June 2026](2026-06-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--3b54b751 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 June 2026: <Means>$[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--3b54b751 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
