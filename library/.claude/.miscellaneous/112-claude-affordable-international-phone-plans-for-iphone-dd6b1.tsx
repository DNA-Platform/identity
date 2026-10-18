import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.cover.tsx';
import TheSynopsis from '../.conversations/claude--affordable-international-phone-plans-for-iphone--dd6b1380/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 March 2026: <Means>$[[ Affordable international phone plans for iPhone ]]( claude--Affordable international phone plans for iPhone--dd6b1380 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
