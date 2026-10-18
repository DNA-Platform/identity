import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Goldbach pairs and coprime symmetry ]]( claude--Goldbach pairs and coprime symmetry--942ceafb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 March 2026: <Means>$[[ Goldbach pairs and coprime symmetry ]]( claude--Goldbach pairs and coprime symmetry--942ceafb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
