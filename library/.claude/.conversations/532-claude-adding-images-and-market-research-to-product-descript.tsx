import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
