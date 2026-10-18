import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--safety-training-quiz--4cd85995/.cover.tsx';
import TheSynopsis from './claude--safety-training-quiz--4cd85995/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>October 2026</Part>
        <Dated>
            <Date>[7 October 2026](2026-10-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 46 exchanges: <Means>$[[ Safety training quiz ]]( claude--Safety training quiz--4cd85995 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
