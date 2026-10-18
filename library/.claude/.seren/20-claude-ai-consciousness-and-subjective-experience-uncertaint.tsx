import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
