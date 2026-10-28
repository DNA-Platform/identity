import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--react-polymorphism-with-chemistry-framework--704e9133/.cover.tsx';
import TheSynopsis from './claude--react-polymorphism-with-chemistry-framework--704e9133/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[21 September 2025](2025-09-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ React polymorphism with Chemistry framework ]]( claude--React polymorphism with Chemistry framework--704e9133 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 134 exchanges: <Means>$[[ React polymorphism with Chemistry framework ]]( claude--React polymorphism with Chemistry framework--704e9133 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
