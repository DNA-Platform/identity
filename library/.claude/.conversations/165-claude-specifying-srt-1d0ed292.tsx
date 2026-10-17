import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--specifying-srt--1d0ed292/.cover.tsx';
import TheSynopsis from './claude--specifying-srt--1d0ed292/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[26 June 2026](2026-06-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 350 exchanges: <Means>$[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
