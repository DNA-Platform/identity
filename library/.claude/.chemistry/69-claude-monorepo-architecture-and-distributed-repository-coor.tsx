import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--monorepo-architecture-and-distributed-repository-coordinatio--b0a794ce/.cover.tsx';
import TheSynopsis from '../.conversations/claude--monorepo-architecture-and-distributed-repository-coordinatio--b0a794ce/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monorepo architecture and distributed repository coordination ]]( claude--Monorepo architecture and distributed repository coordination--b0a794ce )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 12 March 2026: <Means>$[[ Monorepo architecture and distributed repository coordination ]]( claude--Monorepo architecture and distributed repository coordination--b0a794ce )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
