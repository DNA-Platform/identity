import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.cover.tsx';
import TheSynopsis from './claude--ai-consciousness-and-subjective-experience-uncertainty--21cbc3b6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 92 exchanges: <Means>$[[ AI consciousness and subjective experience uncertainty ]]( claude--AI consciousness and subjective experience uncertainty--21cbc3b6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
