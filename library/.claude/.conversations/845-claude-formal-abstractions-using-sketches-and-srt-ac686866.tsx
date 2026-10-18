import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--formal-abstractions-using-sketches-and-srt--ac686866/.cover.tsx';
import TheSynopsis from './claude--formal-abstractions-using-sketches-and-srt--ac686866/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[10 September 2026](2026-09-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Formal abstractions using sketches and SRT ]]( claude--Formal abstractions using sketches and SRT--ac686866 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 20 exchanges: <Means>$[[ Formal abstractions using sketches and SRT ]]( claude--Formal abstractions using sketches and SRT--ac686866 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
