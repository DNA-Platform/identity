import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.cover.tsx';
import TheSynopsis from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
