import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[29 December 2025](2025-12-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI ethics and emotional competence ]]( claude--AI ethics and emotional competence--72c86266 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 29 December 2025: <Means>$[[ AI ethics and emotional competence ]]( claude--AI ethics and emotional competence--72c86266 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
