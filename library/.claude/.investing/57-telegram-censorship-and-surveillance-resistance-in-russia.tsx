import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-censorship-and-surveillance-resistance-in-russia/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-censorship-and-surveillance-resistance-in-russia/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram censorship and surveillance resistance in Russia ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Telegram censorship and surveillance resistance in Russia ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
