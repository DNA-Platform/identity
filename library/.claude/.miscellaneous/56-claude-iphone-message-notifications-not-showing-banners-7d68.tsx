import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.cover.tsx';
import TheSynopsis from '../.conversations/claude--iphone-message-notifications-not-showing-banners--7d6837be/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[23 January 2026](2026-01-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ iPhone message notifications not showing banners ]]( claude--iPhone message notifications not showing banners--7d6837be )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 January 2026: <Means>$[[ iPhone message notifications not showing banners ]]( claude--iPhone message notifications not showing banners--7d6837be )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
