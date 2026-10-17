import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--scions-macro-short-positions-and-options-exposure--d398390c/.cover.tsx';
import TheSynopsis from './claude--scions-macro-short-positions-and-options-exposure--d398390c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Scion's macro short positions and options exposure ]]( claude--Scion's macro short positions and options exposure--d398390c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ Scion's macro short positions and options exposure ]]( claude--Scion's macro short positions and options exposure--d398390c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
