import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-26-june-2026--0f772d9c/.cover.tsx';
import TheSynopsis from './claude--untitled-26-june-2026--0f772d9c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 26 June 2026 ]]( claude--Untitled, 26 June 2026--0f772d9c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Untitled, 26 June 2026 ]]( claude--Untitled, 26 June 2026--0f772d9c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
