import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--untitled-2-june-2026--c091a968/.cover.tsx';
import TheSynopsis from './claude--untitled-2-june-2026--c091a968/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 2 June 2026 ]]( claude--Untitled, 2 June 2026--c091a968 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 74 exchanges: <Means>$[[ Untitled, 2 June 2026 ]]( claude--Untitled, 2 June 2026--c091a968 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
