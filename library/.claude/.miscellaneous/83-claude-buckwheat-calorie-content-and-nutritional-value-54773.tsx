import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[3 February 2026](2026-02-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buckwheat calorie content and nutritional value ]]( claude--Buckwheat calorie content and nutritional value--5477319a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 3 February 2026: <Means>$[[ Buckwheat calorie content and nutritional value ]]( claude--Buckwheat calorie content and nutritional value--5477319a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
