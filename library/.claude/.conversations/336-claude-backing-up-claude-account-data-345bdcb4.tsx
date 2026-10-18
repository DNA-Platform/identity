import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--backing-up-claude-account-data--345bdcb4/.cover.tsx';
import TheSynopsis from './claude--backing-up-claude-account-data--345bdcb4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Backing up Claude account data ]]( claude--Backing up Claude account data--345bdcb4 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Backing up Claude account data ]]( claude--Backing up Claude account data--345bdcb4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
