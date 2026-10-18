import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
