import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.cover.tsx';
import TheSynopsis from './claude--agentic-ai-coding-landscape-and-vector-databases--ad424736/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[20 February 2026](2026-02-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Agentic AI coding landscape and vector databases ]]( claude--Agentic AI coding landscape and vector databases--ad424736 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
