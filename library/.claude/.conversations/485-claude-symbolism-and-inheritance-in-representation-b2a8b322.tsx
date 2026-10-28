import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--symbolism-and-inheritance-in-representation--b2a8b322/.cover.tsx';
import TheSynopsis from './claude--symbolism-and-inheritance-in-representation--b2a8b322/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[4 October 2025](2025-10-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 204 exchanges: <Means>$[[ Symbolism and inheritance in representation ]]( claude--Symbolism and inheritance in representation--b2a8b322 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
