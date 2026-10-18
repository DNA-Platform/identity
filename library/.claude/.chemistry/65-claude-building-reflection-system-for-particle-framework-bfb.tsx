import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.cover.tsx';
import TheSynopsis from '../.conversations/claude--building-reflection-system-for-particle-framework--bfbefa00/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Building reflection system for particle framework ]]( claude--Building reflection system for particle framework--bfbefa00 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 November 2025: <Means>$[[ Building reflection system for particle framework ]]( claude--Building reflection system for particle framework--bfbefa00 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
