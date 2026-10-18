import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
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
