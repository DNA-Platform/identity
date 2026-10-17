import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monad-valuation/.cover.tsx';
import TheSynopsis from '../.conversations/monad-valuation/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad Valuation ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 January 2026: <Means>$[[ Monad Valuation ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
