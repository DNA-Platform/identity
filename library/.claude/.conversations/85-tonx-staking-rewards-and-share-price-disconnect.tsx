import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './tonx-staking-rewards-and-share-price-disconnect/.cover.tsx';
import TheSynopsis from './tonx-staking-rewards-and-share-price-disconnect/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX staking rewards and share price disconnect ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ TONX staking rewards and share price disconnect ]]</Means>.
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
