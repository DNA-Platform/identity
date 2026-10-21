import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.cover.tsx';
import TheSynopsis from './claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[22 April 2026](2026-04-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Controlled substance pharmacies in Tbilisi ]]( claude--Controlled substance pharmacies in Tbilisi--6b0b6e6c )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Controlled substance pharmacies in Tbilisi ]]( claude--Controlled substance pharmacies in Tbilisi--6b0b6e6c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
