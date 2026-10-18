import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
