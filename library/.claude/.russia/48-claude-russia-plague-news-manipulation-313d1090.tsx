import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russia-plague-news-manipulation--313d1090/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russia-plague-news-manipulation--313d1090/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia plague news manipulation ]]( claude--Russia plague news manipulation--313d1090 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 October 2026: <Means>$[[ Russia plague news manipulation ]]( claude--Russia plague news manipulation--313d1090 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
