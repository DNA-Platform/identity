import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--adderall-legal-status-in-georgia--b9f21050/.cover.tsx';
import TheSynopsis from '../.conversations/claude--adderall-legal-status-in-georgia--b9f21050/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[18 July 2026](2026-07-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Adderall legal status in Georgia ]]( claude--Adderall legal status in Georgia--b9f21050 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 18 July 2026: <Means>$[[ Adderall legal status in Georgia ]]( claude--Adderall legal status in Georgia--b9f21050 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
