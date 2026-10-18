import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--how-many-patosi-wallets-exist--ba5be707/.cover.tsx';
import TheSynopsis from './claude--how-many-patosi-wallets-exist--ba5be707/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 190 exchanges: <Means>$[[ How many patosi wallets exist… ]]( claude--How many patosi wallets exist…--ba5be707 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
