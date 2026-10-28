import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--getting-married-in-georgia-this-saturday--ca6d5c76/.cover.tsx';
import TheSynopsis from './claude--getting-married-in-georgia-this-saturday--ca6d5c76/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[26 January 2026](2026-01-26)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Getting married in Georgia this Saturday ]]( claude--Getting married in Georgia this Saturday--ca6d5c76 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
