import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ Ocean freight risks vs air shipping ]]( claude--Ocean freight risks vs air shipping--70d2e1de )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
