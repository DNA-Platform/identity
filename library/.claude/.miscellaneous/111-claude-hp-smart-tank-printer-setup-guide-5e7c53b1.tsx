import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.cover.tsx';
import TheSynopsis from '../.conversations/claude--hp-smart-tank-printer-setup-guide--5e7c53b1/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ HP Smart Tank printer setup guide ]]( claude--HP Smart Tank printer setup guide--5e7c53b1 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 March 2026: <Means>$[[ HP Smart Tank printer setup guide ]]( claude--HP Smart Tank printer setup guide--5e7c53b1 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
