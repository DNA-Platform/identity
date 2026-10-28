import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.cover.tsx';
import TheSynopsis from './claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
