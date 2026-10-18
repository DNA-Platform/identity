import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--income-limits-for-disability-benefits--eaff8f76/.cover.tsx';
import TheSynopsis from './claude--income-limits-for-disability-benefits--eaff8f76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[2 November 2024](2024-11-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Income Limits for Disability Benefits ]]( claude--Income Limits for Disability Benefits--eaff8f76 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Income Limits for Disability Benefits ]]( claude--Income Limits for Disability Benefits--eaff8f76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
