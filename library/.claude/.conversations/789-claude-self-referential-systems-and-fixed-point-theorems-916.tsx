import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--self-referential-systems-and-fixed-point-theorems--916fea88/.cover.tsx';
import TheSynopsis from './claude--self-referential-systems-and-fixed-point-theorems--916fea88/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Self-referential systems and fixed-point theorems ]]( claude--Self-referential systems and fixed-point theorems--916fea88 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Self-referential systems and fixed-point theorems ]]( claude--Self-referential systems and fixed-point theorems--916fea88 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
