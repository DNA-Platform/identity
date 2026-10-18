import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--preserving-continuity-across-account-transition--f54999bb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--preserving-continuity-across-account-transition--f54999bb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 May 2026: <Means>$[[ Preserving continuity across account transition ]]( claude--Preserving continuity across account transition--f54999bb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
