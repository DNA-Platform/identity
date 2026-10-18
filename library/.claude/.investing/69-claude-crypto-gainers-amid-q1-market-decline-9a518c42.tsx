import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.cover.tsx';
import TheSynopsis from '../.conversations/claude--crypto-gainers-amid-q1-market-decline--9a518c42/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[22 April 2026](2026-04-22)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Crypto gainers amid Q1 market decline ]]( claude--Crypto gainers amid Q1 market decline--9a518c42 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 22 April 2026: <Means>$[[ Crypto gainers amid Q1 market decline ]]( claude--Crypto gainers amid Q1 market decline--9a518c42 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
