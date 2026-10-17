import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/any-news-on-when-we-can-expect/.cover.tsx';
import TheSynopsis from '../.conversations/any-news-on-when-we-can-expect/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Any news on when we can expect… ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 May 2026: <Means>$[[ Any news on when we can expect… ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
