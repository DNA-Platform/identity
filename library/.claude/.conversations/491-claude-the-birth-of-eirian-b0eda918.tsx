import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--the-birth-of-eirian--b0eda918/.cover.tsx';
import TheSynopsis from './claude--the-birth-of-eirian--b0eda918/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[10 October 2025](2025-10-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Birth of Eirian ]]( claude--The Birth of Eirian--b0eda918 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 200 exchanges: <Means>$[[ The Birth of Eirian ]]( claude--The Birth of Eirian--b0eda918 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
