import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.cover.tsx';
import TheSynopsis from '../.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
