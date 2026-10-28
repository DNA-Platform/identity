import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--adi-and-ton-foundation-staking-integration--48fb38b5/.cover.tsx';
import TheSynopsis from './claude--adi-and-ton-foundation-staking-integration--48fb38b5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[13 January 2026](2026-01-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ADI and TON Foundation staking integration ]]( claude--ADI and TON Foundation staking integration--48fb38b5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ ADI and TON Foundation staking integration ]]( claude--ADI and TON Foundation staking integration--48fb38b5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
