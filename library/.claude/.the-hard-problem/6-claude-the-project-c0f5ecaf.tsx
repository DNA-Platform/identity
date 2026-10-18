import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--the-project--c0f5ecaf/.cover.tsx';
import TheSynopsis from '../.conversations/claude--the-project--c0f5ecaf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ The Project ]]( claude--The Project--c0f5ecaf )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 September 2026: <Means>$[[ The Project ]]( claude--The Project--c0f5ecaf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
