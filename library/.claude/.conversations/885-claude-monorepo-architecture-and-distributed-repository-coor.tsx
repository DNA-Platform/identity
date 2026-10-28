import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--monorepo-architecture-and-distributed-repository-coordinatio--b0a794ce/.cover.tsx';
import TheSynopsis from './claude--monorepo-architecture-and-distributed-repository-coordinatio--b0a794ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monorepo architecture and distributed repository coordination ]]( claude--Monorepo architecture and distributed repository coordination--b0a794ce )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Monorepo architecture and distributed repository coordination ]]( claude--Monorepo architecture and distributed repository coordination--b0a794ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
