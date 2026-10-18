import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-5-july-2026--1ddd9f0a/.cover.tsx';
import TheSynopsis from './claude--untitled-5-july-2026--1ddd9f0a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[5 July 2026](2026-07-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 5 July 2026 ]]( claude--Untitled, 5 July 2026--1ddd9f0a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Untitled, 5 July 2026 ]]( claude--Untitled, 5 July 2026--1ddd9f0a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
