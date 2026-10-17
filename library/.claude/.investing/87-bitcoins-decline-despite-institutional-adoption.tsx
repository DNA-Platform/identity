import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/bitcoins-decline-despite-institutional-adoption/.cover.tsx';
import TheSynopsis from '../.conversations/bitcoins-decline-despite-institutional-adoption/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin's decline despite institutional adoption ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ Bitcoin's decline despite institutional adoption ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
