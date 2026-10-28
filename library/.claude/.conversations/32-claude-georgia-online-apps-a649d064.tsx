import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--georgia-online-apps--a649d064/.cover.tsx';
import TheSynopsis from './claude--georgia-online-apps--a649d064/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[10 January 2026](2026-01-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Georgia Online Apps ]]( claude--Georgia Online Apps--a649d064 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
