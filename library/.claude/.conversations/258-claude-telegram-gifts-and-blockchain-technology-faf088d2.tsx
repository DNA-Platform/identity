import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--telegram-gifts-and-blockchain-technology--faf088d2/.cover.tsx';
import TheSynopsis from './claude--telegram-gifts-and-blockchain-technology--faf088d2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Telegram gifts and blockchain technology ]]( claude--Telegram gifts and blockchain technology--faf088d2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Telegram gifts and blockchain technology ]]( claude--Telegram gifts and blockchain technology--faf088d2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
