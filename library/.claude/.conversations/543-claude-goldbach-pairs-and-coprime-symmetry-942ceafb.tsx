import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.cover.tsx';
import TheSynopsis from './claude--goldbach-pairs-and-coprime-symmetry--942ceafb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[30 March 2026](2026-03-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Goldbach pairs and coprime symmetry ]]( claude--Goldbach pairs and coprime symmetry--942ceafb )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Goldbach pairs and coprime symmetry ]]( claude--Goldbach pairs and coprime symmetry--942ceafb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
