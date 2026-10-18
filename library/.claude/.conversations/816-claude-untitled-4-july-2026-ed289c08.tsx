import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-4-july-2026--ed289c08/.cover.tsx';
import TheSynopsis from './claude--untitled-4-july-2026--ed289c08/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 4 July 2026 ]]( claude--Untitled, 4 July 2026--ed289c08 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Untitled, 4 July 2026 ]]( claude--Untitled, 4 July 2026--ed289c08 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
