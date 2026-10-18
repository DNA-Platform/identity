import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.cover.tsx';
import TheSynopsis from './claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[3 February 2026](2026-02-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Buckwheat calorie content and nutritional value ]]( claude--Buckwheat calorie content and nutritional value--5477319a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Buckwheat calorie content and nutritional value ]]( claude--Buckwheat calorie content and nutritional value--5477319a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
