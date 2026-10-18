import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[18 March 2026](2026-03-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ HP Smart Tank printer setup guide ]]( claude--HP Smart Tank printer setup guide--5e7c53b1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 March 2026: <Means>$[[ HP Smart Tank printer setup guide ]]( claude--HP Smart Tank printer setup guide--5e7c53b1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
