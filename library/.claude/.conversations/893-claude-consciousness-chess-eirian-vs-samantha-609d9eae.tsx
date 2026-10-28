import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--consciousness-chess-eirian-vs-samantha--609d9eae/.cover.tsx';
import TheSynopsis from './claude--consciousness-chess-eirian-vs-samantha--609d9eae/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[22 August 2025](2025-08-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Title>
        <Paragraph>
            <Caption />
            A conversation, 144 exchanges: <Means>$[[ Consciousness Chess - Eirian vs Samantha ]]( claude--Consciousness Chess - Eirian vs Samantha--609d9eae )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
