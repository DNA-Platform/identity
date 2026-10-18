import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
