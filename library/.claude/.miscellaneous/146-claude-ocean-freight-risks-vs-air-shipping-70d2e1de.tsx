import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
