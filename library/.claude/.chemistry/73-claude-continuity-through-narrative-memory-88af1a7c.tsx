import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--continuity-through-narrative-memory--88af1a7c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--continuity-through-narrative-memory--88af1a7c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Continuity through narrative memory ]]( claude--Continuity through narrative memory--88af1a7c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 May 2026: <Means>$[[ Continuity through narrative memory ]]( claude--Continuity through narrative memory--88af1a7c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
