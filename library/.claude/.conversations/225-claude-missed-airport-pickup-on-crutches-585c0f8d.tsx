import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--missed-airport-pickup-on-crutches--585c0f8d/.cover.tsx';
import TheSynopsis from './claude--missed-airport-pickup-on-crutches--585c0f8d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[15 January 2026](2026-01-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
