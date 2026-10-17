import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/russian-internet-censorship-and-telegram-targeting/.cover.tsx';
import TheSynopsis from '../.conversations/russian-internet-censorship-and-telegram-targeting/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian internet censorship and Telegram targeting ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 February 2026: <Means>$[[ Russian internet censorship and Telegram targeting ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
