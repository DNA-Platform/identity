import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/russias-telegram-throttling-via-tspu-infrastructure/.cover.tsx';
import TheSynopsis from '../.conversations/russias-telegram-throttling-via-tspu-infrastructure/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's Telegram throttling via TSPU infrastructure ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russia's Telegram throttling via TSPU infrastructure ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
