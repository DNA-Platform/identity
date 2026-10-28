import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--designing-a-react-homepage--ae21be79/.cover.tsx';
import TheSynopsis from './claude--designing-a-react-homepage--ae21be79/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[31 March 2025](2025-03-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Designing a React Homepage ]]( claude--Designing a React Homepage--ae21be79 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 86 exchanges: <Means>$[[ Designing a React Homepage ]]( claude--Designing a React Homepage--ae21be79 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
