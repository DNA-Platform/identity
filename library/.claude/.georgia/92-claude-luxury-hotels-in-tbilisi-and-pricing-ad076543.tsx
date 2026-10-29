import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.cover.tsx';
import TheSynopsis from '../.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[13 August 2026](2026-08-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
