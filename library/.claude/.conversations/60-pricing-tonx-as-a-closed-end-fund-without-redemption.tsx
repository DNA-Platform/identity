import { Append, Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './pricing-tonx-as-a-closed-end-fund-without-redemption/.cover.tsx';
import TheSynopsis from './pricing-tonx-as-a-closed-end-fund-without-redemption/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pricing TONX as a closed-end fund without redemption ]]</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Pricing TONX as a closed-end fund without redemption ]]</Means>.
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
