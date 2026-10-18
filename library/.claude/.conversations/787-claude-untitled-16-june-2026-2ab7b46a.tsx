import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-16-june-2026--2ab7b46a/.cover.tsx';
import TheSynopsis from './claude--untitled-16-june-2026--2ab7b46a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 16 June 2026 ]]( claude--Untitled, 16 June 2026--2ab7b46a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Untitled, 16 June 2026 ]]( claude--Untitled, 16 June 2026--2ab7b46a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
