import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './manuel-stotzs-satorica-and-ton-connection/.cover.tsx';
import TheSynopsis from './manuel-stotzs-satorica-and-ton-connection/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Manuel Stotz's Satorica and TON connection ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Manuel Stotz's Satorica and TON connection ]]</Means>.
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
