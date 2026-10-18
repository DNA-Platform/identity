import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.cover.tsx';
import TheSynopsis from '../.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a dentist in Tbilisi with nomad insurance ]]( claude--Finding a dentist in Tbilisi with nomad insurance--1be79b64 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 January 2026: <Means>$[[ Finding a dentist in Tbilisi with nomad insurance ]]( claude--Finding a dentist in Tbilisi with nomad insurance--1be79b64 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
