import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--checking-ram-and-memory-on-windows--a8cd216e/.cover.tsx';
import TheSynopsis from './claude--checking-ram-and-memory-on-windows--a8cd216e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 153 exchanges: <Means>$[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
