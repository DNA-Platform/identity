import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--rebuilding-routine-after-ankle-surgery--91ffb132/.cover.tsx';
import TheSynopsis from './claude--rebuilding-routine-after-ankle-surgery--91ffb132/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rebuilding routine after ankle surgery ]]( claude--Rebuilding routine after ankle surgery--91ffb132 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Rebuilding routine after ankle surgery ]]( claude--Rebuilding routine after ankle surgery--91ffb132 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
