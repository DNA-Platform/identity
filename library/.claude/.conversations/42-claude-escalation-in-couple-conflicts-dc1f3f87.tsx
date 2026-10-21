import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--escalation-in-couple-conflicts--dc1f3f87/.cover.tsx';
import TheSynopsis from './claude--escalation-in-couple-conflicts--dc1f3f87/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escalation in couple conflicts ]]( claude--Escalation in couple conflicts--dc1f3f87 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 24 exchanges: <Means>$[[ Escalation in couple conflicts ]]( claude--Escalation in couple conflicts--dc1f3f87 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
