import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-6-april-2025--5357bdbc/.cover.tsx';
import TheSynopsis from './claude--untitled-6-april-2025--5357bdbc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[16 May 2026](2026-05-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 6 April 2025 ]]( claude--Untitled, 6 April 2025--5357bdbc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 146 exchanges: <Means>$[[ Untitled, 6 April 2025 ]]( claude--Untitled, 6 April 2025--5357bdbc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
