import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--missed-airport-pickup-on-crutches--585c0f8d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 January 2026: <Means>$[[ Missed airport pickup on crutches ]]( claude--Missed airport pickup on crutches--585c0f8d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
