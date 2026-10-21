import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--steak-and-brisket--8d35a007/.cover.tsx';
import TheSynopsis from './claude--steak-and-brisket--8d35a007/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[19 August 2026](2026-08-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Steak &amp; Brisket ]]( claude--Steak &amp; Brisket--8d35a007 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 94 exchanges: <Means>$[[ Steak &amp; Brisket ]]( claude--Steak &amp; Brisket--8d35a007 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
