import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.cover.tsx';
import TheSynopsis from './claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[5 November 2024](2024-11-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Handmade Pumpkin Ravioli with an Italian Nonna ]]( claude--Handmade Pumpkin Ravioli with an Italian Nonna--624bb8cd )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Handmade Pumpkin Ravioli with an Italian Nonna ]]( claude--Handmade Pumpkin Ravioli with an Italian Nonna--624bb8cd )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
