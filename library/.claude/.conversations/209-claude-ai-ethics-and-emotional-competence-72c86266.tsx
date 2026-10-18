import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ai-ethics-and-emotional-competence--72c86266/.cover.tsx';
import TheSynopsis from './claude--ai-ethics-and-emotional-competence--72c86266/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[6 January 2026](2026-01-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ AI ethics and emotional competence ]]( claude--AI ethics and emotional competence--72c86266 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 38 exchanges: <Means>$[[ AI ethics and emotional competence ]]( claude--AI ethics and emotional competence--72c86266 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
