import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--any-news-on-when-we-can-expect--e5150a82/.cover.tsx';
import TheSynopsis from './claude--any-news-on-when-we-can-expect--e5150a82/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
