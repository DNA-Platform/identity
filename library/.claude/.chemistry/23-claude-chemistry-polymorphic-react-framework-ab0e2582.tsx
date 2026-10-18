import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[9 September 2025](2025-09-09)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2025: <Means>$[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
