import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--encyclopedia-semantica-framework--0c4ca2b9/.cover.tsx';
import TheSynopsis from './claude--encyclopedia-semantica-framework--0c4ca2b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[24 August 2025](2025-08-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 282 exchanges: <Means>$[[ Encyclopedia Semantica Framework ]]( claude--Encyclopedia Semantica Framework--0c4ca2b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
