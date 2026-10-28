import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--russian-custody-case-with-travel-ban-and-safety-risks--3c3ba314/.cover.tsx';
import TheSynopsis from './claude--russian-custody-case-with-travel-ban-and-safety-risks--3c3ba314/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian custody case with travel ban and safety risks ]]( claude--Russian custody case with travel ban and safety risks--3c3ba314 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 9 exchanges: <Means>$[[ Russian custody case with travel ban and safety risks ]]( claude--Russian custody case with travel ban and safety risks--3c3ba314 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
