import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/hypothetical-net-worth/.cover.tsx';
import TheSynopsis from '../.conversations/hypothetical-net-worth/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Hypothetical Net Worth ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Hypothetical Net Worth ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
