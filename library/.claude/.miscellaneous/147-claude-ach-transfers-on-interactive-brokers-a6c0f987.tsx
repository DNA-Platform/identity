import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
