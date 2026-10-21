import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgia-ie-residency-income-threshold--7f89c8d2/.cover.tsx';
import TheSynopsis from './claude--georgia-ie-residency-income-threshold--7f89c8d2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
