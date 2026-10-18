import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.cover.tsx';
import TheSynopsis from '../.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 May 2026: <Means>$[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
