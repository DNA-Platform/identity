import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--reducing-self-criticism-and-judgment--accfc201/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reducing-self-criticism-and-judgment--accfc201/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[28 January 2026](2026-01-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reducing self-criticism and judgment ]]( claude--Reducing self-criticism and judgment--accfc201 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 28 January 2026: <Means>$[[ Reducing self-criticism and judgment ]]( claude--Reducing self-criticism and judgment--accfc201 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
