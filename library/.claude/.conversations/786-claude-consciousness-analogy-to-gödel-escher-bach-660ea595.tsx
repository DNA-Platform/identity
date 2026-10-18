import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--consciousness-analogy-to-gödel-escher-bach--660ea595/.cover.tsx';
import TheSynopsis from './claude--consciousness-analogy-to-gödel-escher-bach--660ea595/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Consciousness analogy to Gödel, Escher, Bach ]]( claude--Consciousness analogy to Gödel, Escher, Bach--660ea595 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Consciousness analogy to Gödel, Escher, Bach ]]( claude--Consciousness analogy to Gödel, Escher, Bach--660ea595 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
