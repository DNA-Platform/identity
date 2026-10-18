import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-framework-code-review--764d2d5f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-framework-code-review--764d2d5f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry framework code review ]]( claude--Chemistry framework code review--764d2d5f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 October 2025: <Means>$[[ Chemistry framework code review ]]( claude--Chemistry framework code review--764d2d5f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
