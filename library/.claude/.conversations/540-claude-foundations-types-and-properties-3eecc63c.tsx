import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--foundations-types-and-properties--3eecc63c/.cover.tsx';
import TheSynopsis from './claude--foundations-types-and-properties--3eecc63c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[8 September 2026](2026-09-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Foundations: Types &amp; Properties ]]( claude--Foundations: Types &amp; Properties--3eecc63c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 232 exchanges: <Means>$[[ Foundations: Types &amp; Properties ]]( claude--Foundations: Types &amp; Properties--3eecc63c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
