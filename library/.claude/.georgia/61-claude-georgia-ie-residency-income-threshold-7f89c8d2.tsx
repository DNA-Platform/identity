import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 June 2026: <Means>$[[ Georgia IE residency income threshold ]]( claude--Georgia IE residency income threshold--7f89c8d2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
