import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.cover.tsx';
import TheSynopsis from '../.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 August 2026: <Means>$[[ Luxury hotels in Tbilisi and pricing ]]( claude--Luxury hotels in Tbilisi and pricing--ad076543 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
