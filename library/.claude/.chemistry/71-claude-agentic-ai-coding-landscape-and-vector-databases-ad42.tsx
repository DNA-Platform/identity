import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.cover.tsx';
import TheSynopsis from '../.conversations/claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
