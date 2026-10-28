import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--taxes-georgia--e0fde00f/.cover.tsx';
import TheSynopsis from './claude--taxes-georgia--e0fde00f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[7 July 2026](2026-07-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
