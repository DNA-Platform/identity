import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.cover.tsx';
import TheSynopsis from '../.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[12 May 2026](2026-05-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Academic credentials and research impact assessment ]]( claude--Academic credentials and research impact assessment--c2aadd58 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 May 2026: <Means>$[[ Academic credentials and research impact assessment ]]( claude--Academic credentials and research impact assessment--c2aadd58 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
