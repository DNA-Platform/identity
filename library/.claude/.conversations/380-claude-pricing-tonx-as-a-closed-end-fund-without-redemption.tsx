import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.cover.tsx';
import TheSynopsis from './claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
