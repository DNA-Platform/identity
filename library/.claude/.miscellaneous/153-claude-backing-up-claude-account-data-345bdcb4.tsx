import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--backing-up-claude-account-data--345bdcb4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--backing-up-claude-account-data--345bdcb4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[14 May 2026](2026-05-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Backing up Claude account data ]]( claude--Backing up Claude account data--345bdcb4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 May 2026: <Means>$[[ Backing up Claude account data ]]( claude--Backing up Claude account data--345bdcb4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
