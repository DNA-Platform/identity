import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monad-technology-development-and-viability-assessment/.cover.tsx';
import TheSynopsis from '../.conversations/monad-technology-development-and-viability-assessment/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad technology development and viability assessment ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ Monad technology development and viability assessment ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
