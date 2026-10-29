import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dat-premium-to-discount-shift-analysis--5aa0012e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 February 2026: <Means>$[[ DAT premium to discount shift analysis ]]( claude--DAT premium to discount shift analysis--5aa0012e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
