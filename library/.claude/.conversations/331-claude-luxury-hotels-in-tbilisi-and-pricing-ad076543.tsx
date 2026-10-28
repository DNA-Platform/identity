import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.cover.tsx';
import TheSynopsis from './claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
