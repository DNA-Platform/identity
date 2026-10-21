import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.cover.tsx';
import TheSynopsis from './claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[22 January 2026](2026-01-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Finding a dentist in Tbilisi with nomad insurance ]]( claude--Finding a dentist in Tbilisi with nomad insurance--1be79b64 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 36 exchanges: <Means>$[[ Finding a dentist in Tbilisi with nomad insurance ]]( claude--Finding a dentist in Tbilisi with nomad insurance--1be79b64 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
