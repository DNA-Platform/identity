import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 8 August 2026: <Means>$[[ Finding Saba pharmacy in Tbilisi for foreign medications ]]( claude--Finding Saba pharmacy in Tbilisi for foreign medications--e77d354e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
