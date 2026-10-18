import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russia-plague-news-manipulation--313d1090/.cover.tsx';
import TheSynopsis from './claude--russia-plague-news-manipulation--313d1090/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[7 October 2026](2026-10-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia plague news manipulation ]]( claude--Russia plague news manipulation--313d1090 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Russia plague news manipulation ]]( claude--Russia plague news manipulation--313d1090 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
