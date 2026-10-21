import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--graph-databases-and-recursive-hierarchies--9b892575/.cover.tsx';
import TheSynopsis from './claude--graph-databases-and-recursive-hierarchies--9b892575/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Graph databases and recursive hierarchies ]]( claude--Graph databases and recursive hierarchies--9b892575 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Graph databases and recursive hierarchies ]]( claude--Graph databases and recursive hierarchies--9b892575 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
