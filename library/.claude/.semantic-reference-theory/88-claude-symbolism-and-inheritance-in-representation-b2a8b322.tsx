import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.cover.tsx';
import TheSynopsis from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[1 October 2025](2025-10-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
