import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--crypto-market-spike-triggers-and-patterns--04fb2d5e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto market spike triggers and patterns ]]( claude--Crypto market spike triggers and patterns--04fb2d5e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Crypto market spike triggers and patterns ]]( claude--Crypto market spike triggers and patterns--04fb2d5e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
