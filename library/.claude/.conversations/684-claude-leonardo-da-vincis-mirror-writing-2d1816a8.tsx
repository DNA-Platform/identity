import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--leonardo-da-vincis-mirror-writing--2d1816a8/.cover.tsx';
import TheSynopsis from './claude--leonardo-da-vincis-mirror-writing--2d1816a8/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[1 November 2024](2024-11-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Leonardo da Vinci's Mirror Writing ]]( claude--Leonardo da Vinci's Mirror Writing--2d1816a8 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Leonardo da Vinci's Mirror Writing ]]( claude--Leonardo da Vinci's Mirror Writing--2d1816a8 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
