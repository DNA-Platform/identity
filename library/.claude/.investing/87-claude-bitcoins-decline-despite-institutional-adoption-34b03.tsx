import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
