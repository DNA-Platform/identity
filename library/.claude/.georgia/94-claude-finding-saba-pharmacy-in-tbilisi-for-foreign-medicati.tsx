import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[8 August 2026](2026-08-08)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 August 2026: <Means>$[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
