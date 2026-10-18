import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--adderall-legal-status-in-georgia--b9f21050/.cover.tsx';
import TheSynopsis from './claude--adderall-legal-status-in-georgia--b9f21050/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[18 July 2026](2026-07-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adderall legal status in Georgia ]]( claude--Adderall legal status in Georgia--b9f21050 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Adderall legal status in Georgia ]]( claude--Adderall legal status in Georgia--b9f21050 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
