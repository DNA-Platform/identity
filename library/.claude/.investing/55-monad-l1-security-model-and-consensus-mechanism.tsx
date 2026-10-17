import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/monad-l1-security-model-and-consensus-mechanism/.cover.tsx';
import TheSynopsis from '../.conversations/monad-l1-security-model-and-consensus-mechanism/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad L1 security model and consensus mechanism ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 February 2026: <Means>$[[ Monad L1 security model and consensus mechanism ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
