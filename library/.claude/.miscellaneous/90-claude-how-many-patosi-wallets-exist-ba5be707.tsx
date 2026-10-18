import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.cover.tsx';
import TheSynopsis from '../.conversations/claude--how-many-patosi-wallets-exist--ba5be707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 January 2026: <Means>$[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
