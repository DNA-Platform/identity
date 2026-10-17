import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monero/.cover.tsx';
import TheSynopsis from '../.conversations/monero/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monero ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Monero ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
