import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--solanas-creation-and-simplex-integration--682e9fa5/.cover.tsx';
import TheSynopsis from './claude--solanas-creation-and-simplex-integration--682e9fa5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[22 May 2026](2026-05-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Solana's creation and Simplex integration ]]( claude--Solana's creation and Simplex integration--682e9fa5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 80 exchanges: <Means>$[[ Solana's creation and Simplex integration ]]( claude--Solana's creation and Simplex integration--682e9fa5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
