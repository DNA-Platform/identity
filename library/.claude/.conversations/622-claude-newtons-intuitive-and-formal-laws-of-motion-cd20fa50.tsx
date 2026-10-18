import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.cover.tsx';
import TheSynopsis from './claude--newtons-intuitive-and-formal-laws-of-motion--cd20fa50/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[23 March 2025](2025-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Newton's Intuitive and Formal Laws of Motion ]]( claude--Newton's Intuitive and Formal Laws of Motion--cd20fa50 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Newton's Intuitive and Formal Laws of Motion ]]( claude--Newton's Intuitive and Formal Laws of Motion--cd20fa50 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
