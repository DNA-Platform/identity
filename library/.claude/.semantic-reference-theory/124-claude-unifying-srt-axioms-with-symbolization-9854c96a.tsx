import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[31 May 2026](2026-05-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Unifying SRT axioms with symbolization ]]( claude--Unifying SRT axioms with symbolization--9854c96a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 31 May 2026: <Means>$[[ Unifying SRT axioms with symbolization ]]( claude--Unifying SRT axioms with symbolization--9854c96a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
