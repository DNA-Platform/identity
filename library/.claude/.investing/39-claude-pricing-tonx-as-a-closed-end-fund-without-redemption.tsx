import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--pricing-tonx-as-a-closed-end-fund-without-redemption--eef159b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Pricing TONX as a closed-end fund without redemption ]]( claude--Pricing TONX as a closed-end fund without redemption--eef159b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
