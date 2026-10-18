import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
