import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-4-july-2026--1b994e1b/.cover.tsx';
import TheSynopsis from './claude--untitled-4-july-2026--1b994e1b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 4 July 2026 ]]( claude--Untitled, 4 July 2026--1b994e1b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Untitled, 4 July 2026 ]]( claude--Untitled, 4 July 2026--1b994e1b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
