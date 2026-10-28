import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.cover.tsx';
import TheSynopsis from './claude--correcting-memory-bias-toward-disagreement--74a7bf5d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[22 July 2026](2026-07-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ Correcting memory bias toward disagreement ]]( claude--Correcting memory bias toward disagreement--74a7bf5d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
