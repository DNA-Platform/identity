import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--prestigious-pappy-van-winkle-bourbon--9e6c5311/.cover.tsx';
import TheSynopsis from './claude--prestigious-pappy-van-winkle-bourbon--9e6c5311/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[12 November 2024](2024-11-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Prestigious Pappy Van Winkle Bourbon ]]( claude--Prestigious Pappy Van Winkle Bourbon--9e6c5311 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Prestigious Pappy Van Winkle Bourbon ]]( claude--Prestigious Pappy Van Winkle Bourbon--9e6c5311 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
