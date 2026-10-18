import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON domains and Google Workspace compatibility ]]( claude--TON domains and Google Workspace compatibility--5bb4a9f2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 February 2026: <Means>$[[ TON domains and Google Workspace compatibility ]]( claude--TON domains and Google Workspace compatibility--5bb4a9f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
