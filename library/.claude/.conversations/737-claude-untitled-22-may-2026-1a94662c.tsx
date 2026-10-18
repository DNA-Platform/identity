import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--untitled-22-may-2026--1a94662c/.cover.tsx';
import TheSynopsis from './claude--untitled-22-may-2026--1a94662c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Untitled, 22 May 2026 ]]( claude--Untitled, 22 May 2026--1a94662c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Untitled, 22 May 2026 ]]( claude--Untitled, 22 May 2026--1a94662c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
