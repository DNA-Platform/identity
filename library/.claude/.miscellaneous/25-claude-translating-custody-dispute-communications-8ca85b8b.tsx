import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 December 2025: <Means>$[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
