import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.cover.tsx';
import TheSynopsis from './claude--chicken-française-ingredient-sourcing-in-tbilisi--4108975f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[23 August 2026](2026-08-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chicken française ingredient sourcing in Tbilisi ]]( claude--Chicken française ingredient sourcing in Tbilisi--4108975f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Chicken française ingredient sourcing in Tbilisi ]]( claude--Chicken française ingredient sourcing in Tbilisi--4108975f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
