import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--safety-training-quiz--4cd85995/.cover.tsx';
import TheSynopsis from '../.conversations/claude--safety-training-quiz--4cd85995/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 October 2026: <Means>$[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
