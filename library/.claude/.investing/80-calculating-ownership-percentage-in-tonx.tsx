import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/calculating-ownership-percentage-in-tonx/.cover.tsx';
import TheSynopsis from '../.conversations/calculating-ownership-percentage-in-tonx/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Calculating ownership percentage in tonx ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 May 2026: <Means>$[[ Calculating ownership percentage in tonx ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
