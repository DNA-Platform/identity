import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-ai-coding-competition-details--8a65ba52/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-ai-coding-competition-details--8a65ba52/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON AI coding competition details ]]( claude--TON AI coding competition details--8a65ba52 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 March 2026: <Means>$[[ TON AI coding competition details ]]( claude--TON AI coding competition details--8a65ba52 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
