import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-collaboration--331fd082/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 September 2025: <Means>$[[ Chemistry Framework Collaboration ]]( claude--Chemistry Framework Collaboration--331fd082 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
