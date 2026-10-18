import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-17-february-2026--2d816692/.cover.tsx';
import TheSynopsis from './claude--untitled-17-february-2026--2d816692/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[17 February 2026](2026-02-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 17 February 2026 ]]( claude--Untitled, 17 February 2026--2d816692 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Untitled, 17 February 2026 ]]( claude--Untitled, 17 February 2026--2d816692 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
