import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.cover.tsx';
import TheSynopsis from './claude--executing-a-40k-position-in-tonx-via-interactive-brokers--95cdfad3/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[2 February 2026](2026-02-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 55 exchanges: <Means>$[[ Executing a 40K position in TONX via Interactive Brokers ]]( claude--Executing a 40K position in TONX via Interactive Brokers--95cdfad3 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
