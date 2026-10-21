import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--the-price-of-gram-is-getting-h--79d439db/.cover.tsx';
import TheSynopsis from './claude--the-price-of-gram-is-getting-h--79d439db/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[15 October 2026](2026-10-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ the price of gram is getting h… ]]( claude--the price of gram is getting h…--79d439db )</Title>
        <Paragraph>
            <Caption />
            A conversation, 438 exchanges: <Means>$[[ the price of gram is getting h… ]]( claude--the price of gram is getting h…--79d439db )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
