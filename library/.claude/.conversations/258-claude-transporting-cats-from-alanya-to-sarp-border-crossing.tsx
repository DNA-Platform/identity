import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.cover.tsx';
import TheSynopsis from './claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Transporting cats from Alanya to Sarp border crossing ]]( claude--Transporting cats from Alanya to Sarp border crossing--b0b0e758 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Transporting cats from Alanya to Sarp border crossing ]]( claude--Transporting cats from Alanya to Sarp border crossing--b0b0e758 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
