import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--meaning-of-meaning-opus--ae28be0a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--meaning-of-meaning-opus--ae28be0a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Meaning of Meaning: Opus ]]( claude--Meaning of Meaning: Opus--ae28be0a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 October 2025: <Means>$[[ Meaning of Meaning: Opus ]]( claude--Meaning of Meaning: Opus--ae28be0a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
