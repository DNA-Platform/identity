import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.cover.tsx';
import TheSynopsis from './orchid-and-gitcoin-crypto-projects-solving-fundamental-probl/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[12 March 2026](2026-03-12)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Orchid and Gitcoin: crypto projects solving fundamental problems ]]</Means>.
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
