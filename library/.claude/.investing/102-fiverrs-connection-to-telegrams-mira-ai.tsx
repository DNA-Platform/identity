import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/fiverrs-connection-to-telegrams-mira-ai/.cover.tsx';
import TheSynopsis from '../.conversations/fiverrs-connection-to-telegrams-mira-ai/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Fiverr's connection to Telegram's Mira AI ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 July 2026: <Means>$[[ Fiverr's connection to Telegram's Mira AI ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
