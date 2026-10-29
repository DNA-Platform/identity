import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.cover.tsx';
import TheSynopsis from '../.conversations/claude--adi-and-ton-foundation-staking-integration--48fb38b5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ADI and TON Foundation staking integration ]]( claude--ADI and TON Foundation staking integration--48fb38b5 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 January 2026: <Means>$[[ ADI and TON Foundation staking integration ]]( claude--ADI and TON Foundation staking integration--48fb38b5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
