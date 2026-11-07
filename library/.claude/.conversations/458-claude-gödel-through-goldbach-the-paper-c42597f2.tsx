import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--gödel-through-goldbach-the-paper--c42597f2/.cover.tsx';
import TheSynopsis from './claude--gödel-through-goldbach-the-paper--c42597f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2025</Part>
        <Dated>
            <Date>[12 October 2025](2025-10-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Gödel through Goldbach: The Paper ]]( claude--Gödel through Goldbach: The Paper--c42597f2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 154 exchanges: <Means>$[[ Gödel through Goldbach: The Paper ]]( claude--Gödel through Goldbach: The Paper--c42597f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
