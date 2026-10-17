import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegrams-cryptocurrency-infrastructure-play/.cover.tsx';
import TheSynopsis from '../.conversations/telegrams-cryptocurrency-infrastructure-play/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram's cryptocurrency infrastructure play ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Telegram's cryptocurrency infrastructure play ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
