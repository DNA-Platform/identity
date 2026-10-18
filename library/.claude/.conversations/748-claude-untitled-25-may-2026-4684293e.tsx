import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-25-may-2026--4684293e/.cover.tsx';
import TheSynopsis from './claude--untitled-25-may-2026--4684293e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 25 May 2026 ]]( claude--Untitled, 25 May 2026--4684293e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 74 exchanges: <Means>$[[ Untitled, 25 May 2026 ]]( claude--Untitled, 25 May 2026--4684293e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
