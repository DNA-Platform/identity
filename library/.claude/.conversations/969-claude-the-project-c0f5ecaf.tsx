import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--the-project--c0f5ecaf/.cover.tsx';
import TheSynopsis from './claude--the-project--c0f5ecaf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Project ]]( claude--The Project--c0f5ecaf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ The Project ]]( claude--The Project--c0f5ecaf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
