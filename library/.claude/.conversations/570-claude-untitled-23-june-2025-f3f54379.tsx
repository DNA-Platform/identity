import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-23-june-2025--f3f54379/.cover.tsx';
import TheSynopsis from './claude--untitled-23-june-2025--f3f54379/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2025</Part>
        <Dated>
            <Date>[23 June 2025](2025-06-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 23 June 2025 ]]( claude--Untitled, 23 June 2025--f3f54379 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 23 June 2025 ]]( claude--Untitled, 23 June 2025--f3f54379 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
