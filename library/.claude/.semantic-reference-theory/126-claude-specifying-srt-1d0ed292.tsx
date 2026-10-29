import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--specifying-srt--1d0ed292/.cover.tsx';
import TheSynopsis from '../.conversations/claude--specifying-srt--1d0ed292/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[18 June 2026](2026-06-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
