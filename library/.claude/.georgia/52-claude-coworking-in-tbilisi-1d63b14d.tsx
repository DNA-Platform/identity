import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--coworking-in-tbilisi--1d63b14d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--coworking-in-tbilisi--1d63b14d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 May 2026: <Means>$[[ Coworking in Tbilisi ]]( claude--Coworking in Tbilisi--1d63b14d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
