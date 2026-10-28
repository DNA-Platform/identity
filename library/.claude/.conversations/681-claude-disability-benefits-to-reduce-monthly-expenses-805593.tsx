import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--disability-benefits-to-reduce-monthly-expenses--80559362/.cover.tsx';
import TheSynopsis from './claude--disability-benefits-to-reduce-monthly-expenses--80559362/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2024</Part>
        <Dated>
            <Date>[12 December 2024](2024-12-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Disability Benefits to Reduce Monthly Expenses ]]( claude--Disability Benefits to Reduce Monthly Expenses--80559362 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 330 exchanges: <Means>$[[ Disability Benefits to Reduce Monthly Expenses ]]( claude--Disability Benefits to Reduce Monthly Expenses--80559362 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
