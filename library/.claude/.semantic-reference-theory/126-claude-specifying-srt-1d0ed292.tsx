import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--specifying-srt--1d0ed292/.cover.tsx';
import TheSynopsis from '../.conversations/claude--specifying-srt--1d0ed292/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 June 2026: <Means>$[[ Specifying SRT ]]( claude--Specifying SRT--1d0ed292 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
