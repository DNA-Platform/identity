import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-atomic--2409f6b1/.cover.tsx';
import TheSynopsis from './claude--understanding-atomic--2409f6b1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding Atomic ]]( claude--Understanding Atomic--2409f6b1 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 37 exchanges: <Means>$[[ Understanding Atomic ]]( claude--Understanding Atomic--2409f6b1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
