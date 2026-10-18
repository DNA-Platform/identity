import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--steak-and-brisket--8d35a007/.cover.tsx';
import TheSynopsis from '../.conversations/claude--steak-and-brisket--8d35a007/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[19 August 2026](2026-08-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Steak &amp; Brisket ]]( claude--Steak &amp; Brisket--8d35a007 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 August 2026: <Means>$[[ Steak &amp; Brisket ]]( claude--Steak &amp; Brisket--8d35a007 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
