import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.cover.tsx';
import TheSynopsis from '../.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Cicadas in the country of Georgia ]]( claude--Cicadas in the country of Georgia--1b96ee47 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 July 2026: <Means>$[[ Cicadas in the country of Georgia ]]( claude--Cicadas in the country of Georgia--1b96ee47 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
