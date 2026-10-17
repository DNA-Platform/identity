import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Understanding inheritance through foundational axioms ]]( claude--Understanding inheritance through foundational axioms--c97404f0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 December 2025: <Means>$[[ Understanding inheritance through foundational axioms ]]( claude--Understanding inheritance through foundational axioms--c97404f0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
