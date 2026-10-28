import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--extending-react-simple-maps-with-predictable-components--87a581e5/.cover.tsx';
import TheSynopsis from './claude--extending-react-simple-maps-with-predictable-components--87a581e5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2025</Part>
        <Dated>
            <Date>[24 March 2025](2025-03-24)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Extending React Simple Maps with Predictable Components ]]( claude--Extending React Simple Maps with Predictable Components--87a581e5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 82 exchanges: <Means>$[[ Extending React Simple Maps with Predictable Components ]]( claude--Extending React Simple Maps with Predictable Components--87a581e5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
