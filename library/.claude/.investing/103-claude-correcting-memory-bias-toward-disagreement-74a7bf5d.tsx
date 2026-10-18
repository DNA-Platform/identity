import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[21 July 2026](2026-07-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 July 2026: <Means>$[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
