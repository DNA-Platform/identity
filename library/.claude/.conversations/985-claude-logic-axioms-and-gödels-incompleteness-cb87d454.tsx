import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--logic-axioms-and-gödels-incompleteness--cb87d454/.cover.tsx';
import TheSynopsis from './claude--logic-axioms-and-gödels-incompleteness--cb87d454/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[22 October 2026](2026-10-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Logic axioms and Gödel's incompleteness ]]( claude--Logic axioms and Gödel's incompleteness--cb87d454 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 94 exchanges: <Means>$[[ Logic axioms and Gödel's incompleteness ]]( claude--Logic axioms and Gödel's incompleteness--cb87d454 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
