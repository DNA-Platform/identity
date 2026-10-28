import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--moc-schedule--dbba812c/.cover.tsx';
import TheSynopsis from './claude--moc-schedule--dbba812c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MoC Schedule ]]( claude--MoC Schedule--dbba812c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 90 exchanges: <Means>$[[ MoC Schedule ]]( claude--MoC Schedule--dbba812c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
