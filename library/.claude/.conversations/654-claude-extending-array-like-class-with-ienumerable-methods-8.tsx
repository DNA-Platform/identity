import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--extending-array-like-class-with-ienumerable-methods--885561b0/.cover.tsx';
import TheSynopsis from './claude--extending-array-like-class-with-ienumerable-methods--885561b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[5 January 2025](2025-01-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extending Array-like Class with IEnumerable Methods ]]( claude--Extending Array-like Class with IEnumerable Methods--885561b0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 96 exchanges: <Means>$[[ Extending Array-like Class with IEnumerable Methods ]]( claude--Extending Array-like Class with IEnumerable Methods--885561b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
