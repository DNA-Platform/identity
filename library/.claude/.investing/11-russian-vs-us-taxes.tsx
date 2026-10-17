import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/russian-vs-us-taxes/.cover.tsx';
import TheSynopsis from '../.conversations/russian-vs-us-taxes/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russian vs US Taxes ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 January 2026: <Means>$[[ Russian vs US Taxes ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
