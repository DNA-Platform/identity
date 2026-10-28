import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--paying-for-russian-groceries-with-crypto--85cd3d52/.cover.tsx';
import TheSynopsis from './claude--paying-for-russian-groceries-with-crypto--85cd3d52/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[1 March 2026](2026-03-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Paying for Russian groceries with crypto ]]( claude--Paying for Russian groceries with crypto--85cd3d52 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
