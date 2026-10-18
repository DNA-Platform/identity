import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.cover.tsx';
import TheSynopsis from '../.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[19 March 2026](2026-03-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 March 2026: <Means>$[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
