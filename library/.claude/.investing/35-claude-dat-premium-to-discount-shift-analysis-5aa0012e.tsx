import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
