import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Controlled substance pharmacies in Tbilisi ]]( claude--Controlled substance pharmacies in Tbilisi--6b0b6e6c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 April 2026: <Means>$[[ Controlled substance pharmacies in Tbilisi ]]( claude--Controlled substance pharmacies in Tbilisi--6b0b6e6c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
