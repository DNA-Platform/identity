import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[30 April 2026](2026-04-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Shipping belongings from New York to Georgia ]]( claude--Shipping belongings from New York to Georgia--dd7b9e6a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 April 2026: <Means>$[[ Shipping belongings from New York to Georgia ]]( claude--Shipping belongings from New York to Georgia--dd7b9e6a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
