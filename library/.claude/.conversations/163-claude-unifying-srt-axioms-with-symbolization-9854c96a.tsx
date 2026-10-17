import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--unifying-srt-axioms-with-symbolization--9854c96a/.cover.tsx';
import TheSynopsis from './claude--unifying-srt-axioms-with-symbolization--9854c96a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Unifying SRT axioms with symbolization ]]( claude--Unifying SRT axioms with symbolization--9854c96a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 401 exchanges: <Means>$[[ Unifying SRT axioms with symbolization ]]( claude--Unifying SRT axioms with symbolization--9854c96a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
