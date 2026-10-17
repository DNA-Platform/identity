import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.cover.tsx';
import TheSynopsis from '../.conversations/claude--any-news-on-when-we-can-expect--e5150a82/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 May 2026: <Means>$[[ Any news on when we can expect… ]]( claude--Any news on when we can expect…--e5150a82 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
