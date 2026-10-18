import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[23 August 2026](2026-08-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chicken française ingredient sourcing in Tbilisi ]]( claude--Chicken française ingredient sourcing in Tbilisi--4108975f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 August 2026: <Means>$[[ Chicken française ingredient sourcing in Tbilisi ]]( claude--Chicken française ingredient sourcing in Tbilisi--4108975f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
