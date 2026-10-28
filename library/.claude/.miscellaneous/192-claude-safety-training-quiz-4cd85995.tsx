import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--safety-training-quiz--4cd85995/.cover.tsx';
import TheSynopsis from '../.conversations/claude--safety-training-quiz--4cd85995/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[7 October 2026](2026-10-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 October 2026: <Means>$[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
