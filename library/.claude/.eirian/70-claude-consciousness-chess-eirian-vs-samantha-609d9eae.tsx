import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.cover.tsx';
import TheSynopsis from '../.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2025: <Means>$[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
