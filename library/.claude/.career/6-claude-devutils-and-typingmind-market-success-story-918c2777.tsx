import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--devutils-and-typingmind-market-success-story--918c2777/.cover.tsx';
import TheSynopsis from '../.conversations/claude--devutils-and-typingmind-market-success-story--918c2777/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[17 February 2026](2026-02-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ DevUtils and TypingMind market success story ]]( claude--DevUtils and TypingMind market success story--918c2777 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 February 2026: <Means>$[[ DevUtils and TypingMind market success story ]]( claude--DevUtils and TypingMind market success story--918c2777 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
