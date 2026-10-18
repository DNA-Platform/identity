import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--solanas-origins-and-technical-architecture--47b15d86/.cover.tsx';
import TheSynopsis from '../.conversations/claude--solanas-origins-and-technical-architecture--47b15d86/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[12 February 2026](2026-02-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Solana's origins and technical architecture ]]( claude--Solana's origins and technical architecture--47b15d86 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 February 2026: <Means>$[[ Solana's origins and technical architecture ]]( claude--Solana's origins and technical architecture--47b15d86 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
