import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--head-injury-assessment-after-fall-on-concrete--447e3539/.cover.tsx';
import TheSynopsis from './claude--head-injury-assessment-after-fall-on-concrete--447e3539/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
