import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.cover.tsx';
import TheSynopsis from '../.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[30 January 2026](2026-01-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
