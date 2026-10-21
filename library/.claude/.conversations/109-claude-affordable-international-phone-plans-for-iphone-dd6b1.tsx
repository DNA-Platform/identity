import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--affordable-international-phone-plans-for-iphone--dd6b1380/.cover.tsx';
import TheSynopsis from './claude--affordable-international-phone-plans-for-iphone--dd6b1380/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
