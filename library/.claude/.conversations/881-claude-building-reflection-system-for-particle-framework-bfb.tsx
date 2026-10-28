import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--building-reflection-system-for-particle-framework--bfbefa00/.cover.tsx';
import TheSynopsis from './claude--building-reflection-system-for-particle-framework--bfbefa00/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[7 November 2025](2025-11-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Building reflection system for particle framework ]]( claude--Building reflection system for particle framework--bfbefa00 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Building reflection system for particle framework ]]( claude--Building reflection system for particle framework--bfbefa00 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
