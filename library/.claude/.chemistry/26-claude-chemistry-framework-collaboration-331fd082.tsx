import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[2 September 2025](2025-09-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
