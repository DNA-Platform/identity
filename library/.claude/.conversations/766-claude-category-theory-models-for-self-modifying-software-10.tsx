import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--category-theory-models-for-self-modifying-software--10d63755/.cover.tsx';
import TheSynopsis from './claude--category-theory-models-for-self-modifying-software--10d63755/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[17 June 2026](2026-06-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Category theory models for self-modifying software ]]( claude--Category theory models for self-modifying software--10d63755 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Category theory models for self-modifying software ]]( claude--Category theory models for self-modifying software--10d63755 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
