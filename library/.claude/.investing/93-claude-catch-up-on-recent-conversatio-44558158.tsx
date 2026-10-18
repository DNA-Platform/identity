import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--catch-up-on-recent-conversatio--44558158/.cover.tsx';
import TheSynopsis from '../.conversations/claude--catch-up-on-recent-conversatio--44558158/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[18 August 2026](2026-08-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Catch up on recent conversatio… ]]( claude--Catch up on recent conversatio…--44558158 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 August 2026: <Means>$[[ Catch up on recent conversatio… ]]( claude--Catch up on recent conversatio…--44558158 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
