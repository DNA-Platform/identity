import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.cover.tsx';
import TheSynopsis from '../.conversations/claude--playing-movies-on-philips-tv-from-flash-drive-or-computer--76140f14/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[12 July 2026](2026-07-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Playing movies on Philips TV from flash drive or computer ]]( claude--Playing movies on Philips TV from flash drive or computer--76140f14 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 July 2026: <Means>$[[ Playing movies on Philips TV from flash drive or computer ]]( claude--Playing movies on Philips TV from flash drive or computer--76140f14 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
