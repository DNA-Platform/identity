import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--translating-custody-dispute-communications--8ca85b8b/.cover.tsx';
import TheSynopsis from './claude--translating-custody-dispute-communications--8ca85b8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[15 December 2025](2025-12-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Translating custody dispute communications ]]( claude--Translating custody dispute communications--8ca85b8b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
