import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-design-review--04dfd6fa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-design-review--04dfd6fa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[17 September 2025](2025-09-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry framework design review ]]( claude--Chemistry framework design review--04dfd6fa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 September 2025: <Means>$[[ Chemistry framework design review ]]( claude--Chemistry framework design review--04dfd6fa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
