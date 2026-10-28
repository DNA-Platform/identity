import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.cover.tsx';
import TheSynopsis from './claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[25 March 2026](2026-03-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adding images and market research to product descriptions ]]( claude--Adding images and market research to product descriptions--0af11d32 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Adding images and market research to product descriptions ]]( claude--Adding images and market research to product descriptions--0af11d32 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
