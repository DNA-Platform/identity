import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--learning-react--519df5e6/.cover.tsx';
import TheSynopsis from './claude--learning-react--519df5e6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[5 September 2025](2025-09-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Learning React ]]( claude--Learning React--519df5e6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 258 exchanges: <Means>$[[ Learning React ]]( claude--Learning React--519df5e6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
