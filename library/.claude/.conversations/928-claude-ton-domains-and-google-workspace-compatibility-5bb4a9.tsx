import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.cover.tsx';
import TheSynopsis from './claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[11 February 2026](2026-02-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON domains and Google Workspace compatibility ]]( claude--TON domains and Google Workspace compatibility--5bb4a9f2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ TON domains and Google Workspace compatibility ]]( claude--TON domains and Google Workspace compatibility--5bb4a9f2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
