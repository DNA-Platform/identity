import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
