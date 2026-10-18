import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--chemistry-code-design-exploration--b08c6c58/.cover.tsx';
import TheSynopsis from '../.conversations/claude--chemistry-code-design-exploration--b08c6c58/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Chemistry code design exploration ]]( claude--Chemistry code design exploration--b08c6c58 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 October 2025: <Means>$[[ Chemistry code design exploration ]]( claude--Chemistry code design exploration--b08c6c58 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
