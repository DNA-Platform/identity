import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.cover.tsx';
import TheSynopsis from '../.conversations/claude--head-injury-assessment-after-fall-on-concrete--447e3539/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ Head injury assessment after fall on concrete ]]( claude--Head injury assessment after fall on concrete--447e3539 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
