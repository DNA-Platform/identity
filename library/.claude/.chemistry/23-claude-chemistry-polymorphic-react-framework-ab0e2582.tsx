import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-polymorphic-react-framework--ab0e2582/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 9 September 2025: <Means>$[[ Chemistry: Polymorphic React Framework ]]( claude--Chemistry: Polymorphic React Framework--ab0e2582 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
