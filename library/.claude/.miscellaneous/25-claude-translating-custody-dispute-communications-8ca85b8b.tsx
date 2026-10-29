import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
