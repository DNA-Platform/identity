import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--changing-flight-date--475574f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--changing-flight-date--475574f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Changing flight date ]]( claude--Changing flight date--475574f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 October 2026: <Means>$[[ Changing flight date ]]( claude--Changing flight date--475574f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
