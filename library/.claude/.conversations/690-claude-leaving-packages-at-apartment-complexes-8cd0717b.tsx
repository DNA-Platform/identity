import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--leaving-packages-at-apartment-complexes--8cd0717b/.cover.tsx';
import TheSynopsis from './claude--leaving-packages-at-apartment-complexes--8cd0717b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2024</Part>
        <Dated>
            <Date>[25 October 2024](2024-10-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Leaving Packages at Apartment Complexes ]]( claude--Leaving Packages at Apartment Complexes--8cd0717b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Leaving Packages at Apartment Complexes ]]( claude--Leaving Packages at Apartment Complexes--8cd0717b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
