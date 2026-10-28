import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--vectorizing-images-with-color-extraction--09bc840a/.cover.tsx';
import TheSynopsis from './claude--vectorizing-images-with-color-extraction--09bc840a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[1 March 2025](2025-03-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Vectorizing Images with Color Extraction ]]( claude--Vectorizing Images with Color Extraction--09bc840a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 44 exchanges: <Means>$[[ Vectorizing Images with Color Extraction ]]( claude--Vectorizing Images with Color Extraction--09bc840a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
