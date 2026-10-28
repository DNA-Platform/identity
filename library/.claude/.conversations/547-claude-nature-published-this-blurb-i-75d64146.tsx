import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--nature-published-this-blurb-i--75d64146/.cover.tsx';
import TheSynopsis from './claude--nature-published-this-blurb-i--75d64146/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[11 June 2026](2026-06-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nature published this blurb. I… ]]( claude--Nature published this blurb.. I…--75d64146 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Nature published this blurb. I… ]]( claude--Nature published this blurb.. I…--75d64146 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
