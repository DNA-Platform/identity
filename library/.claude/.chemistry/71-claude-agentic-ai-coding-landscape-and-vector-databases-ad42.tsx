import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.cover.tsx';
import TheSynopsis from '../.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
