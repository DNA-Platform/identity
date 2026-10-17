import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.cover.tsx';
import TheSynopsis from '../.conversations/claude--symbolism-and-inheritance-in-representation--b2a8b322/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 October 2025: <Means>$[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
