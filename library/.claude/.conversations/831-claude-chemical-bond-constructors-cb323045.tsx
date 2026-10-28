import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--chemical-bond-constructors--cb323045/.cover.tsx';
import TheSynopsis from './claude--chemical-bond-constructors--cb323045/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[26 September 2025](2025-09-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemical bond constructors ]]( claude--Chemical bond constructors--cb323045 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Chemical bond constructors ]]( claude--Chemical bond constructors--cb323045 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
