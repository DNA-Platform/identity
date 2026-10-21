import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--cicadas-in-the-country-of-georgia--1b96ee47/.cover.tsx';
import TheSynopsis from './claude--cicadas-in-the-country-of-georgia--1b96ee47/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[4 July 2026](2026-07-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cicadas in the country of Georgia ]]( claude--Cicadas in the country of Georgia--1b96ee47 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Cicadas in the country of Georgia ]]( claude--Cicadas in the country of Georgia--1b96ee47 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
