import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.cover.tsx';
import TheSynopsis from '../.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ iPhone message notifications not showing banners ]]( claude--iPhone message notifications not showing banners--7d6837be )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ iPhone message notifications not showing banners ]]( claude--iPhone message notifications not showing banners--7d6837be )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
