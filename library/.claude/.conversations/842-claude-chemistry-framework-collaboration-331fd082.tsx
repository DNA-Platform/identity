import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--chemistry-framework-collaboration--331fd082/.cover.tsx';
import TheSynopsis from './claude--chemistry-framework-collaboration--331fd082/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[3 September 2025](2025-09-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 216 exchanges: <Means>$[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
