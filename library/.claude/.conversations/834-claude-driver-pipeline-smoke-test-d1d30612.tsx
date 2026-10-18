import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--driver-pipeline-smoke-test--d1d30612/.cover.tsx';
import TheSynopsis from './claude--driver-pipeline-smoke-test--d1d30612/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Driver pipeline smoke test ]]( claude--Driver pipeline smoke test--d1d30612 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Driver pipeline smoke test ]]( claude--Driver pipeline smoke test--d1d30612 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
