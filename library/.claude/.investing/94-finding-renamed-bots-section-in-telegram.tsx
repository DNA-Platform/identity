import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/finding-renamed-bots-section-in-telegram/.cover.tsx';
import TheSynopsis from '../.conversations/finding-renamed-bots-section-in-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding renamed bots section in Telegram ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Finding renamed bots section in Telegram ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
