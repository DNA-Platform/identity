import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--understanding-inheritance-through-foundational-axioms--c97404f0/.cover.tsx';
import TheSynopsis from './claude--understanding-inheritance-through-foundational-axioms--c97404f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[12 December 2025](2025-12-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding inheritance through foundational axioms ]]( claude--Understanding inheritance through foundational axioms--c97404f0 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 74 exchanges: <Means>$[[ Understanding inheritance through foundational axioms ]]( claude--Understanding inheritance through foundational axioms--c97404f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
