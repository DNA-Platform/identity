import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.cover.tsx';
import TheSynopsis from '../.conversations/claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 February 2026: <Means>$[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
