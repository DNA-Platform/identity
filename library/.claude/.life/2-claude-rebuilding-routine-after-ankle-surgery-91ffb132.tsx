import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--rebuilding-routine-after-ankle-surgery--91ffb132/.cover.tsx';
import TheSynopsis from '../.conversations/claude--rebuilding-routine-after-ankle-surgery--91ffb132/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[5 February 2026](2026-02-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rebuilding routine after ankle surgery ]]( claude--Rebuilding routine after ankle surgery--91ffb132 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ Rebuilding routine after ankle surgery ]]( claude--Rebuilding routine after ankle surgery--91ffb132 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
