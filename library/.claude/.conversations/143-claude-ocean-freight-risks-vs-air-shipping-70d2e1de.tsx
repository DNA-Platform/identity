import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.cover.tsx';
import TheSynopsis from './claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
