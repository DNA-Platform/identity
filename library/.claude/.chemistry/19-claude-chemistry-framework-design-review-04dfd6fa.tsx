import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-design-review--04dfd6fa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-design-review--04dfd6fa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry framework design review ]]( claude--Chemistry framework design review--04dfd6fa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 September 2025: <Means>$[[ Chemistry framework design review ]]( claude--Chemistry framework design review--04dfd6fa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
