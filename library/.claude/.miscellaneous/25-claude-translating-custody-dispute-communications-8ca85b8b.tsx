import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[15 December 2025](2025-12-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 December 2025: <Means>$[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
