import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ach-transfers-on-interactive-brokers--a6c0f987/.cover.tsx';
import TheSynopsis from './claude--ach-transfers-on-interactive-brokers--a6c0f987/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[4 May 2026](2026-05-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
