import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--google-workspace-alias-domain-login-issues--8d29e604/.cover.tsx';
import TheSynopsis from './claude--google-workspace-alias-domain-login-issues--8d29e604/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[23 February 2026](2026-02-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Google Workspace alias domain login issues ]]( claude--Google Workspace alias domain login issues--8d29e604 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 50 exchanges: <Means>$[[ Google Workspace alias domain login issues ]]( claude--Google Workspace alias domain login issues--8d29e604 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
