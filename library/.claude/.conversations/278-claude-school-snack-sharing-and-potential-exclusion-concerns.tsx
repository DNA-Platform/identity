import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.cover.tsx';
import TheSynopsis from './claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[9 March 2026](2026-03-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ School snack sharing and potential exclusion concerns ]]( claude--School snack sharing and potential exclusion concerns--e3678695 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ School snack sharing and potential exclusion concerns ]]( claude--School snack sharing and potential exclusion concerns--e3678695 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
