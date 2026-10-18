import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-29-september-2026--621eab6a/.cover.tsx';
import TheSynopsis from './claude--untitled-29-september-2026--621eab6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 29 September 2026 ]]( claude--Untitled, 29 September 2026--621eab6a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 29 September 2026 ]]( claude--Untitled, 29 September 2026--621eab6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
