import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--academic-credentials-and-research-impact-assessment--c2aadd58/.cover.tsx';
import TheSynopsis from './claude--academic-credentials-and-research-impact-assessment--c2aadd58/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Academic credentials and research impact assessment ]]( claude--Academic credentials and research impact assessment--c2aadd58 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Academic credentials and research impact assessment ]]( claude--Academic credentials and research impact assessment--c2aadd58 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
