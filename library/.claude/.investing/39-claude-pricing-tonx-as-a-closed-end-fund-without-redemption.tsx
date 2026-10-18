import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
