import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--taxes-georgia--e0fde00f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--taxes-georgia--e0fde00f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ Taxes Georgia ]]( claude--Taxes Georgia--e0fde00f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
