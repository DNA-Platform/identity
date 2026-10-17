import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/correcting-memory-bias-toward-disagreement/.cover.tsx';
import TheSynopsis from '../.conversations/correcting-memory-bias-toward-disagreement/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Correcting memory bias toward disagreement ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 July 2026: <Means>$[[ Correcting memory bias toward disagreement ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
