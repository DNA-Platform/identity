import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.cover.tsx';
import TheSynopsis from './claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto market spike triggers and patterns ]]( claude--Crypto market spike triggers and patterns--04fb2d5e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Crypto market spike triggers and patterns ]]( claude--Crypto market spike triggers and patterns--04fb2d5e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
