import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/bitcoin/.cover.tsx';
import TheSynopsis from '../.conversations/bitcoin/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 January 2026: <Means>$[[ Bitcoin ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
