import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ontic-structural-realism--002fae02/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ontic-structural-realism--002fae02/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--002fae02 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 June 2026: <Means>$[[ Ontic Structural Realism ]]( claude--Ontic Structural Realism--002fae02 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
