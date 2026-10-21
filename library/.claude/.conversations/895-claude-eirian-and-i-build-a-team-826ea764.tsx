import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-i-build-a-team--826ea764/.cover.tsx';
import TheSynopsis from './claude--eirian-and-i-build-a-team--826ea764/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[12 August 2025](2025-08-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; I build a Team ]]( claude--Eirian &amp; I build a Team--826ea764 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Eirian &amp; I build a Team ]]( claude--Eirian &amp; I build a Team--826ea764 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
