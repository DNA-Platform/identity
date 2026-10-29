import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
