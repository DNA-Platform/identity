import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './monad-l1-security-model-and-consensus-mechanism/.cover.tsx';
import TheSynopsis from './monad-l1-security-model-and-consensus-mechanism/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[21 February 2026](2026-02-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Monad L1 security model and consensus mechanism ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 97 exchanges: <Means>$[[ Monad L1 security model and consensus mechanism ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
        <Append
            identifier="import"
            type=".json"
        >
            ![[ import.json ]]
        </Append>
    </Chapter>
);
