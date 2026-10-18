import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ach-transfers-on-interactive-brokers--a6c0f987/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 4 May 2026: <Means>$[[ ACH transfers on Interactive Brokers ]]( claude--ACH transfers on Interactive Brokers--a6c0f987 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
