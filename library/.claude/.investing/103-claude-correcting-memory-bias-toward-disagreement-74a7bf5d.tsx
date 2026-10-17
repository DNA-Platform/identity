import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 July 2026: <Means>$[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
