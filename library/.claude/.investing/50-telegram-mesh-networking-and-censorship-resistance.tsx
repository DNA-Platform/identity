import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/telegram-mesh-networking-and-censorship-resistance/.cover.tsx';
import TheSynopsis from '../.conversations/telegram-mesh-networking-and-censorship-resistance/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram mesh networking and censorship resistance ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Telegram mesh networking and censorship resistance ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
