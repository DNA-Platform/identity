import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--google-workspace-alias-domain-login-issues--8d29e604/.cover.tsx';
import TheSynopsis from '../.conversations/claude--google-workspace-alias-domain-login-issues--8d29e604/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Google Workspace alias domain login issues ]]( claude--Google Workspace alias domain login issues--8d29e604 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 February 2026: <Means>$[[ Google Workspace alias domain login issues ]]( claude--Google Workspace alias domain login issues--8d29e604 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
