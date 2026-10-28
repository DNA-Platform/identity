import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--celebrating-name-days-in-russia--66e39383/.cover.tsx';
import TheSynopsis from './claude--celebrating-name-days-in-russia--66e39383/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[11 November 2024](2024-11-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Celebrating Name Days in Russia ]]( claude--Celebrating Name Days in Russia--66e39383 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Celebrating Name Days in Russia ]]( claude--Celebrating Name Days in Russia--66e39383 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
