import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../.manual/4-the-date~code.tsx';
import { Volume } from '../.manual/19-the-cover~code.tsx';
import TheCover from './.claude/.cover.tsx';
import TheSynopsis from './.claude/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[29 September 2026](2026-09-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Claude ]]( claude--Claude )</Title>
        <Paragraph>
            <Caption />
            A project of mine, and the conversations held in it: <Means>$[[ Claude ]]( claude--Claude )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
