import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--computational-epistemology-and-consciousness--a2e092c0/.cover.tsx';
import TheSynopsis from './claude--computational-epistemology-and-consciousness--a2e092c0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[12 October 2026](2026-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 26 exchanges: <Means>$[[ Computational epistemology and consciousness ]]( claude--Computational epistemology and consciousness--a2e092c0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
