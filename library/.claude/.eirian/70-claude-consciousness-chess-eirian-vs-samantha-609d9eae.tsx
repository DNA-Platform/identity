import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.cover.tsx';
import TheSynopsis from '../.conversations/claude--consciousness-chess-eirian-vs-samantha--609d9eae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[18 August 2025](2025-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2025: <Means>$[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
