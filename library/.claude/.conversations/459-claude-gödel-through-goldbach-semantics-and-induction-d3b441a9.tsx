import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.cover.tsx';
import TheSynopsis from './claude--gödel-through-goldbach-semantics-and-induction--d3b441a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[12 October 2025](2025-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gödel through Goldbach: Semantics and Induction ]]( claude--Gödel through Goldbach: Semantics and Induction--d3b441a9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 66 exchanges: <Means>$[[ Gödel through Goldbach: Semantics and Induction ]]( claude--Gödel through Goldbach: Semantics and Induction--d3b441a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
