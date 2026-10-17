import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/elon-musks-x-messenger-competing-with-telegram/.cover.tsx';
import TheSynopsis from '../.conversations/elon-musks-x-messenger-competing-with-telegram/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Elon Musk's X messenger competing with Telegram ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 April 2026: <Means>$[[ Elon Musk's X messenger competing with Telegram ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
