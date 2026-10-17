import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/original-telegram-open-network-whitepaper/.cover.tsx';
import TheSynopsis from '../.conversations/original-telegram-open-network-whitepaper/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Original Telegram Open Network whitepaper ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 May 2026: <Means>$[[ Original Telegram Open Network whitepaper ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
