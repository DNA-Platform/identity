import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--checking-ram-and-memory-on-windows--a8cd216e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[25 January 2026](2026-01-25)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 25 January 2026: <Means>$[[ Checking RAM and memory on Windows ]]( claude--Checking RAM and memory on Windows--a8cd216e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
