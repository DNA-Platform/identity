import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.cover.tsx';
import TheSynopsis from './claude--bitcoins-decline-despite-institutional-adoption--34b037fb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Bitcoin's decline despite institutional adoption ]]( claude--Bitcoin's decline despite institutional adoption--34b037fb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
