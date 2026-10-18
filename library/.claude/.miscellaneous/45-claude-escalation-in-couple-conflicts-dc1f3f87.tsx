import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--escalation-in-couple-conflicts--dc1f3f87/.cover.tsx';
import TheSynopsis from '../.conversations/claude--escalation-in-couple-conflicts--dc1f3f87/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Escalation in couple conflicts ]]( claude--Escalation in couple conflicts--dc1f3f87 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Escalation in couple conflicts ]]( claude--Escalation in couple conflicts--dc1f3f87 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
