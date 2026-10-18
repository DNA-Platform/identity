import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.cover.tsx';
import TheSynopsis from './claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Shipping belongings from New York to Georgia ]]( claude--Shipping belongings from New York to Georgia--dd7b9e6a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 54 exchanges: <Means>$[[ Shipping belongings from New York to Georgia ]]( claude--Shipping belongings from New York to Georgia--dd7b9e6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
