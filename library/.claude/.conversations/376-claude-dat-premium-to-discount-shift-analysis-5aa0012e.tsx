import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--dat-premium-to-discount-shift-analysis--5aa0012e/.cover.tsx';
import TheSynopsis from './claude--dat-premium-to-discount-shift-analysis--5aa0012e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 64 exchanges: <Means>$[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
