import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cetirizine vs Claritin comparison ]]( claude--Cetirizine vs Claritin comparison--4055087b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 March 2026: <Means>$[[ Cetirizine vs Claritin comparison ]]( claude--Cetirizine vs Claritin comparison--4055087b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
