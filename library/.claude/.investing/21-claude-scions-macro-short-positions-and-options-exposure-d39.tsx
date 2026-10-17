import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Scion's macro short positions and options exposure ]]( claude--Scion's macro short positions and options exposure--d398390c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Scion's macro short positions and options exposure ]]( claude--Scion's macro short positions and options exposure--d398390c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
